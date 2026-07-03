import { useState, useEffect, useCallback } from 'react';
import { tools as mockTools } from '../data/tools';
import { config } from '../config';

/**
 * useTools — fetches tool inventory from the API configured by VITE_API_URL.
 * If the network request fails and fallbackToMock is true, the hook will
 * populate tools from the local mock data (src/data/tools.js).
 *
 * Usage: const { tools, loading, error, refresh } = useTools();
 */
export const useTools = ({ fallbackToMock = true } = {}) => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTools = useCallback(async (signal) => {
    setLoading(true);
    setError(null);

    const baseUrl = (config && config.api && config.api.url) ? config.api.url.replace(/\/+$/, '') : '';
    const endpoint = baseUrl ? `${baseUrl}/tools` : '/tools';

    try {
      const resp = await fetch(endpoint, { signal });
      if (!resp.ok) {
        throw new Error(`API responded with ${resp.status}`);
      }

      const body = await resp.json();
      // Accept either an array or an object with a `data` field
      const data = Array.isArray(body) ? body : (body && body.data) ? body.data : [];
      setTools(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tools from API:', err);
      setError(err.message || String(err));
      if (fallbackToMock) {
        // Graceful fallback to bundled mock data so the UI remains usable in dev
        setTools(mockTools);
      } else {
        setTools([]);
      }
    } finally {
      setLoading(false);
    }
  }, [fallbackToMock]);

  useEffect(() => {
    const controller = new AbortController();
    fetchTools(controller.signal);
    return () => controller.abort();
  }, [fetchTools]);

  const refresh = useCallback(() => {
    const controller = new AbortController();
    fetchTools(controller.signal);
    // no cleanup for this one-shot caller; callers shouldn't rely on abort here
  }, [fetchTools]);

  return { tools, loading, error, refresh };
};
