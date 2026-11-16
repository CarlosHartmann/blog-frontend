// "Colophon" page: how this site is made. Keep it true: if the fonts, colours
// or the way the site is built change, change this page with them.

const colours = (labels) => [
  { swatch: '#1c1a18', when: '#1c1a18', what: labels[0] },
  { swatch: '#efe6d2', when: '#efe6d2', what: labels[1] },
  { swatch: '#a3271b', when: '#a3271b', what: labels[2] },
  { swatch: '#b08a3c', when: '#b08a3c', what: labels[3] },
  { swatch: '#5fe08a', when: '#5fe08a', what: labels[4] },
];

export const colophon = {
  path: '/colophon/',
  current: 'colophon',
  de: {
    kicker: 'Über diese Seite',
    title: 'Kolophon',
    lede: 'Im Kolophon einer Handschrift steht, wer sie wann und womit geschrieben hat. Hier dasselbe für smog.sh.',
    sections: [
      {
        id: 'idee',
        title: 'Idee',
        text: [
          'Die Gestaltung heisst intern «Skriptorium»: Handschrift trifft Terminal. Ein dunkler Grund, darauf ein Blatt Pergament, Rubrikrot für alles, was hervorsticht, und Initialen wie in einem Kodex. Daneben steht die Schrift einer Kommandozeile, denn smog.sh ist dem Namen nach ein Shell-Skript.',
        ],
      },
      {
        id: 'schrift',
        title: 'Schrift',
        items: [
          { when: 'Text', what: 'EB Garamond', detail: 'Fliesstext und Titel' },
          { when: 'Terminal', what: 'IBM Plex Mono', detail: 'Wortmarke, Menü, Daten und Zwischentitel' },
          { when: 'Initialen', what: 'Sinistre Caroline', detail: 'Initialen und die Nummern der Beiträge' },
        ],
      },
      {
        id: 'farbe',
        title: 'Farbe',
        text: ['Grün gibt es nur auf dunklem Grund, Rot nur auf Pergament.'],
        items: colours(['Grund', 'Pergament', 'Rubrik', 'Blattgold', 'Cursor']),
      },
      {
        id: 'technik',
        title: 'Technik',
        text: [
          'Geschrieben wird in WordPress, das hier nur Schreibstube ist. Nach jeder Änderung baut Astro daraus statische Seiten, die Netlify ausliefert.',
          'Die Seite setzt keine Cookies, zählt keine Besuche und zeigt keine Werbung. Eingebettete Videos kommen von youtube-nocookie.com und laden erst, wenn man zu ihnen scrollt.',
        ],
      },
      {
        id: 'eigenheiten',
        title: 'Eigenheiten',
        text: [
          'Beiträge werden ab null gezählt. Die Startseite zeigt bei jedem Besuch ein anderes Standbild. Wörter, über die gesprochen wird, stehen kursiv, wie in der Linguistik üblich: <em>they</em>. Die englischen Fassungen der Beiträge sind Übersetzungen der deutschen Originale.',
        ],
      },
      {
        id: 'entstehung',
        title: 'Entstehung',
        text: ['Neu gebaut im November 2026, mit Claude von Anthropic als Programmierhilfe.'],
      },
    ],
  },
  en: {
    kicker: 'About this site',
    title: 'Colophon',
    lede: 'The colophon of a manuscript says who wrote it, when and with what. This is the same for smog.sh.',
    sections: [
      {
        id: 'idee',
        title: 'Idea',
        text: [
          'The design goes by the working name “Skriptorium”: manuscript meets terminal. A dark ground, a leaf of parchment on it, rubric red for whatever stands out, and initials as in a codex. Next to them sits the typeface of a command line, because smog.sh is, by its name, a shell script.',
        ],
      },
      {
        id: 'schrift',
        title: 'Type',
        items: [
          { when: 'Text', what: 'EB Garamond', detail: 'Running text and titles' },
          { when: 'Terminal', what: 'IBM Plex Mono', detail: 'Wordmark, menu, dates and section headings' },
          { when: 'Initials', what: 'Sinistre Caroline', detail: 'Initials and the numbers of the posts' },
        ],
      },
      {
        id: 'farbe',
        title: 'Colour',
        text: ['Green appears only on the dark ground, red only on parchment.'],
        items: colours(['Ground', 'Parchment', 'Rubric', 'Gold leaf', 'Cursor']),
      },
      {
        id: 'technik',
        title: 'Technology',
        text: [
          'The writing happens in WordPress, which serves only as the scriptorium. After every change Astro builds static pages from it, and Netlify serves them.',
          'The site sets no cookies, counts no visits and shows no advertising. Embedded videos come from youtube-nocookie.com and load only when you scroll to them.',
        ],
      },
      {
        id: 'eigenheiten',
        title: 'Quirks',
        text: [
          'Posts are counted from zero. The home page shows a different still on every visit. Words that are talked about are set in italics, as is usual in linguistics: <em>they</em>. The English versions of the posts are translations of the German originals.',
        ],
      },
      {
        id: 'entstehung',
        title: 'Making',
        text: ['Rebuilt in November 2026, with Claude by Anthropic as a programming aid.'],
      },
    ],
  },
};
