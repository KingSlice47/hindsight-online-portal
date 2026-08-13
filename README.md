# Hindsight Online Portal

The marketing website for **Hindsight Online**, an accounting and business
administration firm in Randburg and part of the Hindsight Consulting group.
Built with [Astro](https://astro.build) and hosted on **Cloudflare Pages**.

## Stack

- **Astro 5** — static site generator, `output: 'static'`
- **Plain CSS** — one stylesheet, `src/styles/app.css`, holding the design
  tokens, the light and dark palettes and every component
- **astro-icon** with **Phosphor** (`@iconify-json/ph`) — the single icon family
- **Geist** and **Geist Mono** via `@fontsource-variable`, self-hosted
- **Cloudflare Pages** — hosting and CDN
- **Cloudflare Pages Functions** — the contact form handler,
  `functions/api/contact.js`
- **Resend** — transactional email

## Local development

Requires Node.js 22 (see `.nvmrc`).

```sh
npm ci
npm run dev       # http://localhost:4321
npm run build     # output to ./dist
npm run preview   # serve the built site
```

**`npm run dev` does not run the contact form.** Pages Functions are a
Cloudflare runtime feature and `astro dev` knows nothing about them, so
`POST /api/contact` returns 404 and every submission lands in the form's error
branch. The client-side validation still works. To exercise the real thing:

```sh
npm run build
npx wrangler pages dev ./dist --compatibility-date=2024-11-01
```

Put local-only secrets in `.dev.vars` at the repo root (gitignored; copy
`.dev.vars.example`):

```
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=info@hindsightonline.co.za
CONTACT_FROM_EMAIL=noreply@hindsightonline.co.za
```

## Project structure

```
src/
  pages/          One .astro file per URL
  layouts/        BaseLayout.astro wraps every page
  components/     Navbar, Footer, StickyCTA
  styles/         app.css, the whole design system
public/           Served as-is at the site root
  Favicon/        Full icon set plus manifest.json
  _headers        Cloudflare security and caching rules
functions/api/    Cloudflare Pages Functions (POST /api/contact)
brand/            Logo masters. Outside public/, so never served.
```

## Design system notes

`src/styles/app.css` is the single source of truth. Two things are easy to
break by accident:

- **Theming has three states.** Light lives on a bare `:root`, the system
  preference is handled by `@media (prefers-color-scheme: dark)` guarded with
  `:root:not([data-theme='light'])`, and the toggle sets
  `:root[data-theme='dark']`. A colour defined only inside a media query will
  break one of the three.
- **Lime `#aac134` is a fill, not a text colour.** It measures 2.01:1 on white
  and fails WCAG AA. Use it behind ink text (9.27:1). For coloured text use
  `--accent` (`#446619`, 6.19:1).

Reveal animations are gated behind a `.js` class so content stays visible
without JavaScript, and are driven by IntersectionObserver. Do not add scroll
listeners.

## Deployment

**Cloudflare Pages is production.** It auto-deploys on push to `main`. The
connection is configured in the Cloudflare dashboard, not in this repo.

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

Required environment variables in the Pages project, without which the contact
form accepts submissions but sends nothing:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

`.github/workflows/deploy.yml` uploads `dist/` to a cPanel host over FTP. It is
a **manual fallback only** (`workflow_dispatch`) and is not equivalent to
Pages: Apache ignores `public/_headers`, and there is no runtime for
`functions/api/contact.js`, so the contact form cannot send from that host.
