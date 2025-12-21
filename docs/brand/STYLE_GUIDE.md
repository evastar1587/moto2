# MOTO² Brand Style Guide

## Logo Design

### Primary Logo: MOTO²

The primary MOTO² logo is the cornerstone of our brand identity, combining bold typography with motorsport heritage.

#### Typography Specifications

- **Font**: Bebas Neue (Bold)
- **Letter Spacing**: -3% tracking for tight, impactful appearance
- **Superscript "2"**:
  - Size: 60% of main text height
  - Position: Upper-right of the last "O"
  - Maintains same font and weight as main text

#### Font Selection Rationale

We selected **Bebas Neue Bold** for the MOTO² wordmark because:
- Strong, condensed letterforms evoke speed and performance
- Excellent legibility at all sizes (from favicons to billboards)
- High x-height ensures readability in digital applications
- Pairs well with modern body fonts (Inter, Roboto)

**Alternative Display Fonts** (use consistently if substituting):
- Oswald (Bold)
- Montserrat (ExtraBold)
- Anton

---

## Color Palette

### Brand Colors

#### Version 1: Ducati Red on Matte Black (PRIMARY)
- **Text/Mark**: `#D40000` (Ducati Red)
- **Background**: `#1A1A1A` (Matte Black)
- **Usage**: App icon, headers, dark mode UI, stickers, merchandise
- **Application**: Default brand color scheme for digital products

#### Version 2: Matte Black on Cream (Vintage)
- **Text/Mark**: `#1A1A1A` (Matte Black)
- **Background**: `#F5F1E8` (Cream)
- **Usage**: Documentation, posters, light mode UI, print materials
- **Application**: Professional documents, community materials

#### Version 3: White on Ducati Red (Action)
- **Text/Mark**: `#FFFFFF` (White)
- **Background**: `#D40000` (Ducati Red)
- **Usage**: Buttons, badges, high-contrast CTAs, emergency alerts
- **Application**: Interactive elements requiring immediate attention

#### Version 4: Monochrome (Premium)
- **All Black**: `#1A1A1A` on transparent or light backgrounds
- **All White**: `#FFFFFF` on transparent or dark backgrounds
- **Usage**: Embroidery, laser etching, single-color applications, minimalist contexts
- **Application**: Physical branding where color isn't available

### Supporting Colors

From existing design system:
- **Silver**: `#B8B8B8` — Metallic accents, borders
- **Success**: `#4CAF50` — Positive actions, confirmations
- **Warning**: `#FFC107` — Cautions, alerts
- **Error**: `#D40000` — Errors, critical alerts (matches Ducati Red)

---

## Secondary Logo: M²

### Minimal Mark Specifications

The M² mark is a compact version of the primary logo for constrained spaces.

- **Font**: Bebas Neue (Bold)
- **Superscript "2"**: Same 60% sizing rule applies
- **Use Cases**:
  - App icons (512×512, 180×180, 32×32, 16×16)
  - Favicons
  - Social media profile images
  - Watermarks
  - Loading indicators

---

## Logo Usage Guidelines

### Clear Space

Maintain minimum clear space around the logo equal to the height of the "2" superscript on all sides.

### Minimum Sizes

- **Digital**: 32px height minimum for primary logo, 16px for M² mark
- **Print**: 0.5 inches height minimum for primary logo

### Logo Placement

- **Headers**: Left-aligned, primary red on black version
- **Footers**: Centered or left-aligned, adapt to page background
- **App Icons**: Use M² minimal mark in appropriate color variation

### Do's ✓

- Use official logo files from the `/public/logos` directory
- Maintain aspect ratio when scaling
- Use appropriate color variation for background
- Ensure sufficient contrast for readability
- Keep superscript "2" properly positioned

### Don'ts ✗

- Do not stretch, skew, or distort the logo
- Do not change font, spacing, or superscript size
- Do not add effects (shadows, gradients, outlines)
- Do not place on busy backgrounds without sufficient contrast
- Do not recreate or approximate the logo
- Do not place logo text on angles or curves

---

## Brand Lockups

### Horizontal Lockup

**Format**: `MOTO² moto2moto`
- Logo on left, company name on right
- Company name in Inter Regular, lowercase
- Spacing: 1.5× the width of "O" between logo and text

**Use Cases**: Website headers, email signatures, business cards

### Stacked Lockup

```
moto2moto
  MOTO²
```

- Company name above, logo below
- Both elements center-aligned
- Spacing: 0.5× logo height between elements

**Use Cases**: Social media posts, posters, square formats

---

## Typography System

### Display/Heading Fonts

- **Primary**: Bebas Neue (Bold, ExtraBold)
- **Alternatives**: Oswald (Bold), Montserrat (ExtraBold)
- **Usage**: Headings, hero text, emphasis, CTAs

### Body Fonts

- **Primary**: Inter (400, 500, 700, 900)
- **Alternatives**: Roboto, Open Sans
- **Usage**: Body text, UI elements, forms, navigation

### Accent Fonts (Optional)

- **Monospace**: Courier New, Consolas, Monaco
- **Usage**: Numbers, stats, code, technical specifications

### Type Scale

```
H1: 72px (4.5rem) — Hero headlines
H2: 48px (3rem) — Page titles
H3: 32px (2rem) — Section headers
H4: 24px (1.5rem) — Subsection headers
Body: 16px (1rem) — Default text
Small: 14px (0.875rem) — Captions, labels
Tiny: 12px (0.75rem) — Legal, footnotes
```

---

## App Icon Concepts

### Racing Badge
- **Background**: Ducati Red (`#D40000`)
- **Mark**: M² in Matte Black (`#1A1A1A`)
- **Style**: Bold, aggressive, motorsport-inspired
- **Platform**: iOS, Android, PWA

### Minimal M²
- **Background**: Matte Black (`#1A1A1A`)
- **Mark**: Ducati Red (`#D40000`)
- **Style**: Clean, modern, professional
- **Platform**: Desktop apps, browser extension

### Vintage Number Plate
- **Background**: Cream (`#F5F1E8`)
- **Mark**: M in Black, 2 in Ducati Red (`#D40000`)
- **Style**: Retro, approachable, community-focused
- **Platform**: Social media, community apps

---

## File Formats & Exports

### Logo Files

Located in `/public/logos/`:

#### Primary Logo (MOTO²)
- `moto2-primary-red-on-black.svg` — Primary version
- `moto2-primary-black-on-cream.svg` — Vintage version
- `moto2-primary-white-on-red.svg` — Action version
- `moto2-primary-monochrome-black.svg` — Premium black
- `moto2-primary-monochrome-white.svg` — Premium white

#### Secondary Logo (M²)
- `m2-minimal-red-on-black.svg` — Primary compact
- `m2-minimal-black-on-cream.svg` — Vintage compact
- `m2-minimal-white-on-red.svg` — Action compact
- `m2-minimal-monochrome-black.svg` — Premium black compact

#### Brand Lockups
- `moto2-lockup-horizontal.svg` — Horizontal layout
- `moto2-lockup-stacked.svg` — Stacked layout

### App Icons

Located in `/public/icons/`:
- `app-icon-racing-badge.svg` — Red background version
- `app-icon-minimal.svg` — Black background version
- `app-icon-vintage.svg` — Cream background version

### Export Specifications

**Vector (SVG)**:
- Use for web, scalable applications
- Include embedded Google Fonts link
- Optimize with SVGO (remove unnecessary attributes)

**Raster (PNG)**:
- Export at: 16×16, 32×32, 64×64, 128×128, 256×256, 512×512
- Use transparent backgrounds for monochrome versions
- Optimize with pngquant or similar

**Favicon**:
- `favicon.ico` (multi-resolution: 16×16, 32×32, 48×48)
- `apple-touch-icon.png` (180×180)
- `android-chrome-512x512.png` (512×512)

---

## Brand Voice & Messaging

### Core Values
- **Right to Repair**: Empowerment through knowledge
- **Community**: Peer-to-peer support and collaboration
- **Accessibility**: Tools and knowledge for everyone
- **Heritage**: Respect for motorcycle culture and craft

### Tone of Voice
- **Bold but approachable**: Confident without intimidation
- **Technical but clear**: Expertise accessible to all skill levels
- **Energetic but warm**: Passionate about riding and fixing
- **Local but inclusive**: Portland-focused, welcoming to all

---

## Credits & Attribution

### Design
- Brand identity designed for MOTO² (moto2moto)
- Portland Motorcycle & Moped Community
- Year: 2024

### Fonts
- **Bebas Neue**: Dharma Type (SIL Open Font License)
- **Inter**: Rasmus Andersson (SIL Open Font License)

### Inspiration
- Ducati Red: Heritage motorsport color
- Vintage racing number plates
- Portland DIY culture

---

## Quick Reference

### Hex Color Codes
```css
--moto-red: #D40000;
--moto-black: #1A1A1A;
--moto-cream: #F5F1E8;
--moto-white: #FFFFFF;
--moto-silver: #B8B8B8;
```

### Font Stack
```css
--font-display: 'Bebas Neue', 'Oswald', 'Montserrat', sans-serif;
--font-body: 'Inter', 'Roboto', 'Open Sans', system-ui, sans-serif;
--font-mono: 'Courier New', 'Consolas', 'Monaco', monospace;
```

### Logo Usage Decision Tree
1. **Digital product?** → Use primary red on black
2. **Print/documentation?** → Use black on cream
3. **Call-to-action?** → Use white on red
4. **Single color only?** → Use monochrome
5. **Small space (<64px)?** → Use M² minimal mark

---

*Last Updated: December 2024*
*Version: 1.0*
