// "Speaking" page: topics, a short bio for organisers, and the invitation.

export const speaking = {
  path: '/speaking/',
  current: 'speaking',
  de: {
    kicker: 'Einladen',
    title: 'Vorträge',
    lede: 'Ich spreche gern vor Publikum: an Tagungen, in Seminaren, im Kino, an Schulen oder schlicht zur Unterhaltung. Wer mich für einen Vortrag, einen Workshop oder eine Filmeinführung einladen möchte, schreibt mir.',
    cta: { label: 'Anfrage schicken', url: '/contact/' },
    sections: [
      {
        id: 'themen',
        title: 'Themen',
        items: [
          { when: '01', what: 'Sprachdaten', detail: 'Korpora, Social-Media-Daten und Annotation durch Menschen und durch LLMs' },
          { when: '02', what: 'Digital Humanities', detail: 'Was der Computer den Geisteswissenschaften bringt und umgekehrt' },
          { when: '03', what: 'Film und psychoanalytische Filmanalyse', detail: 'Einführungen und Kommentare, im Kino oder im Klassenzimmer' },
          { when: '04', what: 'Archive', detail: 'Elektronische Archivierung und die Frage, was von unseren Daten bleibt' },
          { when: '05', what: 'Geisteswissenschaften im weiteren Sinn' },
          { when: '06', what: 'Zur Unterhaltung', detail: 'Vorträge, die vor allem Spass machen sollen' },
        ],
      },
      {
        id: 'bio',
        title: 'Kurzbiografie',
        text: [
          'Zum Kopieren für Programme und Ankündigungen.',
          'Carlos Hartmann ist Computer- und Korpuslinguist. Er doktoriert an der Universität Zürich zum singularen <em>they</em> und zur Frage, was Large Language Models für die linguistische Annotation leisten. Zuvor arbeitete er drei Jahre in der elektronischen Archivierung am Staatsarchiv des Kantons Zürich. Er leitete das Studierendenkino der ETH Zürich und hält für den Verein Cinépassion psychoanalytische Filmkommentare.',
          'In einem Satz: Carlos Hartmann, Computerlinguist an der Universität Zürich, forscht zum singularen <em>they</em> und zu LLMs in der Linguistik.',
        ],
      },
      {
        id: 'bisher',
        title: 'Bisher',
        items: [
          { when: 'Tagungen', what: 'Vorträge und Poster', detail: 'ICAME, ISLE und weitere', url: '/publications/#vortraege' },
          { when: 'Lehre', what: 'Was Studierende sagen', detail: 'Auszüge aus Lehrevaluationen', url: '/feedback/' },
          { when: 'Film', what: 'Filmkommentare zum Nachlesen', url: '/film/' },
        ],
      },
    ],
  },
  en: {
    kicker: 'Invite me',
    title: 'Speaking',
    lede: 'I enjoy speaking to an audience: at conferences, in seminars, in cinemas, at schools, or simply to entertain. If you would like to invite me for a talk, a workshop or a film introduction, write to me.',
    cta: { label: 'Send a request', url: '/contact/' },
    sections: [
      {
        id: 'themen',
        title: 'Topics',
        items: [
          { when: '01', what: 'Language data', detail: 'Corpora, social media data, and annotation by humans and by LLMs' },
          { when: '02', what: 'Digital humanities', detail: 'What computers do for the humanities, and the other way round' },
          { when: '03', what: 'Film and psychoanalytic film analysis', detail: 'Introductions and commentaries, in the cinema or in the classroom' },
          { when: '04', what: 'Archives', detail: 'Electronic archiving and the question of what remains of our data' },
          { when: '05', what: 'The humanities in a wider sense' },
          { when: '06', what: 'To entertain', detail: 'Talks that are mainly meant to be fun' },
        ],
      },
      {
        id: 'bio',
        title: 'Short bio',
        text: [
          'To copy into programs and announcements.',
          'Carlos Hartmann is a computational and corpus linguist. He is doing a PhD at the University of Zurich on singular <em>they</em> and on what large language models can do for linguistic annotation. Before that he worked for three years in electronic archiving at the State Archives of the Canton of Zurich. He headed the student cinema of ETH Zurich and presents psychoanalytic film commentaries for the Cinépassion association.',
          'In one sentence: Carlos Hartmann, a computational linguist at the University of Zurich, studies singular <em>they</em> and LLMs in linguistics.',
        ],
      },
      {
        id: 'bisher',
        title: 'So far',
        items: [
          { when: 'Conferences', what: 'Talks and posters', detail: 'ICAME, ISLE and others', url: '/publications/#vortraege' },
          { when: 'Teaching', what: 'What students say', detail: 'Excerpts from course evaluations', url: '/feedback/' },
          { when: 'Film', what: 'Film commentaries to read', url: '/film/' },
        ],
      },
    ],
  },
};
