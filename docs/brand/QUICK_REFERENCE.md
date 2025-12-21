# MOTO² Branding Quick Reference

## 🎨 Color Codes

```css
/* Brand Colors */
--moto-red:    #D40000;  /* Ducati Red - Primary brand color */
--moto-black:  #1A1A1A;  /* Matte Black - Structure */
--moto-cream:  #F5F1E8;  /* Cream - Warmth, vintage */
--moto-white:  #FFFFFF;  /* White - High contrast */
--moto-silver: #B8B8B8;  /* Silver - Metallic accents */
```

## 📝 Typography

**Display/Headers:** Bebas Neue (Bold) | Oswald | Montserrat  
**Body Text:** Inter | Roboto | Open Sans  
**Monospace:** Courier New (for stats/numbers)

**Letter Spacing:** -3% tracking for MOTO²  
**Superscript:** 60% size, positioned upper-right

## 📁 Logo Files

| Use Case | File |
|----------|------|
| **Dark Mode, Headers** | `moto2-primary-red-on-black.svg` |
| **Light Mode, Print** | `moto2-primary-black-on-cream.svg` |
| **Buttons, CTAs** | `moto2-primary-white-on-red.svg` |
| **Single Color** | `moto2-primary-monochrome-*.svg` |
| **Small Spaces** | `m2-minimal-*.svg` |
| **App Icon** | `app-icon-minimal.svg` (or racing/vintage) |
| **Favicon** | `favicon.svg` |

## 🔗 In HTML

```html
<!-- Logo in Header -->
<img src="/logos/moto2-primary-red-on-black.svg" alt="MOTO²" width="200">

<!-- App Icon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/icons/app-icon-minimal.svg">

<!-- Inline in README -->
![MOTO² Logo](./public/logos/moto2-primary-red-on-black.svg)
```

## ⚡ React/JSX

```jsx
// Logo Component
function Logo({ variant = 'primary', width = 200 }) {
  const variants = {
    primary: '/logos/moto2-primary-red-on-black.svg',
    vintage: '/logos/moto2-primary-black-on-cream.svg',
    action: '/logos/moto2-primary-white-on-red.svg',
    minimal: '/logos/m2-minimal-red-on-black.svg'
  };
  
  return (
    <img 
      src={variants[variant]} 
      alt="MOTO²" 
      width={width}
      style={{ display: 'block' }}
    />
  );
}
```

## 🎯 When to Use Each Version

| Scenario | Logo Choice | Reason |
|----------|-------------|--------|
| Website header (dark) | Primary Red/Black | Best visibility, brand recognition |
| Documentation | Black/Cream | Professional, readable on white |
| Call-to-action button | White/Red | High contrast, action-oriented |
| Favicon/App icon | M² Minimal | Readable at small sizes |
| Social media avatar | M² Minimal | Square format, scalable |
| Embroidery/Merch | Monochrome | Single-color production |
| Loading spinner | M² Minimal | Compact, recognizable |

## 🚫 Don'ts

❌ Don't stretch or skew the logo  
❌ Don't change fonts or spacing  
❌ Don't add effects (shadows, gradients)  
❌ Don't place on busy backgrounds  
❌ Don't recreate or modify the mark  
❌ Don't use at sizes smaller than 32px (use M² instead)

## ✅ Do's

✓ Maintain aspect ratio when scaling  
✓ Use appropriate color variation for background  
✓ Ensure minimum clear space (height of "2")  
✓ Use official files from `/public/logos/`  
✓ Keep superscript "2" properly positioned  

## 📊 Minimum Sizes

| Format | Minimum Size | Use Case |
|--------|--------------|----------|
| Primary MOTO² | 100px width | General use |
| M² Minimal | 32px | Favicons, small UI |
| Print | 0.5 inches | Business cards, merch |

## 🔍 File Locations

```
/public
  ├── favicon.svg              # Browser tab icon (32×32)
  ├── /logos                   # All logo variations
  │   ├── moto2-primary-*.svg  # Full wordmark (5 versions)
  │   ├── m2-minimal-*.svg     # Compact mark (4 versions)
  │   └── moto2-lockup-*.svg   # With company name (2 versions)
  └── /icons                   # App icon styles
      └── app-icon-*.svg       # 512×512 rounded (3 styles)

/docs/brand
  ├── STYLE_GUIDE.md           # Complete specifications
  ├── GALLERY.html             # Visual showcase
  └── QUICK_REFERENCE.md       # This file
```

## 🌐 External Resources

- **Bebas Neue Font:** https://fonts.google.com/specimen/Bebas+Neue
- **Inter Font:** https://fonts.google.com/specimen/Inter
- **Full Style Guide:** `/docs/brand/STYLE_GUIDE.md`
- **Visual Gallery:** `/docs/brand/GALLERY.html`

## 💡 Tips

1. **SVG First:** Always use SVG for web - they scale perfectly and are tiny files
2. **PNG Export:** Only export to PNG for platforms that don't support SVG
3. **Contrast Check:** Ensure 4.5:1 contrast ratio for accessibility
4. **Loading:** Consider using M² minimal for loading states
5. **Responsive:** Use appropriate logo size for viewport (M² on mobile)

---

**Need help?** Check the complete style guide: `/docs/brand/STYLE_GUIDE.md`
