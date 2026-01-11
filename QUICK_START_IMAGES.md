# 🚀 Quick Start: Image Generation

## 3-Minute Setup

### 1. Get API Key (2 minutes)
1. Visit: https://aistudio.google.com/
2. Click "Get API key"
3. Copy the key (starts with `AIza...`)

### 2. Add to .env File (30 seconds)
```bash
# Open .env file and add:
GOOGLE_AI_API_KEY=AIzaSyD...your_key_here
```

### 3. Generate Images (30 seconds to start)
```bash
npm run generate-images
```

**Done!** Images will be generated automatically (takes 2-5 minutes total).

---

## What You Get

✅ 8 professional images:
- Homepage hero backgrounds (2)
- Case study photos (3)
- Hospital advisory image (1)
- Approach page image (1)
- Profit page image (1)

---

## Alternative: Manual Generation

Don't want to use API? No problem!

1. Open `IMAGE_GENERATION_PROMPTS.md`
2. Visit https://nanobnana.com/
3. Copy/paste prompts
4. Download images
5. Save to folders

---

## Files Reference

| File | Purpose |
|------|---------|
| `.env` | Add your API key here |
| `NANO_BANANA_SETUP.md` | Complete setup guide |
| `IMAGE_GENERATION_PROMPTS.md` | All prompts for manual use |
| `scripts/generate-images.js` | Automated generation script |

---

## Troubleshooting

**"API key not found"**
→ Check `.env` file has `GOOGLE_AI_API_KEY=your_key`

**"Module not found"**
→ Run `npm install`

**Want to test first?**
→ Use `create-placeholders.html` for temporary images

---

## Next Steps

After generation:
1. Test: http://localhost:3000
2. Check: All images loaded?
3. Optimize: Compress if > 300KB
4. Deploy: Push to production!

---

**Need help?** See `NANO_BANANA_SETUP.md` for detailed instructions.
