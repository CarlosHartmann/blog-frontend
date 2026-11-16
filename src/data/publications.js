// Publications & activities. Edit this file to add or change entries.
// Source: Carlos's Zotero library (items authored by him), November 2026.
//
// Each entry: year (free text), title, detail in both languages (or one
// string for both), an optional url, or `post` with the slug of a blog post.
// A short account of the research, shown at the top of the page.
// Source: summary of the Doc.Mobility research plan (2026).
export const research = {
  de: 'Meine Forschung folgt dem Pronomen «they». Seit der zweiten Hälfte des 20. Jahrhunderts bezieht es sich immer häufiger nicht nur auf unbestimmte/generische, sondern auch auf bestimmte, diskursbekannte einzelne Personen – man kennt es heutzutage als das sog. non-binäre «they», das ist aber nur ein neuerer Aspekt davon. Weil der Diskurs über das singulare «they» seit jeher mit gesellschaftlichen und politischen Haltungen verflochten ist, verrät sein Gebrauch viel über den heutigen Umgang mit Gleichstellung und geschlechtergerechter Sprache. Singulare und plurale Verwendungen von Hand zu trennen ist aufwendig, weshalb das Thema lange auf Experimente und Umfragen beschränkt blieb. Ich habe geprüft, wie zuverlässig Large Language Models diese Unterscheidung treffen, und wende das Verfahren auf Reddit-Daten ab 2010 an, um zu zeigen, wann, unter welchen Bedingungen und in welchen Gruppen sich der neue Gebrauch verbreitet hat. LLMs haben jetzt die Forschungsmöglichkeiten in diesem und anderen Feldern massiv erweitert und ich möchte Teil dieser Expansion sein.',
  en: 'My research follows the pronoun “they.” Since the second half of the 20th century it has increasingly come to refer not only to indefinite or generic antecedents but also to specific individuals already known in the discourse. Today this is widely known as nonbinary “they,” but that is only one of its more recent aspects. Because the discourse about singular “they” has always been entangled with social and political attitudes, its use reveals a good deal about how gender equality and inclusive language are handled today. Telling singular from plural uses by hand is slow, which long confined the topic to experiments and surveys. I have tested how reliably large language models make this distinction, and I am applying the method to Reddit data from 2010 onward to show when, under what conditions and among which groups the new usage spread. LLMs have now massively expanded what research can do in this field and others, and I want to be part of that expansion.',
};

export const sections = [
  {
    id: 'artikel',
    initial: 'A',
    title: { de: 'Artikel & Papers', en: 'Articles & papers' },
    items: [
      {
        year: { de: 'eingereicht', en: 'submitted' },
        title: 'Who is the Pronoun Pro? Comparing LLMs and Humans at Number-Disambiguation of they',
        detail: { de: 'Preprint auf OSF', en: 'Preprint on OSF' },
        url: 'https://doi.org/10.17605/OSF.IO/2J4KE',
      },
      {
        year: '2026',
        title: 'Singular they Becoming even more Singular: The themselves/themself Variation on Reddit',
        detail: 'Applied Corpus Linguistics 6(2), 100199',
        url: 'https://doi.org/10.1016/j.acorp.2026.100199',
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
        detail: { de: 'Datensatz auf dem Schweizer LaRS-Repositorium; auch auf OSF', en: 'Dataset on the Swiss LaRS repository; also on OSF' },
        url: 'https://doi.org/10.48656/4xzy-gc80',
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
        title: 'Who is the Pronoun Pro?',
        detail: {
          de: 'Poster, Workshop «Large Language Models for Linguistic Analyses: Applications and Limitations», Universität zu Köln, 24.–25. November 2025',
          en: 'Poster, workshop “Large Language Models for Linguistic Analyses: Applications and Limitations”, University of Cologne, 24–25 November 2025',
        },
        url: 'https://doi.org/10.17605/OSF.IO/2J4KE',
      },
      {
        year: '2025',
        title: 'To whom does they refer? Comparing LLMs and Trained Human Annotators in Pronoun Resolution',
        detail: {
          de: '8. Konferenz der International Society for the Linguistics of English (ISLE 8), Santiago de Compostela, 2. September 2025',
          en: '8th Conference of the International Society for the Linguistics of English (ISLE 8), Santiago de Compostela, 2 September 2025',
        },
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
        year: '2021',
        title: '«Puritanische Exzesse. Ein Filmkommentar zu ‹Bully› von Larry Clark»',
        detail: {
          de: 'In: Yvonne Frenzel Ganz und Andrea Kager (Hg.), Cinépassion – Coming of Age. Giessen: Psychosozial-Verlag',
          en: 'In: Yvonne Frenzel Ganz and Andrea Kager (eds.), Cinépassion – Coming of Age. Giessen: Psychosozial-Verlag',
        },
      },
      {
        year: '2017–2020',
        title: { de: 'Filmstelle VSETH, Studierendenkino der ETH Zürich', en: 'Filmstelle VSETH, the student cinema of ETH Zurich' },
        detail: {
          de: 'Vorstandsmitglied: Programmgestaltung, Mittelbeschaffung, Gesamtplanung; zeitweise Leitung des Kinos',
          en: 'Board member: programming, fundraising, overall planning; for a time head of the cinema',
        },
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
];

export const pick = (value, lang) => (value && typeof value === 'object' ? value[lang] : value);
