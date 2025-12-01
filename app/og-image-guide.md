# Open Graph Image Creation Guide

## Requirements

Create an Open Graph image at `public/og-image.jpg` with the following specifications:

### Dimensions
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1

### Design Elements

Include:
1. **Company Logo** - H&S E-commerce logo (top left or center)
2. **Headline** - "H&S E-commerce LTD"
3. **Subheadline** - "Professional 3PL Fulfilment Services UK"
4. **Tagline/Value Prop** - "Your Trusted 3PL Partner Since 2015"
5. **Visual Elements** - Use brand colors (black #000000 and yellow #fdb913)

### Design Tips

- Keep text large and readable (minimum 24px for body, 48px+ for headlines)
- Use high contrast for readability
- Include subtle warehouse/fulfilment imagery if desired
- Maintain brand consistency with website colors
- Ensure text is within the safe area (avoid edges)

### Tools to Create

- **Canva**: Use custom dimensions 1200x630
- **Figma**: Design template available
- **Adobe Photoshop/Illustrator**: Professional design tools
- **Online OG Image Generators**: og-image.vercel.app, etc.

### Example Design Structure

```
┌─────────────────────────────────────┐
│ [Logo]  H&S E-commerce LTD          │
│                                     │
│  Professional 3PL Fulfilment        │
│  Services UK                        │
│                                     │
│  Your Trusted 3PL Partner           │
│  Since 2015                         │
│                                     │
│         [Background Image]          │
└─────────────────────────────────────┘
```

### File Placement

Save the final image as: `public/og-image.jpg`

The metadata in `app/layout.tsx` already references this file, so once created, it will automatically be used for social media sharing.

