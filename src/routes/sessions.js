import express from 'express';
import { z } from 'zod';
import { pool } from '../db/pool.js';

const router = express.Router();

// ============================================================================
// INPUT VALIDATION SCHEMAS (Zod)
// ============================================================================

/**
 * Schema for POST /api/sessions request body.
 * - Ensures rider_id and expert_id are valid UUIDs
 * - Validates initial_symptom is non-empty and reasonable length
 * - Ensures status is within enum bounds
 * - Ensures highest_tier_reached is within enum bounds
 * - Ensures is_public_broadcast is a boolean
 */
const createSessionSchema = z.object({
  rider_id: z
    .string()
    .uuid('rider_id must be a valid UUID')
    .trim(),
  expert_id: z
    .string()
    .uuid('expert_id must be a valid UUID')
    .nullable()
    .default(null),
  vehicle_id: z
    .string()
    .uuid('vehicle_id must be a valid UUID')
    .nullable()
    .default(null),
  initial_symptom: z
    .string()
    .min(3, 'initial_symptom must be at least 3 characters')
    .max(500, 'initial_symptom must not exceed 500 characters')
    .trim(),
  status: z
    .enum(['open', 'active_chat', 'live_stream', 'resolved', 'cancelled'])
    .default('open'),
  highest_tier_reached: z
    .enum(['text', 'audio_note', 'webrtc_video'])
    .default('text'),
  is_public_broadcast: z
    .boolean()
    .default(false),
});

/**
 * Schema for PATCH /api/sessions/:id/broadcast request body.
 * - Ensures the authenticated user_id is a valid UUID
 * - Ensures is_public_broadcast is a boolean toggle value
 */
const broadcastToggleSchema = z.object({
  user_id: z
    .string()
    .uuid('user_id must be a valid UUID')
    .trim(),
  is_public_broadcast: z
    .boolean(),
});

// ============================================================================
// MIDDLEWARE: Creator Verification
// ============================================================================

/**
 * Middleware to verify the updating user is marked as a content creator.
 * Executes a defensive query against the users table to validate is_creator = true.
 * Prevents non-creators from toggling public broadcast state.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const verifyCreatorStatus = async (req, res, next) => {
  let client;
  try {
    // Extract user_id from the validated request body (set by route handler)
    const { user_id } = req.body;

    // Acquire a database connection from the pool
    client = await pool.connect();

    // Query the users table to check creator status
    const query = 'SELECT is_creator FROM users WHERE id = $1';
    const result = await client.query(query, [user_id]);

    // If user not found, return 404
    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'User not found',
        user_id,
      });
    }

    // Destructure is_creator from the result
    const { is_creator } = result.rows[0];

    // If user is not marked as creator, return 403 Forbidden
    if (!is_creator) {
      return res.status(403).json({
        error: 'Only content creators can toggle broadcast status',
        user_id,
      });
    }

    // User is verified as creator; proceed to route handler
    next();
  } catch (error) {
    // Log the error and return 500 Internal Server Error
    console.error('Error verifying creator status:', error.message);
    return res.status(500).json({
      error: 'Internal server error during creator verification',
    });
  } finally {
    // Always release the connection back to the pool
    if (client) {
      client.release();
    }
  }
};

// ============================================================================
// POST /api/sessions
// ============================================================================

/**
 * POST /api/sessions
 *
 * Initialize a new troubleshooting/triage session.
 * - Validates all input fields strictly using Zod schema
 * - Checks that rider_id exists in users table
 * - Optionally verifies expert_id exists if provided
 * - Optionally verifies vehicle_id exists if provided
 * - Inserts new record into triage_sessions table
 * - Returns the created session with full details
 */
router.post('/', async (req, res) => {
  let client;
  try {
    // ========================================================================
    // STEP 1: INPUT VALIDATION (Zod)
    // ========================================================================
    // Parse and validate request body against the schema.
    // If validation fails, Zod throws a ZodError which we catch below.
    const validatedData = createSessionSchema.parse(req.body);

    // Destructure validated fields for clarity
    const {
      rider_id,
      expert_id,
      vehicle_id,
      initial_symptom,
      status,
      highest_tier_reached,
      is_public_broadcast,
    } = validatedData;

    // Acquire a connection from the pool
    client = await pool.connect();

    // ========================================================================
    // STEP 2: DATABASE VALIDATION (Referential Integrity)
    // ========================================================================

    // Verify rider_id exists in users table
    const riderQuery = 'SELECT id FROM users WHERE id = $1';
    const riderResult = await client.query(riderQuery, [rider_id]);
    if (riderResult.rows.length === 0) {
      return res.status(400).json({
        error: 'Invalid rider_id: user not found',
        rider_id,
      });
    }

    // If expert_id is provided, verify it exists in users table
    if (expert_id) {
      const expertQuery = 'SELECT id FROM users WHERE id = $1';
      const expertResult = await client.query(expertQuery, [expert_id]);
      if (expertResult.rows.length === 0) {
        return res.status(400).json({
          error: 'Invalid expert_id: user not found',
          expert_id,
        });
      }
    }

    // If vehicle_id is provided, verify it exists in vehicles table
    if (vehicle_id) {
      const vehicleQuery = 'SELECT id FROM vehicles WHERE id = $1';
      const vehicleResult = await client.query(vehicleQuery, [vehicle_id]);
      if (vehicleResult.rows.length === 0) {
        return res.status(400).json({
          error: 'Invalid vehicle_id: vehicle not found',
          vehicle_id,
        });
      }
    }

    // ========================================================================
    // STEP 3: INSERT NEW TRIAGE SESSION
    // ========================================================================

    // Construct parameterized INSERT query to prevent SQL injection
    // Placeholders ($1, $2, etc.) are filled by the pool with safe binding
    const insertQuery = `
      INSERT INTO triage_sessions (
        rider_id,
        expert_id,
        vehicle_id,
        initial_symptom,
        status,
        highest_tier_reached,
        is_public_broadcast,
        created_at,
        updated_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING *;
    `;

    const insertResult = await client.query(insertQuery, [
      rider_id,
      expert_id,
      vehicle_id,
      initial_symptom,
      status,
      highest_tier_reached,
      is_public_broadcast,
    ]);

    // Extract the newly created session record
    const newSession = insertResult.rows[0];

    // ========================================================================
    // STEP 4: RETURN SUCCESS RESPONSE
    // ========================================================================

    return res.status(201).json({
      status: 'success',
      data: {
        session: newSession,
      },
    });
  } catch (error) {
    // Handle Zod validation errors with detailed field-level feedback
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      return res.status(400).json({
        error: 'Validation failed',
        details: formattedErrors,
      });
    }

    // Log unexpected errors and return generic 500
    console.error('Error creating triage session:', error.message);
    return res.status(500).json({
      error: 'Internal server error while creating session',
    });
  } finally {
    // Always release the database connection back to the pool
    if (client) {
      client.release();
    }
  }
});

// ============================================================================
// PATCH /api/sessions/:id/broadcast
// ============================================================================

/**
 * PATCH /api/sessions/:id/broadcast
 *
 * Toggle the is_public_broadcast flag on a triage session.
 * - Requires the authenticated user to be a content creator (checked by middleware)
 * - Validates session UUID from URL params
 * - Validates request body (user_id, is_public_broadcast)
 * - Verifies the session exists before updating
 * - Updates is_public_broadcast to the new boolean value
 * - Returns the updated session
 */
router.patch(
  '/:id/broadcast',
  verifyCreatorStatus,
  async (req, res) => {
    let client;
    try {
      // ====================================================================
      // STEP 1: VALIDATE URL PARAMETER (Session ID)
      // ====================================================================

      // Ensure session ID from URL is a valid UUID format
      const sessionIdSchema = z.string().uuid('Session ID must be a valid UUID');
      let sessionId;
      try {
        sessionId = sessionIdSchema.parse(req.params.id);
      } catch (error) {
        return res.status(400).json({
          error: 'Invalid session ID format',
          details: error.errors,
        });
      }

      // ====================================================================
      // STEP 2: VALIDATE REQUEST BODY
      // ====================================================================

      const validatedData = broadcastToggleSchema.parse(req.body);
      const { user_id, is_public_broadcast } = validatedData;

      // Acquire a connection from the pool
      client = await pool.connect();

      // ====================================================================
      // STEP 3: VERIFY SESSION EXISTS
      // ====================================================================

      const selectQuery = 'SELECT id FROM triage_sessions WHERE id = $1';
      const selectResult = await client.query(selectQuery, [sessionId]);

      if (selectResult.rows.length === 0) {
        return res.status(404).json({
          error: 'Session not found',
          session_id: sessionId,
        });
      }

      // ====================================================================
      // STEP 4: UPDATE BROADCAST FLAG
      // ====================================================================

      // Construct parameterized UPDATE query
      // Note: updated_at is automatically set by database trigger (fn_set_updated_at)
      const updateQuery = `
        UPDATE triage_sessions
        SET is_public_broadcast = $2
        WHERE id = $1
        RETURNING *;
      `;

      const updateResult = await client.query(updateQuery, [
        sessionId,
        is_public_broadcast,
      ]);

      // Extract the updated session record
      const updatedSession = updateResult.rows[0];

      // ====================================================================
      // STEP 5: RETURN SUCCESS RESPONSE
      // ====================================================================

      return res.status(200).json({
        status: 'success',
        data: {
          session: updatedSession,
        },
      });
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        return res.status(400).json({
          error: 'Validation failed',
          details: formattedErrors,
        });
      }

      // Log unexpected errors
      console.error('Error updating broadcast status:', error.message);
      return res.status(500).json({
        error: 'Internal server error while updating broadcast status',
      });
    } finally {
      // Always release the database connection
      if (client) {
        client.release();
      }
    }
  }
);

// ============================================================================
// ERROR BOUNDARY: Global Error Handler
// ============================================================================

/**
 * 404 Not Found handler for this router.
 * Responds if a route is not matched.
 */
router.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    method: req.method,
    path: req.path,
  });
});

export default router;
