# Quick Start Guide - SRH Website

## Get Running in 5 Minutes

### 1. Install Dependencies (1 min)

```bash
npm install
```

### 2. Build CSS (30 seconds)

```bash
npm run build
```

### 3. Preview Locally (30 seconds)

```bash
npm run preview
```

Open your browser to the URL shown (usually `http://localhost:3000`).

## Deploy to Vercel (3 minutes)

### Option A: One Command Deploy

```bash
npx vercel
```

Follow the prompts, then:

```bash
npx vercel --prod
```

### Option B: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this repository
4. Click "Deploy"

## Configure Email (2 minutes)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. In Vercel Dashboard → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your key
   - `TO_EMAIL` = `info@saintraphaelhealth.com`
   - `CC_EMAIL` = Don's email
4. Redeploy

## Test Everything (2 minutes)

- [ ] Visit your deployed site
- [ ] Click through all pages
- [ ] Submit a test form
- [ ] Check email received

## Done! 🎉

Your site is live. See `DEPLOYMENT.md` for detailed instructions.

## Development Workflow

**Edit HTML pages**:
- Files are in `public/` directory
- Edit directly, then redeploy

**Edit styles**:
```bash
# Edit src/styles/global.css
npm run build
# Deploy
```

**Watch mode** (auto-rebuild CSS on changes):
```bash
npm run dev
```

## Common Commands

```bash
# Build CSS
npm run build

# Watch CSS (development)
npm run dev

# Preview site locally
npm run preview

# Deploy to Vercel
vercel --prod
```

## Need Help?

- **Full docs**: See `README.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Overview**: See `PROJECT_SUMMARY.md`
- **Spec**: See `Assets/srh_website_spec.md`

---

**You're all set!** The SRH website is ready to serve healthcare leaders.
