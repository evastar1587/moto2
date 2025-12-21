# MOTO² Logo Assets

This directory contains all official MOTO² logo files in SVG format.

## Primary Logos (MOTO²)

Full wordmark with superscript "2":

### Color Variations

1. **`moto2-primary-red-on-black.svg`** — PRIMARY VERSION
   - Text: Ducati Red (#D40000)
   - Background: Matte Black (#1A1A1A)
   - Use: App icons, headers, dark mode UI, stickers

2. **`moto2-primary-black-on-cream.svg`** — VINTAGE VERSION
   - Text: Matte Black (#1A1A1A)
   - Background: Cream (#F5F1E8)
   - Use: Documentation, posters, light mode UI, print materials

3. **`moto2-primary-white-on-red.svg`** — ACTION VERSION
   - Text: White (#FFFFFF)
   - Background: Ducati Red (#D40000)
   - Use: Buttons, badges, high-contrast CTAs

4. **`moto2-primary-monochrome-black.svg`** — PREMIUM BLACK
   - Text: Matte Black (#1A1A1A)
   - Background: Transparent
   - Use: Embroidery, laser etching, light backgrounds

5. **`moto2-primary-monochrome-white.svg`** — PREMIUM WHITE
   - Text: White (#FFFFFF)
   - Background: Transparent
   - Use: Embroidery, laser etching, dark backgrounds

## Secondary Logos (M²)

Minimal mark for constrained spaces:

### Color Variations

1. **`m2-minimal-red-on-black.svg`** — PRIMARY COMPACT
2. **`m2-minimal-black-on-cream.svg`** — VINTAGE COMPACT
3. **`m2-minimal-white-on-red.svg`** — ACTION COMPACT
4. **`m2-minimal-monochrome-black.svg`** — PREMIUM BLACK COMPACT
5. **`m2-minimal-monochrome-white.svg`** — PREMIUM WHITE COMPACT (not yet created)

## Brand Lockups

Combined logo and company name:

1. **`moto2-lockup-horizontal.svg`** — Horizontal layout
   - Format: MOTO² + "moto2moto"
   - Use: Website headers, email signatures

2. **`moto2-lockup-stacked.svg`** — Stacked layout
   - Format: "moto2moto" above MOTO²
   - Use: Social media, square formats

## Usage Guidelines

### When to Use Each Logo

- **Primary (MOTO²)**: Most cases, especially when space allows (>100px width)
- **Minimal (M²)**: Small spaces, favicons, app icons (<100px)
- **Lockups**: Formal contexts requiring company name

### Technical Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **Font**: Bebas Neue (loaded via Google Fonts)
- **Letter Spacing**: -3% tracking
- **Superscript Size**: 60% of main text
- **Viewbox**: Varies by logo type

### Do's ✓

- Use official files from this directory
- Maintain aspect ratio when scaling
- Choose appropriate color variation for background
- Ensure minimum size requirements (see style guide)

### Don'ts ✗

- Don't recreate or modify the logo
- Don't change colors outside approved variations
- Don't add effects (shadows, gradients, etc.)
- Don't place on busy backgrounds without contrast

## Need PNG Versions?

To export PNG at specific sizes:

```bash
# Using Inkscape (command line)
inkscape moto2-primary-red-on-black.svg --export-type=png --export-width=512 --export-filename=moto2-512.png

# Using ImageMagick/rsvg-convert
rsvg-convert -w 512 -h 153 moto2-primary-red-on-black.svg > moto2-512.png
```

Common export sizes: 16, 32, 64, 128, 256, 512, 1024, 2048 pixels

## More Information

For complete brand guidelines, see: [`/docs/brand/STYLE_GUIDE.md`](../../docs/brand/STYLE_GUIDE.md)
