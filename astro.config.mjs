// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The canonical origin. Used for canonical URLs, Open Graph URLs and the sitemap.
// Keep in sync with `url` in src/config/site.ts.
const SITE_URL = 'https://tarvanta.in';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: {
    // /about/ -> /about/index.html — clean URLs on Cloudflare Pages
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
