# Hindsight Online Portal

The marketing website for **Hindsight Consulting (Pty) Ltd**, built with
[Astro](https://astro.build) and deployed to **Cloudflare Pages**.

## Stack

- **Astro 5** — static site generator
- **Plain CSS** — single stylesheet (`public/styles/main.css`)
- **Vanilla JS** — UI behaviours (`public/scripts/main.js`)
- **Cloudflare Pages** — hosting + CDN
- **Cloudflare Pages Functions** — server-side contact form handler (`functions/api/contact.js`)
- **Resend** — transactional email provider

## Local development

Requires Node.js 22 (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output to ./dist
npm run preview   # serve the built site
```

To test the contact form locally (Pages Functions are not run by `astro dev`):

```sh
npm run build
npx wrangler pages dev ./dist --compatibility-date=2024-11-01
```

Put local-only env vars in a `.dev.vars` file at the repo root:

```
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=info@hindsightonline.co.za
CONTACT_FROM_EMAIL=noreply@hindsightonline.co.za
```

## Project structure

```
src/
  pages/         Astro pages (one .astro file per URL)
  layouts/       BaseLayout.astro wraps every page
  components/   Navbar, Footer, StickyCTA
public/          Files served as-is at the site root
functions/api/   Cloudflare Pages Functions (POST /api/contact)
```

## Deployment

Cloudflare Pages auto-deploys on push to `main`. Settings:

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

Required environment variables in the Cloudflare Pages project:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
