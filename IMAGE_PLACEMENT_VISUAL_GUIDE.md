# 🎨 VISUAL PLACEMENT GUIDE - EXACTLY WHERE IMAGES GO

## **📍 IMAGE-BY-IMAGE BREAKDOWN**

---

## **IMAGE 1: Hospital Advisory - Hero Replacement**

### **Current State:**
```
[Background: hospital-advisory-leadership.jpg]
[Overlay: 60% opacity gradient]
[Text: "We help distressed hospitals..."]
```

### **New State:**
```
[Background: MODERN GLASS HOSPITAL EXTERIOR - golden hour]
[Overlay: 50% opacity gradient (lighter to show architecture)]
[Text: "We help distressed hospitals..."]
```

### **Exact Location:**
- **File:** `public/hospital-advisory/index.html`
- **Line:** ~30-40 (hero section background)
- **Current code:**
  ```html
  <div class="absolute inset-0 hero-image">
    <img src="/assets/images/hospital-advisory/hospital-advisory-leadership.jpg" ...>
  </div>
  ```

### **What Image Needs:**
- **Subject:** Modern hospital building exterior with glass facade
- **Lighting:** Golden hour (warm, professional)
- **Angle:** Slightly looking up to show scale and glass
- **Mood:** Aspirational, modern, clean
- **Size:** 1920x1080
- **Style:** Architectural photography, high contrast

### **Why This Change:**
- Current image is people-focused (good for team page)
- Hospital Advisory should showcase RESULTS (buildings, scale, infrastructure)
- Glass architecture reinforces modern, transparent approach

### **Example Search Terms:**
- "modern hospital architecture glass facade sunset"
- "contemporary medical building exterior golden hour"
- "glass hospital architecture professional"

---

## **IMAGE 2: Team Page - Office Culture Shot**

### **Current State:**
```
[Heading: "A seasoned operating and advisory team..."]
[Paragraph text]
[Grid of 17 headshots begins]
```

### **New State:**
```
[NEW: Full-width environmental photo]
[Modern office/conference room, team collaborating]
[Subtle parallax effect on scroll]

[Heading: "A seasoned operating and advisory team..."]
[Paragraph text]
[Grid of 17 headshots begins]
```

### **Exact Location:**
- **File:** `public/team/index.html`
- **Insert BEFORE:** The intro heading (line ~25)
- **New HTML needed:**
  ```html
  <!-- Team Environment Hero -->
  <section class="relative h-[400px] lg:h-[500px] overflow-hidden">
    <div class="absolute inset-0" data-parallax data-parallax-speed="0.2">
      <img src="/assets/images/team/team-office-environment.jpg" 
           alt="SRH Team Office" 
           class="w-full h-full object-cover">
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-warm-stone via-transparent to-transparent opacity-60"></div>
  </section>
  ```

### **What Image Needs:**
- **Subject:** 3-5 people collaborating in modern office
- **Setting:** Glass conference room OR open office with natural light
- **Mood:** Professional but approachable, authentic not staged
- **People:** Business casual attire, diverse group, candid/semi-candid
- **Size:** 1920x600
- **Style:** Natural light, shallow depth of field, professional

### **Why This Change:**
- Breaks up the wall of headshots
- Shows culture and working environment
- Humanizes the team before individual bios
- Adds visual interest to a text-heavy page

### **Example Search Terms:**
- "modern office team collaboration glass walls"
- "professional business meeting natural light"
- "corporate team working together contemporary office"

---

## **IMAGE 3: Our Approach - Dashboard/Analytics**

### **Current State:**
```
[Section: "Strategic Assessment"]
[Text about assessment process]
[No image]
```

### **New State:**
```
[Section: "Strategic Assessment"]
[50% width left: Text about assessment]
[50% width right: ANALYTICS DASHBOARD IMAGE]
[Clean laptop showing healthcare data visualization]
```

### **Exact Location:**
- **File:** `public/our-approach/index.html`
- **Section:** "Strategic Assessment" (around line 60-80)
- **New HTML structure:**
  ```html
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h3>Strategic Assessment</h3>
      <p>Existing text...</p>
    </div>
    <div class="relative">
      <img src="/assets/images/approach/dashboard-analytics.jpg" 
           alt="Healthcare Analytics Dashboard"
           class="rounded-lg shadow-2xl">
    </div>
  </div>
  ```

### **What Image Needs:**
- **Subject:** Laptop/tablet screen showing clean dashboard
- **Content:** Healthcare metrics, charts, graphs (professional looking)
- **Angle:** Straight on or slight perspective
- **Setting:** Clean desk, minimal distractions
- **Size:** 1200x800
- **Style:** Tech-forward, modern UI, high contrast

### **Why This Change:**
- Makes abstract "assessment" concept tangible
- Shows tech capability and sophistication
- Breaks up text in long methodology section

### **Example Search Terms:**
- "analytics dashboard laptop screen healthcare"
- "data visualization computer modern interface"
- "business intelligence dashboard professional"

---

## **IMAGE 4: Our Approach - Team Collaboration**

### **Current State:**
```
[Section: "Operational Execution"]
[Text about hands-on work]
[No image]
```

### **New State:**
```
[Section: "Operational Execution"]
[Full-width background image: SUBTLE, 20% opacity]
[Team collaborating over documents/devices]
[Text overlays image]
```

### **Exact Location:**
- **File:** `public/our-approach/index.html`
- **Section:** "Operational Execution" (around line 100-120)
- **New HTML structure:**
  ```html
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <img src="/assets/images/approach/team-execution.jpg" 
           alt="Team Execution"
           class="w-full h-full object-cover">
    </div>
    <div class="relative z-10 container-custom">
      <h3>Operational Execution</h3>
      <p>Existing text...</p>
    </div>
  </section>
  ```

### **What Image Needs:**
- **Subject:** 2-3 people collaborating, reviewing documents or tablet
- **Setting:** Modern office or conference room
- **Mood:** Focused, professional, action-oriented
- **Details:** Hands visible, documents/devices in frame
- **Size:** 1600x900
- **Style:** Professional, natural light, slightly desaturated

### **Why This Change:**
- Reinforces "hands-on" messaging
- Shows human element of execution
- Creates visual variety in approach sections

### **Example Search Terms:**
- "business professionals collaborating documents"
- "team reviewing strategy modern office"
- "executive planning meeting hands on table"

---

## **IMAGE 5: Homepage - Stats/Trust Background**

### **Current State:**
```
[Contact Form]
[Immediate drop to Footer]
```

### **New State:**
```
[Contact Form]

[NEW SECTION: Subtle glass building background]
[Very low opacity (15-20%)]
[Could overlay with: Client logos, stats, or simple tagline]

[Footer]
```

### **Exact Location:**
- **File:** `public/index.html`
- **Insert AFTER:** Contact form section (line ~260)
- **BEFORE:** Footer (line ~270)
- **New HTML:**
  ```html
  <!-- Trust/Credibility Section -->
  <section class="relative py-16 overflow-hidden">
    <div class="absolute inset-0 opacity-15">
      <img src="/assets/images/home/trust-background.jpg" 
           alt="" 
           class="w-full h-full object-cover">
    </div>
    <div class="relative z-10 container-custom text-center">
      <p class="text-2xl font-light text-black text-opacity-70">
        Trusted by hospital leadership teams across Texas
      </p>
    </div>
  </section>
  ```

### **What Image Needs:**
- **Subject:** Abstract glass architecture or city skyline
- **Mood:** Professional, aspirational, clean
- **Detail:** Should work at very low opacity
- **Size:** 1920x400
- **Style:** Minimalist, geometric, glass/steel architecture

### **Why This Change:**
- Adds visual closure before footer
- Creates credibility moment
- Breaks up the jump from form to footer

### **Example Search Terms:**
- "modern glass architecture abstract"
- "corporate building detail glass steel"
- "minimalist architecture professional"

---

## **BONUS: Why Profit Matters - Infographic**

### **Current State:**
```
[Text explaining profit philosophy]
[Placeholder for diagram]
[More text]
```

### **New State:**
```
[Text introducing concept]

[LARGE VISUAL INFOGRAPHIC]
[Circular or flow diagram]
[Shows: Profit → Sustainability → Investment → Care → Growth]
[Modern vectors, gold accents, clean design]

[Supporting text]
```

### **Exact Location:**
- **File:** `public/why-profit-matters/index.html`
- **Section:** Center of page (around line 80-100)
- **New HTML:**
  ```html
  <div class="max-w-4xl mx-auto my-16">
    <img src="/assets/images/profit/profit-cycle-diagram.svg" 
         alt="The Profit Cycle"
         class="w-full">
  </div>
  ```

### **What Image Needs:**
- **Format:** SVG (scalable) or high-res PNG
- **Content:** Circular flow or linear progression diagram
- **Elements:** 4-5 nodes showing profit cycle
- **Colors:** Gold (#CBA85C), Black, Warm Stone (#DBD5CA)
- **Style:** Clean vectors, modern iconography
- **Size:** 1600x900

### **Why This Change:**
- Makes abstract philosophy concrete and memorable
- Shareable on social media
- Visual anchor for the page

### **How to Create:**
- Option 1: Commission designer ($50-150)
- Option 2: Use Figma to create custom (2 hours)
- Option 3: Find similar on Noun Project/Freepik and customize

---

## **📊 SUMMARY TABLE**

| # | Page | Location | Type | Size | Priority | Time |
|---|------|----------|------|------|----------|------|
| 1 | Hospital Advisory | Hero BG | Architectural | 1920x1080 | HIGH | 10min |
| 2 | Team | Top section | Environmental | 1920x600 | HIGH | 15min |
| 3 | Our Approach | Assessment | Product/Tech | 1200x800 | MEDIUM | 15min |
| 4 | Our Approach | Execution BG | People | 1600x900 | MEDIUM | 15min |
| 5 | Homepage | Pre-footer | Abstract | 1920x400 | LOW | 10min |
| BONUS | Profit Matters | Center | Infographic | 1600x900 | MEDIUM | 2hrs* |

*If creating custom

**Total implementation time:** 1-2 hours (if images are ready)  
**Total sourcing time:** 1 hour (finding right images)

---

## **🎯 IMPLEMENTATION ORDER**

### **Phase 1 (30 minutes):**
1. Fix hero text readability (✅ Done above)
2. Find Image #1 (Hospital Advisory hero)
3. Find Image #2 (Team environment)
4. Implement both

**Show client for feedback**

### **Phase 2 (30 minutes):**
5. Find Images #3 & #4 (Our Approach accents)
6. Implement both
7. Test responsiveness

**Show client for feedback**

### **Phase 3 (As needed):**
8. Find Image #5 (Homepage trust section)
9. Consider custom infographic for Profit Matters
10. Fine-tune based on client reaction

---

## **🎨 VISUAL STYLE CONSISTENCY**

All images should have:
- ✅ Natural/golden hour lighting (warm, professional)
- ✅ High contrast, crisp details
- ✅ Modern settings (glass, clean lines, minimal)
- ✅ Professional but approachable mood
- ✅ Desaturated slightly (not overly vibrant)
- ✅ Consistent color temperature across all images

---

## **💡 NEXT STEP OPTIONS:**

**Option A:** I find all 5 images on Unsplash right now (30-45 min)  
**Option B:** I create Nano Banana prompts to generate custom (1 hour)  
**Option C:** You review this, then we decide image-by-image

**What do you prefer?** 🚀
