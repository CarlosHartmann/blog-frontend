// Publications & activities. Edit this file to add or change entries.
// Source: Carlos's Zotero library (items authored by him), November 2026.
//
// Each entry: year (free text), title, detail in both languages (or one
// string for both), an optional url, or `post` with the slug of a blog post.
export const sections = [
  {
    id: 'artikel',
    initial: 'A',
    title: { de: 'Artikel & Papers', en: 'Articles & papers' },
    items: [
      {
        year: '2026',
        title: 'Singular they Becoming even more Singular: The themselves/themself Variation on Reddit',
        detail: 'Applied Corpus Linguistics 6(2), 100199',
        url: 'https://doi.org/10.1016/j.acorp.2026.100199',
      },
      {
        year: '2026',
        title: 'Who is the Pronoun Pro? Comparing LLMs and Trained Human Annotators in Pronoun Resolution',
        detail: { de: 'Preprint, OSF', en: 'Preprint, OSF' },
        url: 'https://doi.org/10.17605/OSF.IO/2J4KE',
      },
      {
        year: '2025',
        title: 'Reddit FlairShare: A Human-Annotated Dataset of Gender-Progressive Online Discourse',
        detail: { de: 'Proc. Interspeech 2025, Rotterdam, S. 684–688', en: 'Proc. Interspeech 2025, Rotterdam, pp. 684–688' },
      },
    ],
  },
  {
    id: 'daten',
    initial: 'D',
    title: { de: 'Daten & Abschlussarbeit', en: 'Data & thesis' },
    items: [
      {
        year: '2025',
        title: 'Reddit FlairShare',
        detail: { de: 'Datensatz, OSF', en: 'Dataset, OSF' },
        url: 'https://doi.org/10.17605/OSF.IO/S36PQ',
      },
      {
        year: '2022',
        title: 'Shifting Pronouns and Disruptive Technology: Studying Singular They with GPT-3',
        detail: { de: 'Masterarbeit, Universität Zürich', en: 'M.A. thesis, University of Zurich' },
        url: 'https://doi.org/10.5167/uzh-231828',
      },
    ],
  },
  {
    id: 'vortraege',
    initial: 'V',
    title: { de: 'Vorträge', en: 'Talks' },
    items: [
      {
        year: '2026',
        title: 'A Perfect Annotator? Comparing the Performance of Humans and LLMs as Annotators of Perfective Constructions',
        detail: {
          de: 'mit Bethany Dallas · ICAME 47, Koblenz, 26. Mai 2026',
          en: 'with Bethany Dallas · ICAME 47, Koblenz, 26 May 2026',
        },
      },
      {
        year: '2025',
        title: 'Who is the Pronoun Pro? Comparing LLMs and Trained Human Annotators in Pronoun Resolution',
        detail: {
          de: 'Workshop «Large Language Models for Linguistic Analyses: Applications and Limitations», Köln, 24.–25. November 2025',
          en: 'Workshop “Large Language Models for Linguistic Analyses: Applications and Limitations”, Cologne, 24–25 November 2025',
        },
        url: 'https://doi.org/10.17605/OSF.IO/2J4KE',
      },
      {
        year: '2025',
        title: 'Who is the Pronoun Pro? Comparing LLMs and Trained Human Annotators in Pronoun Resolution',
        detail: { de: 'ISLE 8, Santiago de Compostela, 2. September 2025', en: 'ISLE 8, Santiago de Compostela, 2 September 2025' },
      },
      {
        year: '2024',
        title: 'A Sociolinguistic Case-Study on the Pronoun-Declarers of Reddit',
        detail: {
          de: 'Konferenz «What are your pronouns? And why does it matter?», Montpellier, 18. Oktober 2024',
          en: 'Conference “What are your pronouns? And why does it matter?”, Montpellier, 18 October 2024',
        },
        url: 'https://pronouns.sciencesconf.org',
      },
    ],
  },
  {
    id: 'film',
    initial: 'F',
    title: { de: 'Film', en: 'Film' },
    items: [
      {
        year: '',
        title: 'Filmstelle der ETH Zürich',
        detail: { de: 'Programmgestaltung, zeitweise Leitung des Kinos', en: 'Programming; for a time head of the cinema' },
        url: 'https://filmstelle.ch',
      },
      {
        year: { de: 'jährlich', en: 'yearly' },
        title: { de: 'Cinépassion: Filmanalysen mit freudianischem Spin', en: 'Cinépassion: film analyses with a Freudian spin' },
        detail: { de: 'Verein Cinépassion, Zürich', en: 'Cinépassion association, Zurich' },
        url: 'https://www.cinepassion.ch/de/',
      },
    ],
  },
  {
    id: 'literarisches',
    initial: 'L',
    title: { de: 'Literarisches', en: 'Literary pieces' },
    items: [
      { year: '2024', title: 'Der Unbekannte aus der Plattenstrasse', detail: { de: 'Kurzgeschichte', en: 'Short story' }, post: 'plattenstrasse' },
      { year: '2023', title: '«Itsumo Nando Demo» (Immer und immer wieder)', detail: { de: 'Liedübersetzung', en: 'Song translation' }, post: 'immer-und-immer-wieder' },
      { year: '2021', title: 'Señores Pasajeros', detail: { de: 'Gedicht', en: 'Poem' }, post: 'senores-pasajeros' },
      { year: '2019', title: '«Funeral Blues» von W. H. Auden', detail: { de: 'Gedichtübersetzung', en: 'Poem translation' }, post: 'bestattungsblues' },
      { year: '2019', title: 'Nachsinnen', detail: { de: 'Gedicht', en: 'Poem' }, post: 'nachsinnen' },
      { year: '2015', title: 'Wort', detail: { de: 'Gedicht', en: 'Poem' }, post: 'wort' },
    ],
  },
];

export const pick = (value, lang) => (value && typeof value === 'object' ? value[lang] : value);
