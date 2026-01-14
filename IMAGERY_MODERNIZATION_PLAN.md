# Imagery Modernization Plan

## Current State
The site uses images from `public/assets/images/` with the following patterns:
- Hero images with heavy overlays (80% opacity)
- Generic healthcare stock imagery
- Some darker/dated visual tone

## Modernization Requirements

### Visual Style: Bright Institutional Healthcare
- **Glass architecture** - modern hospital exteriors with natural light
- **Steel and metal finishes** - contemporary medical facilities
- **Bright, well-lit clinical spaces** - clean, airy environments
- **Modern hospital interiors** - contemporary design, light-filled

### Image Specifications
- High resolution (min 1920x1080 for hero images)
- Natural lighting dominant
- Contemporary (2020+) aesthetics
- Professional institutional tone
- Light, bright, calm color palette

## Required Images

### Homepage (`public/index.html`)
- **Hero Left (Hospitals)**: `hero/hero-hospitals.jpg`
  - Current overlay: 80% → Reduce to 60%
  - Needs: Modern hospital exterior, glass/steel, bright daylight
  
- **Hero Right (Physicians)**: `hero/hero-physicians.jpg`
  - Current overlay: 80% → Reduce to 60%
  - Needs: Contemporary clinical space, bright lighting

### Hospital Advisory (`public/hospital-advisory/index.html`)
- **Hero**: `hospital-advisory/hero-advisory.jpg`
  - Needs: Modern hospital facility, institutional, bright

### Our Approach (`public/our-approach/index.html`)
- **Header Background**: `approach/hero-approach.jpg`
  - Needs: Abstract architectural element, light, minimal
  
### Why Profit Matters (`public/why-profit-matters/index.html`)
- **Diagram Image**: `profit/profit-enabler-diagram.jpg`
  - Current: Already a diagram, ensure it matches new surface system
  - Update with lighter background if needed

### Case Studies (`public/case-studies/index.html`)
- Images appear to be placeholder references
- Need 3 modern hospital facility images

## Overlay Adjustments

### Global Overlay Reduction
All hero overlays currently at 80-90% opacity should be reduced to 60-70% to allow imagery to be more visible while maintaining text readability.

Update in relevant HTML files:
```html
<!-- Current -->
<div class="hero-overlay absolute inset-0 bg-gradient-to-br from-warm-stone to-white opacity-80"></div>

<!-- Updated -->
<div class="hero-overlay absolute inset-0 bg-gradient-to-br from-warm-stone to-white opacity-60"></div>
```

## Image Sourcing Options

1. **Unsplash/Pexels** - Free, high-quality healthcare imagery
   - Search terms: "modern hospital", "healthcare facility", "medical architecture", "clinical space bright"

2. **AI Generation** - Via Midjourney/DALL-E/Stable Diffusion
   - Prompts: "bright modern hospital lobby with glass walls and natural light, professional photography, architectural digest style"

3. **Stock Photography** - Getty Images, Shutterstock (paid)
   - Professional institutional healthcare collections

## Action Items

1. ✅ Reduce hero overlay opacity from 80% to 60% across all pages
2. Source 6-8 bright, modern institutional healthcare images
3. Replace existing images in `public/assets/images/`
4. Test visual balance (text readability + image visibility)
5. Ensure all images feel cohesive and institutional

## Notes
- All images must feel calm, professional, and modern (2025+ aesthetic)
- Avoid dark, moody, or overly dramatic healthcare imagery
- Prioritize natural light and contemporary architecture
- Images should support, not dominate, the content
