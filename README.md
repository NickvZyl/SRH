# St Raphael Health Website

Static website built with HTML, Tailwind CSS v4, and vanilla JavaScript.

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development (watches CSS):
```bash
npm run dev
```

3. Preview the site:
```bash
npm run preview
```

## Build

```bash
npm run build
```

## Deployment

Deploy to Vercel:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard:
   - `RESEND_API_KEY` - Your Resend API key
   - `TO_EMAIL` - info@saintraphaelhealth.com
   - `CC_EMAIL` - Don's email address

## Environment Variables

Create a `.env` file for local API testing:

```
RESEND_API_KEY=your_key_here
TO_EMAIL=info@saintraphaelhealth.com
CC_EMAIL=don@example.com
```

## Structure

- `public/` - Static HTML pages and compiled assets
- `src/styles/` - CSS source files (Tailwind input)
- `src/js/` - JavaScript modules
- `api/` - Vercel serverless functions
