// Curriculum vitae, in German and English. Edit this file to change the CV page.
// Sources: "Current CV" and "CV_HartmannCarlos_Feb2026" (2026), plus the
// teaching paragraph of the Arbeitszeugnis of the English Seminar, UZH (July 2026).
// Deliberately left out: postal address, phone number, date of birth,
// nationalities and private (view-only) OSF links.

export const profile = {
  de: 'Computerlinguist und Korpuslinguist mit Interesse an Data Management/Stewardship. Ich doktoriere an der Universität Zürich zum singularen «they» und setze LLMs für linguistische Zwecke ein, aktuell besonders mit agentic workflows.',
  en: 'Computational and corpus linguist with an interest in data management and stewardship. I am doing a PhD at the University of Zurich on singular “they” and use LLMs for linguistic purposes, at present mostly with agentic workflows.',
};

export const links = [
  { label: 'ORCID', url: 'https://orcid.org/0009-0007-6930-2284' },
  { label: 'GitHub', url: 'https://github.com/CarlosHartmann' },
  { label: 'OSF', url: 'https://osf.io/2hp7j/' },
];

export const sections = [
  {
    id: 'ausbildung',
    title: { de: 'Ausbildung', en: 'Education' },
    items: [
      {
        when: '2026–2027',
        what: { de: 'Forschungsaufenthalt an der University of Birmingham', en: 'Research stay at the University of Birmingham' },
        detail: { de: 'September 2026 bis April 2027, mit Stipendium', en: 'September 2026 to April 2027, funded by a scholarship' },
      },
      {
        when: '2023–2027',
        what: {
          de: 'Kumulative Dissertation in Computer- und Korpuslinguistik, Universität Zürich',
          en: 'Cumulative PhD in computational and corpus linguistics, University of Zurich',
        },
        detail: {
          de: 'Zum singularen «they» und verwandten Phänomenen, bei Prof. Dr. Marianne Hundt. Abschluss voraussichtlich Herbst 2027',
          en: 'On singular “they” and related phenomena, supervised by Prof. Dr. Marianne Hundt. Expected graduation: autumn 2027',
        },
      },
      {
        when: '2019–2022',
        what: {
          de: 'MA Linguistik (Monomaster) mit Schwerpunkt Computerlinguistik, Universität Zürich',
          en: 'MA in Linguistics (single-subject master) with a focus on computational linguistics, University of Zurich',
        },
        detail: {
          de: 'Masterarbeit: «Shifting Pronouns and Disruptive Technology: Studying Singular ‘They’ with GPT-3», ausgezeichnet mit dem Semesterpreis',
          en: 'Thesis: “Shifting Pronouns and Disruptive Technology: Studying Singular ‘They’ with GPT-3”, awarded the Semesterpreis',
        },
        url: 'https://doi.org/10.5167/uzh-231828',
      },
      {
        when: '2015–2019',
        what: {
          de: 'BA Deutsche und Englische Sprach- und Literaturwissenschaft, Universität Zürich',
          en: 'BA in German and English Linguistics and Literary Studies, University of Zurich',
        },
        detail: {
          de: 'Dazu freiwillig 36 ECTS in Computerlinguistik. Bachelorarbeit: «Tagging and Parsing the Lampeter Corpus of Early Modern English Tracts: Spelling Variation and Other Challenges», ausgezeichnet mit dem Semesterpreis',
          en: 'Plus 36 voluntary ECTS in computational linguistics. Thesis: “Tagging and Parsing the Lampeter Corpus of Early Modern English Tracts: Spelling Variation and Other Challenges”, awarded the Semesterpreis',
        },
      },
      {
        when: '2014–2015',
        what: { de: 'Diplôme d’études Français langue étrangère, Université de Genève', en: 'Diplôme d’études Français langue étrangère, Université de Genève' },
      },
    ],
  },
  {
    id: 'forschung',
    title: { de: 'Forschung & Datenarbeit', en: 'Research & data work' },
    items: [
      {
        when: { de: 'seit 2025', en: 'since 2025' },
        what: { de: 'Experte für Maturaarbeiten, Kantonsschule Enge', en: 'Expert examiner for final theses, Kantonsschule Enge' },
        detail: { de: 'Schwerpunkte Informatik, KI und Videospiele', en: 'Focus on IT, AI and video games' },
      },
      {
        when: { de: 'Sommer 2025', en: 'Summer 2025' },
        what: { de: 'Praktikum bei DataFutures GmbH', en: 'Internship at DataFutures GmbH' },
        detail: {
          de: 'Forschungsdaten-Infrastrukturen, Austausch zwischen Repositorien und Gedächtnisinstitutionen, Mitarbeit an Förderanträgen',
          en: 'Research data infrastructures, liaison between repositories and heritage institutions, work on funding applications',
        },
      },
      {
        when: '2023–2026',
        what: {
          de: 'Wissenschaftlicher Assistent am Lehrstuhl von Prof. Dr. Marianne Hundt, Englisches Seminar, Universität Zürich',
          en: 'Research and teaching assistant to Prof. Dr. Marianne Hundt, English Department, University of Zurich',
        },
        detail: {
          de: 'Analyse von Korpora mit vielen Millionen Tokens in Python und R, statistische Modellierung (lineare und gemischte Modelle), automatisierte Evaluation von LLMs und Vergleiche mit menschlichen Annotationen, reproduzierbare Open-Data-Abläufe; redaktionelle Mitarbeit an der Zeitschrift English World-Wide',
          en: 'Analysis of multi-million-token corpora in Python and R, statistical modeling (linear and mixed-effects models), automated LLM evaluation and comparisons with human annotation, reproducible open-data workflows; editorial support for the journal English World-Wide',
        },
      },
      {
        when: '2021–2023',
        what: { de: 'Tutorate in Python und XML, Zentralbibliothek Zürich', en: 'Tutorials in Python and XML, Zentralbibliothek Zürich' },
        detail: { de: 'Für Studierende der Bibliothekswissenschaft', en: 'For students of library science' },
      },
      {
        when: '2019–2022',
        what: { de: 'Studentischer Mitarbeiter für IT-Aufgaben, Staatsarchiv Zürich', en: 'Student assistant for IT tasks, State Archives of Zurich' },
        detail: {
          de: 'Aufbereitung und Bereinigung grosser Datenbestände aus Forschung und Verwaltung, automatisierte Texterkennung mit Transkribus, Beratung in IT-Fragen, Skripte in PowerShell und VBA',
          en: 'Curation and clean-up of large datasets from research and government, automated text recognition with Transkribus, consulting on IT questions, scripting in PowerShell and VBA',
        },
      },
      {
        when: '2016–2021',
        what: {
          de: 'Hilfsassistent bei Prof. Dr. Marianne Hundt, Englisches Seminar, Universität Zürich',
          en: 'Student assistant to Prof. Dr. Marianne Hundt, English Department, University of Zurich',
        },
        detail: {
          de: 'Unter anderem Edition historischer Korpora vom 16. bis 19. Jahrhundert',
          en: 'Including the editing of historical corpora from the 16th to the 19th century',
        },
      },
    ],
  },
  {
    id: 'lehre',
    title: { de: 'Lehre & Betreuung', en: 'Teaching & supervision' },
    note: {
      de: 'In den Lehrevaluationen erhielt ich über drei Jahre und verschiedene Kursformate hinweg durchgehend starke bis sehr starke Zufriedenheitswerte. Besonders hervorgehoben wurden die Erreichbarkeit, das Engagement und eine inklusive, zugängliche Atmosphäre im Unterricht.',
      en: 'In course evaluations over three years and several course formats, students consistently reported strong to very strong satisfaction. They singled out my availability, my commitment and an inclusive, accessible classroom atmosphere.',
    },
    items: [
      {
        when: '2025–2026',
        what: { de: 'Bachelorseminar «Analyzing Language on Social Media»', en: 'BA seminar “Analyzing Language on Social Media”' },
      },
      {
        when: '2024–2025',
        what: { de: 'Bachelorseminar «Gender and Sexuality in English»', en: 'BA seminar “Gender and Sexuality in English”' },
      },
      {
        when: '2023–2025',
        what: { de: '«Introduction to English Linguistics», zweisemestriges BA-Modul', en: '“Introduction to English Linguistics”, two-semester BA module' },
      },
      {
        when: '2025–2026',
        what: { de: 'Betreuung von vier Bachelorarbeiten', en: 'Supervision of four BA theses' },
        detail: {
          de: 'Zu Genderlinguistik und zum Pronomengebrauch für Tiere; dazu zwei psycholinguistische Aufsätze (Maze-Task) gemeinsam mit Studierenden zur Publikation',
          en: 'On gender linguistics and on pronoun use for animals; plus two psycholinguistics papers (maze task) co-authored with students for publication',
        },
      },
      {
        when: '2024, 2025',
        what: {
          de: 'Gastvorlesung «Technology in Science. Potentials and Pitfalls.»',
          en: 'Guest lecture “Technology in Science. Potentials and Pitfalls.”',
        },
        detail: { de: 'Im Kurs Theory of Knowledge', en: 'In the course Theory of Knowledge' },
      },
      {
        when: '2023',
        what: { de: 'Gastvorlesung im Bachelorseminar «Banned Books in America»', en: 'Guest lecture in the BA seminar “Banned Books in America”' },
        detail: { de: 'Bei Dr. Cedric Essi', en: 'Taught by Dr. Cedric Essi' },
      },
    ],
  },
  {
    id: 'preise',
    title: { de: 'Preise', en: 'Prizes' },
    items: [
      {
        when: '2022',
        what: { de: 'Semesterpreis der Universität Zürich für die Masterarbeit', en: 'Semesterpreis of the University of Zurich for the MA thesis' },
      },
      {
        when: '2019',
        what: { de: 'Semesterpreis der Universität Zürich für die Bachelorarbeit', en: 'Semesterpreis of the University of Zurich for the BA thesis' },
      },
    ],
  },
  {
    id: 'methoden',
    title: { de: 'Methoden & Werkzeuge', en: 'Methods & tools' },
    items: [
      {
        when: { de: 'Statistik', en: 'Statistics' },
        what: {
          de: 'Lineare und gemischte Modelle, Hypothesentests, quantitative Korpus- und Netzwerkanalyse, psycholinguistische Experimente (Maze-Task), Inter-Rater-Reliabilität',
          en: 'Linear and mixed-effects models, hypothesis testing, quantitative corpus and network analysis, psycholinguistic experiments (maze task), inter-rater reliability',
        },
      },
      {
        when: { de: 'Programmieren', en: 'Programming' },
        what: {
          de: 'Python, R, SQL (PostgreSQL), Bash/Zsh, VBA, JavaScript, Quarto, Git, Docker, Transkribus, Arbeit mit LLMs',
          en: 'Python, R, SQL (PostgreSQL), Bash/Zsh, VBA, JavaScript, Quarto, Git, Docker, Transkribus, working with LLMs',
        },
      },
      {
        when: { de: 'Sprachen', en: 'Languages' },
        what: {
          de: 'Deutsch und Spanisch (Erstsprachen); Englisch, Schweizerdeutsch, Französisch (fliessend); Ukrainisch (Grundkenntnisse)',
          en: 'German and Spanish (first languages); English, Swiss German, French (fluent); Ukrainian (basic)',
        },
      },
    ],
  },
  {
    id: 'open-science',
    title: { de: 'Open Science', en: 'Open science' },
    items: [
      {
        when: '2025–2026',
        what: { de: 'Offener Datensatz Reddit FlairShare', en: 'Open dataset Reddit FlairShare' },
        detail: { de: 'Auf OSF und gespiegelt auf dem Schweizer LaRS-Repositorium', en: 'On OSF and mirrored on the Swiss LaRS repository' },
        url: 'https://doi.org/10.48656/4xzy-gc80',
      },
      {
        when: '2026',
        what: { de: 'Replikationsdaten zu den Artikeln über «themself» und über den Vergleich von LLMs und Menschen', en: 'Replication data for the articles on “themself” and on the comparison of LLMs and humans' },
      },
      {
        when: '2026',
        what: { de: 'Essay «Einige Thesen zu LLMs ("AI") an der Hochschule»', en: 'Essay “A Few Theses on LLMs ("AI") at the University”' },
        detail: { de: 'Auf diesem Blog, für die Vermittlung gedacht', en: 'On this blog, written for outreach' },
        post: 'llms',
      },
      {
        when: '2024–2027',
        what: { de: 'Mitglied der KI-Taskforce des Englischen Seminars', en: 'Member of the English Department’s AI task force' },
        detail: {
          de: 'Die ersten Jahre der KI-Transformation in der Lehre begleitet und dabei die Belegschaft massgeblich mit Know-how zu KI unterstützt. Interne Guidelines wurden von mir verfasst, bzw. existierende erweitert.',
          en: 'Accompanied the first years of the AI transformation in teaching and gave the staff substantial support with AI know-how. I wrote internal guidelines and extended existing ones.',
        },
      },
    ],
  },
  {
    id: 'engagement',
    title: { de: 'Engagement', en: 'Voluntary work' },
    items: [
      {
        when: '2017–2020',
        what: { de: 'Vorstandsmitglied der Filmstelle VSETH, Studierendenkino der ETH Zürich', en: 'Board member of Filmstelle VSETH, the student cinema of ETH Zurich' },
        detail: { de: 'Programmgestaltung, Mittelbeschaffung und Gesamtplanung', en: 'Programming, fundraising and overall planning' },
        url: 'https://filmstelle.ch',
      },
      {
        when: '2017',
        what: { de: 'Mitorganisation der Studentischen Tagung Sprachwissenschaft', en: 'Co-organizer of the Studentische Tagung Sprachwissenschaft (student-led linguistics conference)' },
        detail: { de: '25.–28. Mai 2017', en: 'May 25–28, 2017' },
      },
    ],
  },
];

export const pick = (value, lang) => (value && typeof value === 'object' ? value[lang] : value);
