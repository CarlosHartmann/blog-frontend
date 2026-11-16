// The site's menu: five entries in the main bar. An entry with `sub` shows a
// second row with those links on all of its pages.
// `pages` lists the `current` keys of the pages that belong to an entry
// (every view passes its key to the Base layout).
import { ui } from './i18n.js';

export function menu(lang) {
  const t = ui[lang];
  return [
    { key: 'now', label: t.nav.now, path: '/now/', pages: ['now'] },
    {
      key: 'blog',
      label: t.nav.blog,
      path: '/posts/',
      pages: ['blog', 'film'],
      sub: [
        { key: 'blog', label: t.subAllPosts, path: '/posts/' },
        { key: 'film', label: t.filmIndex, path: '/film/' },
      ],
    },
    {
      key: 'research',
      label: t.nav.research,
      path: '/publications/',
      pages: ['publications', 'themself', 'they'],
      sub: [
        { key: 'publications', label: t.nav.publications, path: '/publications/' },
        { key: 'themself', label: t.subThemself, path: '/themself/' },
        { key: 'they', label: t.subThey, path: '/they/' },
      ],
    },
    {
      key: 'about',
      label: t.nav.about,
      path: '/about/',
      pages: ['about', 'cv', 'feedback', 'speaking'],
      sub: [
        { key: 'about', label: t.nav.about, path: '/about/' },
        { key: 'cv', label: t.nav.cv, path: '/cv/' },
        { key: 'feedback', label: t.nav.feedback, path: '/feedback/' },
        { key: 'speaking', label: t.footerSpeaking, path: '/speaking/' },
      ],
    },
    { key: 'contact', label: t.nav.contact, path: '/contact/', pages: ['contact'] },
  ];
}
