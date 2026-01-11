# 🎨 Manual Image Generation Guide (Recommended)

## Why Manual Generation?

The Google AI Studio API for image generation (Imagen) requires special access. **Manual generation is actually faster and gives you more control!**

---

## 🚀 Quick Method (30 minutes for 8 images)

### Step 1: Open Nano Banana
Visit: **https://nanobnana.com/** or **https://aistudio.google.com/**

### Step 2: Use These Prompts

I've prepared all prompts for you. Just copy/paste each one:

---

### 🏥 Image 1: Homepage - Hospitals Hero
**Save as**: `public/assets/images/hero/hero-hospitals.jpg`

**Prompt**:
```
Professional photograph of a modern hospital exterior at golden hour, warm lighting, clean architecture, welcoming entrance with glass doors, landscaped grounds, Texas regional hospital setting, photorealistic, high-end architectural photography, warm color grading with subtle gold tones, 16:9 aspect ratio
```

---

### 👨‍⚕️ Image 2: Homepage - Physicians Hero
**Save as**: `public/assets/images/hero/hero-physicians.jpg`

**Prompt**:
```
Professional photograph of physicians collaborating in a modern medical office, natural lighting through large windows, diverse medical team reviewing patient charts on digital tablets, warm professional atmosphere, clean modern interior design, photorealistic, corporate healthcare photography style, 16:9 aspect ratio
```

---

### 🏢 Image 3: BMC Case Study
**Save as**: `public/assets/images/case-studies/case-study-bmc.jpg`

**Prompt**:
```
Professional exterior photograph of a large modern surgical hospital in Greater Houston, multiple stories, contemporary architecture, clear blue sky, well-maintained landscaping, parking area with vehicles, Texas setting, golden hour lighting, photorealistic, architectural photography, 16:9 aspect ratio
```

---

### 🚑 Image 4: EHS Case Study
**Save as**: `public/assets/images/case-studies/case-study-ehs.jpg`

**Prompt**:
```
Professional photograph of a Northeast Houston hospital exterior, modern emergency department entrance with ambulance bay, clean architecture, professional healthcare facility, daytime lighting, photorealistic, architectural photography, 16:9 aspect ratio
```

---

### 🏥 Image 5: DDC Case Study
**Save as**: `public/assets/images/case-studies/case-study-ddc.jpg`

**Prompt**:
```
Professional photograph of a community hospital in Cleveland Texas, smaller regional hospital building, welcoming entrance, American flag, parking lot, rural Texas setting, warm afternoon lighting, photorealistic, architectural photography, 16:9 aspect ratio
```

---

### 💼 Image 6: Hospital Advisory Leadership
**Save as**: `public/assets/images/hospital-advisory/hospital-advisory-leadership.jpg`

**Prompt**:
```
Professional photograph of hospital executives in a modern boardroom, diverse leadership team reviewing financial charts and operational dashboards, large windows with natural light, professional attire, collaborative atmosphere, photorealistic, corporate photography style, warm color grading, 16:9 aspect ratio
```

---

### 🤝 Image 7: Approach - Execution
**Save as**: `public/assets/images/approach/approach-execution.jpg`

**Prompt**:
```
Professional photograph of hospital executives and consultants working together at a conference table, laptops open, documents spread out, collaborative problem-solving session, natural window light, diverse team, photorealistic, corporate documentary photography, 16:9 aspect ratio
```

---

### 💚 Image 8: Profit - Sustainability
**Save as**: `public/assets/images/profit/profit-sustainability.jpg`

**Prompt**:
```
Professional photograph of a thriving modern hospital interior, busy but organized patient care area, state-of-the-art medical equipment, bright clean environment, doctors and nurses providing care, photorealistic, healthcare documentary photography, 16:9 aspect ratio
```

---

## 📋 Step-by-Step Process

### For Each Image:

1. **Copy prompt** from above
2. **Paste into Nano Banana** (https://nanobnana.com/)
3. **Generate** (wait 30-60 seconds)
4. **Review** the image:
   - Colors warm and professional? ✅
   - Matches brand aesthetic? ✅
   - High quality? ✅
5. **Download** the image
6. **Optimize** at https://squoosh.app/ (compress to < 300KB)
7. **Save** to the correct folder path shown above
8. **Repeat** for next image

---

## 🎯 Tips for Best Results

### If Image Doesn't Look Right:

**Too cold/clinical?**
→ Add to prompt: "warm golden hour lighting, warm color tones"

**Too generic/stock photo?**
→ Add to prompt: "authentic, documentary style, natural moment"

**Wrong style?**
→ Regenerate with: "photorealistic, professional architectural photography"

**Colors off?**
→ Edit in Nano Banana or add: "warm ochre and gold color grading"

---

## ⚡ Quick Workflow

1. **Open Nano Banana** in one tab
2. **Open this guide** in another tab
3. **Open file explorer** to `public/assets/images/`
4. **Copy prompt** → **Paste** → **Generate** → **Download** → **Save**
5. **Repeat** for all 8 images
6. **Total time**: 30-40 minutes

---

## 🖼️ After Generation

### Test Your Images:

```bash
# Start local server
npm run preview

# Visit in browser
http://localhost:3000
```

### Check:
- ✅ Homepage hero backgrounds visible?
- ✅ Case study images showing?
- ✅ Colors match brand palette?
- ✅ File sizes reasonable (< 300KB)?

---

## 📁 Folder Reference

```
public/assets/images/
├── hero/
│   ├── hero-hospitals.jpg          ← Image 1
│   └── hero-physicians.jpg         ← Image 2
├── case-studies/
│   ├── case-study-bmc.jpg          ← Image 3
│   ├── case-study-ehs.jpg          ← Image 4
│   └── case-study-ddc.jpg          ← Image 5
├── hospital-advisory/
│   └── hospital-advisory-leadership.jpg  ← Image 6
├── approach/
│   └── approach-execution.jpg      ← Image 7
└── profit/
    └── profit-sustainability.jpg   ← Image 8
```

---

## 🎨 Brand Guidelines Reminder

When generating, ensure:
- ✅ Warm lighting (golden hour preferred)
- ✅ Professional, modern settings
- ✅ Clean compositions
- ✅ Gold/warm color tones (#CBA85C, #DBD5CA)
- ✅ Photorealistic style
- ❌ Avoid cold, clinical lighting
- ❌ Avoid overly staged "stock photo" look

---

## 💡 Pro Tips

1. **Generate all at once** - keep Nano Banana open, do all 8 in one session
2. **Download to Downloads folder first** - then organize into project folders
3. **Name files correctly** - exact names as shown above
4. **Compress before saving** - use Squoosh to optimize
5. **Test as you go** - add 2-3 images, refresh browser, check layout

---

## ✅ Checklist

- [ ] Nano Banana open (https://nanobnana.com/)
- [ ] Image 1: hero-hospitals.jpg generated & saved
- [ ] Image 2: hero-physicians.jpg generated & saved
- [ ] Image 3: case-study-bmc.jpg generated & saved
- [ ] Image 4: case-study-ehs.jpg generated & saved
- [ ] Image 5: case-study-ddc.jpg generated & saved
- [ ] Image 6: hospital-advisory-leadership.jpg generated & saved
- [ ] Image 7: approach-execution.jpg generated & saved
- [ ] Image 8: profit-sustainability.jpg generated & saved
- [ ] All images optimized (< 300KB)
- [ ] Tested locally at http://localhost:3000
- [ ] Ready to deploy!

---

## 🚀 You've Got This!

**30 minutes of work** = **Professional, custom images** for your entire website!

This method is actually **better** than automated because:
- ✅ You see each image before accepting it
- ✅ You can regenerate if not perfect
- ✅ You can adjust prompts on the fly
- ✅ No API errors or rate limits
- ✅ More control over final result

**Start now!** Open https://nanobnana.com/ and copy the first prompt! 🎨✨
