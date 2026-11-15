# smog.sh

Static frontend for the website of Carlos Ha. Built with [Astro](https://astro.build),
deployed on Netlify, content from the headless WordPress at `admin.smog.sh`.

## How it works

- `npm run build` asks the WordPress REST API for all posts and pages once and
  writes plain HTML into `dist/`. No JavaScript framework runs in the browser.
- Publishing or changing a post in WordPress triggers a Netlify build through
  the "JAMstack Deployments" plugin.
- German lives at the root (`/llms/`), the English interface under `/en/`
  (`/en/llms/`). Posts exist once, in German; the English pages frame them.
- A post that is not built yet is fetched live by the 404 page.

## Where things are

| What | Where |
| --- | --- |
| Interface texts (DE/EN) | `src/lib/i18n.js` |
| Publications & activities | `src/data/publications.js` |
| English About text | `src/data/about.en.js` (or a WordPress page with slug `about-en`) |
| WordPress fetching | `src/lib/wp.js` |
| Clean-up of WordPress HTML | `src/lib/content.js` |
| Look | `src/styles/global.css` |

## Home-page banner

The home page shows one image per day from the "banner" media folder in
WordPress (FileBird folder 1). Reading that folder needs the FileBird API key.
Set it as the build variable `FILEBIRD_TOKEN` in Netlify (never in this
repository). Without it the site shows a single fallback image.

## Local development

Needs Node 22.23 or newer.

```bash
npm install
npm run dev      # live preview
npm run build    # production build into dist/
```
