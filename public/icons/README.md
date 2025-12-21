# MOTO² App Icons

This directory contains app icon assets optimized for different platforms and use cases.

## Icon Styles

### 1. Racing Badge (`app-icon-racing-badge.svg`)

**Design**: Bold M² mark in black on Ducati Red background
- **Background**: Ducati Red (#D40000)
- **Mark**: Matte Black (#1A1A1A)
- **Style**: Aggressive, motorsport-inspired
- **Best For**: iOS app icon, Android launcher icon, PWA icon

### 2. Minimal M² (`app-icon-minimal.svg`)

**Design**: M² mark in red on black background
- **Background**: Matte Black (#1A1A1A)
- **Mark**: Ducati Red (#D40000)
- **Style**: Clean, modern, professional
- **Best For**: Desktop applications, browser extensions, macOS icon

### 3. Vintage Number Plate (`app-icon-vintage.svg`)

**Design**: M² with red accent "2" on cream background
- **Background**: Cream (#F5F1E8)
- **Mark**: Matte Black (#1A1A1A) with Ducati Red (#D40000) accent on "2"
- **Style**: Retro, approachable, community-focused
- **Best For**: Social media profiles, community-focused variants

## Technical Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **Size**: 512×512 base resolution
- **Border Radius**: 115px (~22% for iOS-style rounded square)
- **Font**: Bebas Neue Bold
- **Superscript**: 60% sizing rule maintained

## Platform-Specific Exports

### iOS (Apple)

```
app-icon-180x180.png       (iPhone home screen)
app-icon-120x120.png       (iPhone @2x)
app-icon-152x152.png       (iPad)
app-icon-1024x1024.png     (App Store)
```

### Android

```
app-icon-192x192.png       (xxxhdpi)
app-icon-144x144.png       (xxhdpi)
app-icon-96x96.png         (xhdpi)
app-icon-72x72.png         (hdpi)
app-icon-48x48.png         (mdpi)
app-icon-512x512.png       (Google Play Store)
```

### Web (PWA / Favicon)

```
favicon-16x16.png          (Browser tab)
favicon-32x32.png          (Browser tab @2x)
favicon-48x48.png          (Windows)
apple-touch-icon.png       (180×180, iOS web clip)
android-chrome-192x192.png (Android homescreen)
android-chrome-512x512.png (Android splash)
```

### Windows

```
app-icon-70x70.png         (Small tile)
app-icon-150x150.png       (Medium tile)
app-icon-310x310.png       (Large tile)
```

## Exporting PNG Icons

### Using Inkscape (Recommended)

```bash
# Export at 512px
inkscape app-icon-minimal.svg --export-type=png --export-width=512 --export-filename=app-icon-512.png

# Batch export multiple sizes
for size in 16 32 48 64 72 96 120 128 144 152 180 192 256 310 512 1024; do
  inkscape app-icon-minimal.svg --export-type=png --export-width=$size --export-filename=app-icon-${size}x${size}.png
done
```

### Using rsvg-convert

```bash
# Export at 512px
rsvg-convert -w 512 -h 512 app-icon-minimal.svg > app-icon-512.png

# Batch export
for size in 16 32 48 64 72 96 120 128 144 152 180 192 256 310 512 1024; do
  rsvg-convert -w $size -h $size app-icon-minimal.svg > app-icon-${size}x${size}.png
done
```

### Using ImageMagick

```bash
# Export at 512px
convert -background none -density 300 app-icon-minimal.svg -resize 512x512 app-icon-512.png
```

## Creating favicon.ico

Multi-resolution favicon with 16×16, 32×32, 48×48:

```bash
# First create the PNG sizes
inkscape app-icon-minimal.svg --export-type=png --export-width=16 --export-filename=favicon-16.png
inkscape app-icon-minimal.svg --export-type=png --export-width=32 --export-filename=favicon-32.png
inkscape app-icon-minimal.svg --export-type=png --export-width=48 --export-filename=favicon-48.png

# Combine into .ico
convert favicon-16.png favicon-32.png favicon-48.png favicon.ico
```

## Usage in HTML

```html
<!-- Modern SVG Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">

<!-- Fallback PNG -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Android Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">
```

## Usage in Web App Manifest

```json
{
  "name": "Moto²",
  "short_name": "Moto²",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#D40000",
  "background_color": "#1A1A1A",
  "display": "standalone"
}
```

## Optimization

After exporting PNG files, optimize them:

```bash
# Using pngquant (lossy, excellent quality)
pngquant --quality=85-95 --ext .png --force app-icon-*.png

# Using optipng (lossless)
optipng -o7 app-icon-*.png

# Using ImageOptim (macOS GUI)
# Drag and drop PNG files into ImageOptim app
```

## More Information

For complete brand guidelines and logo specifications, see:
- [Brand Style Guide](../../docs/brand/STYLE_GUIDE.md)
- [Logo Assets](../logos/README.md)
