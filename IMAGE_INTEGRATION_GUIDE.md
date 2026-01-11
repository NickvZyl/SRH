# Image Integration Guide for St Raphael Health Website

## Overview

The website has been updated to include image placeholders throughout all pages. This document explains how to generate and integrate professional images using Nano Banana.

---

## Current Status

✅ **HTML Updated**: All pages now include `<img>` tags with proper paths  
✅ **Folder Structure Created**: Organized folders in `public/assets/images/`  
✅ **Placeholder Generator**: `create-placeholders.html` for temporary development images  
✅ **Prompt Library**: `IMAGE_GENERATION_PROMPTS.md` with 25 detailed prompts  

---

## Quick Start

### Step 1: Generate Temporary Placeholders (Optional)

For immediate development/testing:

1. Open `create-placeholders.html` in your browser
2. Click "Download" on each image
3. Save images to their respective folders in `public/assets/images/`

### Step 2: Generate Professional Images with Nano Banana

1. Open [Nano Banana](https://nanobnana.com/) or Google AI Studio
2. Use prompts from `IMAGE_GENERATION_PROMPTS.md`
3. Generate each image at specified resolution
4. Download and save to correct folder

### Step 3: Optimize Images

Before uploading to the website:

```bash
# Resize if needed (using ImageMagick or similar)
convert input.jpg -resize 1920x1080 -quality 85 output.jpg

# Or use online tools like:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
```

Target specifications:
- **Hero images**: 1920x1080px, 150-250KB
- **Section images**: 1200x800px, 100-200KB
- **Format**: JPEG, 80-85% quality

---

## Image Locations & Usage

### Homepage (`/`)
| Image | Location | Purpose |
|-------|----------|---------|
| `hero-hospitals.jpg` | `assets/images/hero/` | Left hero panel background |
| `hero-physicians.jpg` | `assets/images/hero/` | Right hero panel background |

### Hospital Advisory (`/hospital-advisory`)
| Image | Location | Purpose |
|-------|----------|---------|
| `hospital-advisory-leadership.jpg` | `assets/images/hospital-advisory/` | Hero background (subtle) |
| `hospital-operations.jpg` | `assets/images/hospital-advisory/` | Operations section |
| `financial-recovery.jpg` | `assets/images/hospital-advisory/` | Financial metrics section |
| `community-care.jpg` | `assets/images/hospital-advisory/` | Community impact section |

### Case Studies (`/case-studies`)
| Image | Location | Purpose |
|-------|----------|---------|
| `case-study-bmc.jpg` | `assets/images/case-studies/` | BMC Hospitals case study |
| `case-study-ehs.jpg` | `assets/images/case-studies/` | Emergency Hospital Systems |
| `case-study-ddc.jpg` | `assets/images/case-studies/` | Doctors Diagnostic Hospital |
| `results-growth.jpg` | `assets/images/case-studies/` | Results visualization |

### Our Approach (`/our-approach`)
| Image | Location | Purpose |
|-------|----------|---------|
| `approach-execution.jpg` | `assets/images/approach/` | Hands-on execution section |
| `approach-operations.jpg` | `assets/images/approach/` | Operational excellence |
| `approach-strategy.jpg` | `assets/images/approach/` | Strategic planning |

### Why Profit Matters (`/why-profit-matters`)
| Image | Location | Purpose |
|-------|----------|---------|
| `profit-sustainability.jpg` | `assets/images/profit/` | Sustainable healthcare |
| `profit-foundation.jpg` | `assets/images/profit/` | Financial foundation |
| `profit-growth.jpg` | `assets/images/profit/` | Growth & investment |

### Contact (`/contact`)
| Image | Location | Purpose |
|-------|----------|---------|
| `contact-hero.jpg` | `assets/images/contact/` | Contact page hero |
| `contact-collaboration.jpg` | `assets/images/contact/` | Partnership imagery |

### Background Textures (`/backgrounds`)
| Image | Location | Purpose |
|-------|----------|---------|
| `bg-warm-stone-texture.jpg` | `assets/images/backgrounds/` | Subtle background texture |
| `bg-gold-abstract.jpg` | `assets/images/backgrounds/` | Gold accent backgrounds |
| `medical-technology.jpg` | `assets/images/backgrounds/` | Technology detail shots |
| `hospital-corridor-bright.jpg` | `assets/images/backgrounds/` | Hospital environment |

---

## Nano Banana Workflow

### Example: Generating Hero Image for Hospitals

1. **Access Nano Banana**:
   - Visit https://nanobnana.com/ or Google AI Studio
   - Select "Text-to-Image" generation

2. **Enter Prompt** (from `IMAGE_GENERATION_PROMPTS.md`):
   ```
   Professional photograph of a modern hospital exterior at golden hour, 
   warm lighting, clean architecture, welcoming entrance with glass doors, 
   landscaped grounds, Texas regional hospital setting, photorealistic, 
   high-end architectural photography, warm color grading with subtle gold 
   tones, 16:9 aspect ratio
   ```

3. **Configure Settings**:
   - Resolution: 1920x1080 (or highest available, then resize)
   - Style: Photorealistic
   - Quality: High/4K

4. **Generate & Refine**:
   - Generate image
   - If needed, use "Edit" feature to adjust colors, lighting
   - Ensure warm tones align with brand palette (#CBA85C, #DBD5CA)

5. **Download**:
   - Save as `hero-hospitals.jpg`
   - Place in `public/assets/images/hero/`

6. **Repeat** for all 25 images

---

## Brand Consistency Guidelines

When generating or selecting images:

### Color Palette
- **Primary**: Gold Ochre (#CBA85C), Soft Gold (#EDBD56)
- **Support**: Deep Red (#C2322F), Dark Burgundy (#801B1F)
- **Neutrals**: Warm Stone (#DBD5CA), Black, White

### Image Style
- ✅ Professional, clean, modern
- ✅ Warm lighting, golden hour preferred
- ✅ Diverse representation
- ✅ Texas/regional context where applicable
- ✅ High-end corporate photography aesthetic
- ❌ Overly clinical/cold lighting
- ❌ Stock photo "staged" look
- ❌ Busy/cluttered compositions

### Subject Matter
- Hospital exteriors: Modern, welcoming, well-maintained
- Leadership: Diverse, professional, collaborative
- Patients: Comfortable, cared for, diverse ages/backgrounds
- Technology: Modern, clean, state-of-the-art
- Financial: Growth charts, upward trends, success indicators

---

## Testing Images Locally

After adding images:

1. **Start local server** (if not running):
   ```bash
   cd "C:\Users\nick\Documents\Development\SRH Website"
   npx serve public -p 3000
   ```

2. **Open in browser**:
   - Homepage: http://localhost:3000
   - Hospital Advisory: http://localhost:3000/hospital-advisory
   - Case Studies: http://localhost:3000/case-studies

3. **Check**:
   - Images load correctly
   - File sizes are reasonable (< 300KB each)
   - Colors complement the brand palette
   - Layout looks balanced

---

## Troubleshooting

### Images Not Loading
- ✅ Check file path matches exactly (case-sensitive)
- ✅ Ensure file extension is `.jpg` (lowercase)
- ✅ Verify file is in correct folder
- ✅ Hard refresh browser (Ctrl+Shift+R)

### Images Too Large (Slow Loading)
- Compress using TinyPNG or Squoosh
- Target: < 300KB for hero images, < 200KB for section images

### Colors Don't Match Brand
- Use photo editing software to adjust:
  - Increase warmth (+10-15)
  - Add slight gold tint
  - Reduce saturation if too vibrant

---

## Priority Order

Generate images in this order for maximum impact:

### Phase 1: High-Impact Pages (Do First)
1. ✅ `hero-hospitals.jpg` - Homepage left panel
2. ✅ `hero-physicians.jpg` - Homepage right panel
3. ✅ `case-study-bmc.jpg` - Flagship case study
4. ✅ `case-study-ehs.jpg` - Second case study
5. ✅ `case-study-ddc.jpg` - Third case study

### Phase 2: Supporting Content
6. `hospital-advisory-leadership.jpg` - Main service page
7. `approach-execution.jpg` - Approach page
8. `profit-sustainability.jpg` - Philosophy page

### Phase 3: Additional Enhancement
9-18. Remaining section images

### Phase 4: Background Textures (Optional)
19-25. Abstract backgrounds and textures

---

## Next Steps

1. **Generate placeholders** using `create-placeholders.html` for immediate testing
2. **Open Nano Banana** and start with Phase 1 images
3. **Use prompts** from `IMAGE_GENERATION_PROMPTS.md` exactly as written
4. **Download and optimize** each image
5. **Place in correct folder** according to this guide
6. **Test locally** at http://localhost:3000
7. **Deploy** when satisfied with all images

---

## Resources

- **Nano Banana**: https://nanobnana.com/
- **Google AI Studio**: https://aistudio.google.com/
- **Image Optimization**: https://squoosh.app/
- **Prompts**: See `IMAGE_GENERATION_PROMPTS.md`
- **Placeholder Generator**: Open `create-placeholders.html` in browser

---

## Support

If images need adjustment after generation:
- Use Nano Banana's "Image-to-Image" editing feature
- Provide specific instructions: "Make warmer", "Add more gold tones", "Brighter lighting"
- Re-generate if needed - AI tools improve with iteration

---

**Total Images Needed**: 25  
**Estimated Time**: 2-3 hours with Nano Banana  
**Current Status**: HTML structure complete, ready for images
