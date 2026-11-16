// "Now" page: what is going on at the moment. Edit by hand; change the month
// in `kicker` when you do.
//
// The film list comes from a Letterboxd export (Letterboxd has no API):
// films released this year with a rating of 4.5 stars or more, plus re-releases
// that count as new. Links are the short links from the export.

const stars = (rating) => '★'.repeat(Math.floor(rating)) + (rating % 1 ? '½' : '');

const films = [
  { title: 'The Devils', rating: 5, url: 'https://boxd.it/1inI', de: 'Ken Russell, 1971 · der Director’s Cut ist 2026 erschienen und ein merklich verbesserter Film, und aktueller denn je.', en: 'Ken Russell, 1971 · the director’s cut came out in 2026 and is a markedly improved film, and more topical than ever.' },
  { title: 'Teenage Sex and Death at Camp Miasma', rating: 4.5, url: 'https://boxd.it/L9GS' },
  { title: 'The Odyssey', rating: 4.5, url: 'https://boxd.it/QFQU' },
];

const filmItems = (lang) => films.map((film) => ({ when: stars(film.rating), what: film.title, url: film.url, detail: film[lang], lang: 'en' }));

export const now = {
  path: '/now/',
  current: 'now',
  de: {
    kicker: 'Stand: November 2026',
    title: 'Aktuell & demnächst',
    lede: 'Woran ich gerade arbeite, was ansteht und welche Filme mich dieses Jahr begeistert haben.',
    sections: [
      {
        id: 'jetzt',
        title: 'Aktuell',
        items: [
          { when: 'bis April 2027', what: 'Forschungsaufenthalt an der University of Birmingham', detail: 'Seit September 2026, mit Stipendium' },
          { when: 'laufend', what: 'Ich lerne Ukrainisch' },
          { when: 'in Arbeit', what: 'Mein nächster psychoanalytischer Filmkommentar', detail: 'Die bisherigen Kommentare stehen im Filmregister', url: '/film/' },
          { when: 'eingereicht', what: 'Artikel «Who is the Pronoun Pro?»', detail: 'Preprint auf arXiv; zum Ausprobieren gibt es eine kleine Auswahl der Texte', url: '/they/' },
        ],
      },
      {
        id: 'demnaechst',
        title: 'Demnächst',
        items: [{ when: 'Herbst 2027', what: 'Abschluss der Dissertation zum singularen <em>they</em>', detail: 'voraussichtlich' }],
      },
      {
        id: 'filme',
        title: 'Filme des Jahres 2026',
        text: ['Neue Filme, die ich dieses Jahr geliebt habe (ab ★★★★½), nach meiner Wertung auf <a href="https://letterboxd.com/smogshaik/">Letterboxd</a>.'],
        items: filmItems('de'),
      },
    ],
  },
  en: {
    kicker: 'As of November 2026',
    title: 'Now & upcoming',
    lede: 'What I am working on, what is coming up, and the films that won me over this year.',
    sections: [
      {
        id: 'jetzt',
        title: 'Now',
        items: [
          { when: 'until April 2027', what: 'Research stay at the University of Birmingham', detail: 'Since September 2026, funded by a grant' },
          { when: 'ongoing', what: 'I am learning Ukrainian' },
          { when: 'in progress', what: 'My next psychoanalytic film commentary', detail: 'The earlier commentaries are in the film index', url: '/film/' },
          { when: 'submitted', what: 'Article “Who is the Pronoun Pro?”', detail: 'Preprint on arXiv; a small selection of its texts is there to try yourself', url: '/they/' },
        ],
      },
      {
        id: 'demnaechst',
        title: 'Upcoming',
        items: [{ when: 'Fall 2027', what: 'Finishing the dissertation on singular <em>they</em>', detail: 'expected' }],
      },
      {
        id: 'filme',
        title: 'Films of 2026',
        text: ['New films I loved this year (★★★★½ and up), by my ratings on <a href="https://letterboxd.com/smogshaik/">Letterboxd</a>.'],
        items: filmItems('en'),
      },
    ],
  },
};
