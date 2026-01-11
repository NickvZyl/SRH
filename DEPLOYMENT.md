# St Raphael Health - Deployment Guide

## Prerequisites

1. **Node.js** installed (v18 or later recommended)
2. **Vercel Account** (free tier works)
3. **Resend Account** for email delivery (or alternative email provider)
4. **Don's CC email address** for form submissions

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Build Tailwind CSS

Generate the compiled CSS file:

```bash
npm run build
```

For development with auto-rebuild:

```bash
npm run dev
```

### 3. Preview Locally

```bash
npm run preview
```

The site will be available at `http://localhost:3000` (or the port shown in terminal).

## Vercel Deployment

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy: `Y`
   - Scope: Select your account
   - Link to existing project: `N` (first time)
   - Project name: `srh-website` (or your choice)
   - Directory: `./` (current directory)
   - Override settings: `N`

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `public`
   - **Install Command**: `npm install`

5. Click "Deploy"

## Environment Variables

After deployment, configure these environment variables in Vercel Dashboard:

### Required Variables

Go to **Project Settings → Environment Variables** and add:

| Variable | Value | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxx` | Your Resend API key |
| `TO_EMAIL` | `info@saintraphaelhealth.com` | Primary recipient |
| `CC_EMAIL` | `don@example.com` | Don's email for CC |

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (saintraphaelhealth.com)
3. Go to **API Keys** → **Create API Key**
4. Copy the key and add to Vercel

**Note**: For testing, you can use Resend's test mode, but for production you must verify your domain.

## Domain Configuration

### 1. Add Custom Domain in Vercel

1. Go to **Project Settings → Domains**
2. Add domain: `saintraphaelhealth.com`
3. Add www subdomain: `www.saintraphaelhealth.com`

### 2. Configure DNS

Add these records in your DNS provider:

**For root domain (saintraphaelhealth.com)**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Vercel will automatically provision SSL certificates.

## Post-Deployment Checklist

### 1. Test All Pages

Visit each page and verify:
- [ ] `/` (Homepage)
- [ ] `/hospital-advisory`
- [ ] `/our-approach`
- [ ] `/case-studies`
- [ ] `/team`
- [ ] `/why-profit-matters`
- [ ] `/physicians`
- [ ] `/contact`
- [ ] `/privacy-policy`
- [ ] `/terms`
- [ ] `/compliance`

### 2. Test Contact Forms

1. Fill out the form on `/` (homepage)
2. Fill out the form on `/contact`
3. Verify emails are received at:
   - `info@saintraphaelhealth.com`
   - Don's CC email
4. Check spam folders if not received

### 3. Test Mobile Navigation

- Open site on mobile device or use browser dev tools
- Test hamburger menu open/close
- Verify all links work
- Test form submission on mobile

### 4. Verify SEO

- Check `https://saintraphaelhealth.com/robots.txt`
- Check `https://saintraphaelhealth.com/sitemap.xml`
- Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
- Submit sitemap to Google Search Console

### 5. Performance Check

Run Lighthouse audit (Chrome DevTools):
- Target: 90+ scores across all categories
- Focus areas:
  - Performance
  - Accessibility
  - Best Practices
  - SEO

### 6. Accessibility Check

- Test keyboard navigation (Tab key)
- Test screen reader (NVDA/JAWS/VoiceOver)
- Verify focus indicators are visible
- Check color contrast

## Troubleshooting

### Forms Not Sending

1. **Check Vercel Logs**:
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on `api/contact` to see logs

2. **Verify Environment Variables**:
   - Ensure all three variables are set
   - Redeploy after adding variables

3. **Check Resend Dashboard**:
   - Go to Resend → Logs
   - Look for failed sends

4. **Test API Directly**:
   ```bash
   curl -X POST https://saintraphaelhealth.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "fullName": "Test User",
       "email": "test@example.com",
       "phone": "555-1234",
       "organization": "Test Org",
       "cityState": "Houston, TX",
       "message": "Test message"
     }'
   ```

### Styles Not Loading

1. **Rebuild CSS**:
   ```bash
   npm run build
   ```

2. **Check public/styles.css exists**:
   - File should be ~50-100KB
   - If missing, Tailwind didn't compile

3. **Clear Vercel Cache**:
   - Redeploy with: `vercel --prod --force`

### Images Not Showing

1. **Check file paths** are correct (case-sensitive)
2. **Verify images exist** in `public/assets/`
3. **Check browser console** for 404 errors

## Updating Content

### To Update Pages

1. Edit the HTML files in `public/`
2. Commit changes to Git
3. Push to repository
4. Vercel will auto-deploy (if connected to Git)

OR manually deploy:
```bash
vercel --prod
```

### To Update Styles

1. Edit `src/styles/global.css` or `src/styles/tokens.css`
2. Rebuild: `npm run build`
3. Deploy: `vercel --prod`

### To Update JavaScript

1. Edit files in `src/js/`
2. Copy to `public/js/`: `Copy-Item "src\js\*" -Destination "public\js\" -Force`
3. Deploy: `vercel --prod`

## Maintenance

### Regular Tasks

- **Monthly**: Review form submissions and spam
- **Quarterly**: Run Lighthouse audits
- **Annually**: Review and update legal pages
- **As needed**: Update team photos and bios

### Monitoring

Set up monitoring in Vercel:
- Enable **Web Analytics** (free)
- Enable **Speed Insights** (free)
- Monitor form submission success rate

## Support

For technical issues:
- **Vercel Support**: https://vercel.com/support
- **Resend Support**: https://resend.com/support
- **Project Documentation**: See README.md

## Security Notes

- Never commit `.env` files to Git
- Keep API keys secure in Vercel dashboard
- Regularly update dependencies: `npm update`
- Monitor for security vulnerabilities: `npm audit`

---

**Deployment completed successfully!** 🎉

The SRH website is now live and ready to serve hospital leadership, boards, and healthcare decision-makers.
