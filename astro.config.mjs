import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.smog.sh',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Banner stills are fetched from WordPress and re-encoded at build time.
  image: { domains: ['admin.smog.sh'] },
});
