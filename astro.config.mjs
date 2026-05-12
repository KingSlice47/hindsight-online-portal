import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hindsightonline.co.za',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
