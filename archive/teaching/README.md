# Archived: the send-off page (/teaching/)

Taken off the site on 16 November 2026 at Carlos's request ("for now").
Nothing in this folder is built or published.

What is here:

- `src/pages/teaching.astro`, `src/pages/en/teaching.astro`: the two routes
- `src/views/Teaching.astro`: the page
- `src/data/teaching.js`: the excerpts, sign-offs, pictures and texts
- `public/teaching/`: the four pictures from the last slides

## To bring it back

1. Move each file back to the same path at the top of the repository
   (`archive/teaching/src/...` to `src/...`, `archive/teaching/public/teaching`
   to `public/teaching`).
2. In `src/lib/menu.js`, give the "teaching" entry its second row again:

   ```js
   pages: ['feedback', 'teaching'],
   sub: [
     { key: 'feedback', label: t.nav.feedback, path: '/feedback/' },
     { key: 'teaching', label: t.subSendoffs, path: '/teaching/' },
   ],
   ```

3. Optionally restore the "Send-offs" line under "Bisher" in
   `src/data/speaking.js`.

The styles for the page (`.sendoff`, `.signoffs`, `.slide-pictures`) are still
in `src/styles/global.css`, and the menu label `subSendoffs` is still in
`src/lib/i18n.js`.
