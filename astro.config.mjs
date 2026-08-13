import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://hindsightonline.co.za',
  output: 'static',
  integrations: [
    // Phosphor is the single icon family for this project (skill 3.C).
    icon({ include: { ph: ['*'] } }),
  ],
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
