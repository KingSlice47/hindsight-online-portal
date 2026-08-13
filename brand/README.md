# Brand source assets

Master files. Nothing in this folder is served: it sits outside `public/`
so it never reaches the CDN. Export derived assets into `public/images/`.

## Hindsight_Online_Logo.png

The supplied logo master. Two variants are derived from it and committed
under `public/images/`:

- `logo-online.png` — trimmed and resized for the light navbar.
- `logo-online-dark.png` — same, but white is dropped to transparent and
  only unsaturated pixels are inverted, so the two greens stay
  pixel-identical across themes.

The palette in `src/styles/app.css` is sampled from this file. `--ink`
(`#13120e`) is the wordmark black; `--fill` (`#aac134`) and `--accent`
(`#446619`) are the logo greens, with the accent deepened to clear WCAG
AA as body text.
