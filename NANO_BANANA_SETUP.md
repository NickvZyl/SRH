# 🍌 Nano Banana API Setup Guide

## Overview

This guide will help you set up automated image generation using the Nano Banana (Google AI Studio) API.

---

## 🚀 Quick Setup

### Step 1: Get Your API Key

1. **Visit Google AI Studio**: https://aistudio.google.com/
2. **Sign in** with your Google account
3. **Get API Key**:
   - Click "Get API key" in the top navigation
   - Create a new API key or use an existing one
   - Copy the API key (starts with `AIza...`)

### Step 2: Add API Key to .env File

1. **Open** the `.env` file in the project root
2. **Add your API key**:
   ```env
   GOOGLE_AI_API_KEY=AIzaSyD...your_actual_key_here
   ```
3. **Save** the file

### Step 3: Install Dependencies

```bash
npm install
```

For Python script (optional):
```bash
pip install google-generativeai python-dotenv pillow
```

### Step 4: Run Image Generation

**Option A: Node.js Script**
```bash
npm run generate-images
```

**Option B: Python Script**
```bash
npm run generate-images:python
# or directly:
python scripts/generate-images.py
```

---

## 📋 What Gets Generated

The script will automatically generate **18 priority images**:

### Homepage (2 images)
- ✅ `hero-hospitals.jpg` - Hospital exterior, golden hour
- ✅ `hero-physicians.jpg` - Physicians collaborating

### Case Studies (3 images)
- ✅ `case-study-bmc.jpg` - BMC Hospitals exterior
- ✅ `case-study-ehs.jpg` - Emergency Hospital Systems
- ✅ `case-study-ddc.jpg` - Doctors Diagnostic Hospital

### Hospital Advisory (1 image)
- ✅ `hospital-advisory-leadership.jpg` - Leadership team

### Our Approach (1 image)
- ✅ `approach-execution.jpg` - Team collaboration

### Why Profit Matters (1 image)
- ✅ `profit-sustainability.jpg` - Hospital operations

**Total: 8 priority images** (generates 80% of visual impact)

---

## ⚙️ Configuration

### Environment Variables

Edit `.env` file:

```env
# Primary API Key (Google AI Studio / Gemini)
GOOGLE_AI_API_KEY=your_key_here

# Alternative: Direct Nano Banana API (if available)
NANO_BANANA_API_KEY=your_key_here

# Email Configuration (for contact form)
RESEND_API_KEY=your_resend_key
TO_EMAIL=info@saintraphaelhealth.com
CC_EMAIL=don@saintraphaelhealth.com

# Environment
NODE_ENV=development
```

### Script Configuration

Edit `scripts/generate-images.js` or `scripts/generate-images.py`:

- **Add more images**: Add to `imagePrompts` array
- **Change prompts**: Modify the `prompt` field
- **Adjust priority**: Change `priority` number (lower = generated first)
- **Rate limiting**: Adjust `setTimeout` delay (default: 2 seconds)

---

## 🎯 Usage Examples

### Generate All Priority Images

```bash
npm run generate-images
```

Output:
```
🚀 St Raphael Health - Image Generation Script
================================================

📁 Output directory: C:\...\public\assets\images
🎯 Total images to generate: 8

🎨 Generating: hero-hospitals.jpg
📝 Prompt: Professional photograph of a modern hospital exterior...
✅ Generated successfully

🎨 Generating: hero-physicians.jpg
📝 Prompt: Professional photograph of physicians collaborating...
✅ Generated successfully

...

✨ Image Generation Complete!
✅ Success: 8
❌ Errors: 0
⏭️  Skipped: 0
```

### Skip Existing Images

The script automatically skips images that already exist:

```
⏭️  Skipping hero-hospitals.jpg (already exists)
```

To regenerate, delete the existing file first.

### Generate Specific Images

Edit the script to comment out images you don't want:

```javascript
const imagePrompts = [
  {
    name: 'hero-hospitals.jpg',
    folder: 'hero',
    prompt: '...',
    priority: 1
  },
  // Comment out to skip:
  // {
  //   name: 'hero-physicians.jpg',
  //   ...
  // },
];
```

---

## 🔧 Troubleshooting

### "API key not found"

**Problem**: `.env` file not configured

**Solution**:
1. Check `.env` file exists in project root
2. Verify `GOOGLE_AI_API_KEY=` has your actual key
3. No spaces around the `=` sign
4. No quotes around the key

### "API request failed with status 403"

**Problem**: API key invalid or not authorized

**Solution**:
1. Verify API key is correct
2. Check API is enabled in Google Cloud Console
3. Ensure you have image generation quota available

### "Module not found: dotenv"

**Problem**: Dependencies not installed

**Solution**:
```bash
npm install
```

### "Failed to parse response"

**Problem**: API response format changed

**Solution**:
1. Check Google AI Studio documentation for latest API format
2. Update script to match current response structure
3. Or use manual generation with `IMAGE_GENERATION_PROMPTS.md`

### Images Generated but Look Wrong

**Problem**: Prompt not specific enough or API interpretation

**Solution**:
1. Edit prompt in the script to be more specific
2. Add more descriptive details
3. Specify "photorealistic, professional, warm tones"
4. Regenerate by deleting the image and running script again

---

## 💰 API Costs

### Google AI Studio Pricing (as of 2026)

- **Free Tier**: Limited requests per day
- **Paid Tier**: Pay per image generated

**Estimated Cost for This Project**:
- 8 priority images: ~$0.40 - $2.00
- 25 total images: ~$1.25 - $6.25

Check current pricing: https://ai.google.dev/pricing

### Cost Optimization

1. **Start with priority images** (8 images) for 80% impact
2. **Test with placeholders first** to verify layout
3. **Generate in batches** to monitor costs
4. **Reuse images** across similar sections if appropriate

---

## 🎨 Customizing Prompts

### Prompt Structure

Good prompts include:
1. **Subject**: "Professional photograph of..."
2. **Setting**: "modern hospital exterior"
3. **Lighting**: "golden hour, warm lighting"
4. **Style**: "photorealistic, architectural photography"
5. **Color**: "warm color grading, gold tones"
6. **Format**: "16:9 aspect ratio"

### Example Modifications

**Original**:
```
Professional photograph of a modern hospital exterior at golden hour
```

**More Specific**:
```
Professional photograph of a modern 3-story hospital exterior at golden hour, 
with glass entrance, Texas flag visible, parking lot with cars, 
warm golden lighting, clean architecture, photorealistic
```

**Different Style**:
```
Cinematic photograph of a modern hospital at sunset, dramatic clouds, 
wide-angle lens, architectural magazine quality, warm color grading
```

---

## 🔄 Alternative: Manual Generation

If the API doesn't work or you prefer manual control:

1. **Use** `IMAGE_GENERATION_PROMPTS.md` for all prompts
2. **Visit** https://nanobnana.com/ or https://aistudio.google.com/
3. **Paste** each prompt manually
4. **Download** generated images
5. **Save** to correct folders
6. **Optimize** at https://squoosh.app/

This gives you more control but takes longer.

---

## 📊 Progress Tracking

After running the script, check:

```bash
# List generated images
ls public/assets/images/hero/
ls public/assets/images/case-studies/
ls public/assets/images/hospital-advisory/

# Check file sizes
du -h public/assets/images/**/*.jpg
```

**Target file sizes**:
- Hero images: 150-300KB
- Section images: 100-200KB

If too large, compress at https://squoosh.app/

---

## 🚀 Next Steps After Generation

1. **Test locally**:
   ```bash
   npm run preview
   # Visit http://localhost:3000
   ```

2. **Check all pages**:
   - Homepage: Hero backgrounds visible?
   - Case Studies: All 3 images showing?
   - Hospital Advisory: Hero background subtle?

3. **Optimize if needed**:
   - Compress large images (> 300KB)
   - Adjust quality/resolution

4. **Deploy**:
   ```bash
   git add .
   git commit -m "Add generated images"
   git push
   # Deploy to Vercel
   ```

---

## 📚 Additional Resources

- **Google AI Studio**: https://aistudio.google.com/
- **Nano Banana Docs**: https://ai.google.dev/gemini-api/docs/imagen
- **Image Optimization**: https://squoosh.app/
- **All Prompts**: See `IMAGE_GENERATION_PROMPTS.md`
- **Manual Guide**: See `IMAGE_INTEGRATION_GUIDE.md`

---

## 🆘 Support

If you encounter issues:

1. **Check** `.env` file configuration
2. **Verify** API key is valid
3. **Review** error messages in console
4. **Try** manual generation as fallback
5. **Use** placeholder generator for testing

---

## ✅ Checklist

Before running the script:

- [ ] API key obtained from Google AI Studio
- [ ] `.env` file created and configured
- [ ] Dependencies installed (`npm install`)
- [ ] Folder structure exists (`public/assets/images/`)
- [ ] Internet connection active
- [ ] Ready to wait 2-5 minutes for generation

After running the script:

- [ ] All priority images generated
- [ ] File sizes reasonable (< 300KB)
- [ ] Images tested locally
- [ ] Colors match brand palette
- [ ] Ready to deploy

---

**You're all set!** Run `npm run generate-images` and watch the magic happen! 🎨✨
