import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.smog.sh',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // The "not found" and "thank you" pages do not belong in the sitemap.
  integrations: [sitemap({ filter: (page) => !/\/(404|thankyou)\/$/.test(page) })],
  // Banner stills are fetched from WordPress and re-encoded at build time.
  image: { domains: ['admin.smog.sh'] },
});
