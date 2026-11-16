// Teaching page: a selection from the "send-off" emails sent to course
// participants after each session (88 emails, 2023–2026).
//
// The excerpts are verbatim English, on both language versions of the page;
// cuts are marked […]. Before adding one, remove anything that names a
// student, a guest or a colleague, any email address, and any link to
// course-internal material. Only the frame (headings, sources) is translated.
//
// Texts may contain <em>…</em> for words cited as words.

const course = {
  intro: { de: 'Introduction to English Linguistics', en: 'Introduction to English Linguistics' },
  gender: { de: 'BA-Seminar «Gender and Sexuality in English»', en: 'BA seminar “Gender and Sexuality in English”' },
  social: { de: 'BA-Seminar «Analysing Language on Social Media»', en: 'BA seminar “Analysing Language on Social Media”' },
};
const src = (key, de, en) => ({ de: `${course[key].de}, ${de}`, en: `${course[key].en}, ${en}` });

export const courses = [
  { when: '2023–2026', what: course.intro, detail: { de: 'Seminargruppen zur Einführungsvorlesung, zwei Semester pro Jahrgang', en: 'Seminar groups for the introductory lecture, two semesters per cohort' } },
  { when: { de: 'HS 2025', en: 'Fall 2025' }, what: course.social },
  { when: { de: 'HS 2024', en: 'Fall 2024' }, what: course.gender },
];

// What a student wrote about the send-offs (also on the Feedback page).
export const voice = {
  text: 'What I find extremely helpful are the e-mails we receive after every session mentioning again a few important points and answering questions in a written and extensive manner so that we can be sure to have all informaiton',
  source: { de: 'Kursevaluation, HS 2024, anonym', en: 'Course evaluation, fall 2024, anonymous' },
};

export const sections = [
  {
    id: 'nachgeschlagen',
    title: { de: 'Was ich nachschlagen musste', en: 'Things I had to look up' },
    note: {
      de: 'Der Kern jeder Mail: die Fragen aus der Sitzung, auf die ich keine sichere Antwort hatte.',
      en: 'The core of every email: the questions from class that I could not answer for certain.',
    },
    excerpts: [
      {
        head: 'Can allophones become phonemes',
        source: src('intro', 'Oktober 2023', 'October 2023'),
        text: [
          'Yes! I said that I strongly suspected so but needed an example to be sure. One example I found is that the verb <em>to house</em> is pronounced /haʊz/ while the noun is pronounced with a voiceless fricative at the end, i.e. /haʊs/. […] No, you do not need to know this. Rather, I hope it shows that a lot of (synchronic) phonology (and indeed synchronic linguistics) is the attempt to systematize the patterns we observe, whether they have historic reasons or otherwise.',
        ],
      },
      {
        head: 'Are diphthongs a single phoneme',
        source: src('intro', 'Oktober 2024', 'October 2024'),
        text: [
          'We had an excellent question that I’ve never thought of myself: Are diphthongs a single phoneme or are they the combination of two phonemes? From some cursory research, it seems that both possibilities are valid, depending on who you ask. Once you delve into the explanations, it gets complex and unclear. It also seems to depend on the language. […]',
        ],
      },
      {
        head: 'A little note on acceptance',
        source: src('intro', 'Oktober 2023', 'October 2023'),
        text: [
          'The question was raised why certain neologisms are not admissible in formal language, e.g. in academic essays. I pointed to the social aspect of language, namely the convention of having different registers and words not freely circulating between them. I remembered an example where morphology is directly linked to the register phenomenon: <em>irregardless</em>. Known as a ‘common mistake’ because it has two negating affixes, <em>in-</em> and <em>-less</em>. This argument is not really sound from a linguistics point of view but it shows that speakers do analyze their words in their everyday life and use the observed patterns to denote correct vs incorrect language use.',
        ],
      },
      {
        head: 'Most words are rare',
        source: src('intro', 'Mai 2025', 'May 2025'),
        text: [
          '[…] most words are rare. There’s really just a handful of words that are used very frequently (function words, closed class) and the vast majority of words appear only very occasionally. It’s the reason why learning a language is so never-ending and why corpus linguistics only properly works if you amass very large amounts of linguistic material.',
          'Related to this: there is an undeciphered manuscript called the Voynich manuscript which is written in an unknown script in some unknown language. […] What’s more, its content actually is Zipf-distributed. So we were able to pretty much prove that the Voynich manuscript contains actual language, we just don’t know at all what it any of it says. Very fun rabbithole to go down!',
        ],
      },
      {
        head: 'Isoglosses',
        source: src('intro', 'Mai 2025', 'May 2025'),
        text: [
          '[…] Sociolinguists essentially drive around a region and ask people "What do you call the part of the apple you throw away? What\'s the name for the end-piece of bread? The game that children play where they hide and one has to find the others?" (\'Verstecksti\' in Bavaria lol). You will not believe the number of words that exist for <em>stairs</em> in Switzerland :O.',
        ],
      },
      {
        head: 'Sign languages',
        source: src('intro', 'Mai 2025', 'May 2025'),
        text: [
          'I really hope you understood today that from the ground and all the way up into sociolinguistic spheres, sign languages are fully-fledged languages, and not just simple codes. I invite you to seek out more in the sources of your liking because it can get really fascinating and funny.',
        ],
      },
    ],
  },
  {
    id: 'ratschlaege',
    title: { de: 'Ratschläge', en: 'Advice' },
    excerpts: [
      {
        head: 'Week 1',
        source: src('intro', 'September 2023', 'September 2023'),
        text: [
          'At university, you can leave for whatever reason at any time without asking the instructor. Presence and absence are your responsibility so you’re free to come and go as you see fit. I’d just ask you to make as little noise as possible when you leave early :)',
          '[…] And as always, I can be reached via e-mail for any question, big and small, redundant and original, really just ask away!',
        ],
      },
      {
        head: 'Good science',
        pull: true,
        source: src('social', 'Oktober 2025', 'October 2025'),
        text: [
          '[…] good science is not about the quality/strength of the results, it is about the transparency and the completeness of thought.',
        ],
      },
      {
        head: 'Paper writing',
        source: src('intro', 'Mai 2024', 'May 2024'),
        list: [
          'Establish a paper writing playlist with songs that perfectly express this special mood. I did that years and years ago. The songs on there, I despise them, they’re perfect, I love it. […]',
          'Justify everything! If you cannot justify something, say so! Maximum transparency, maximum cohesion!',
          'Do not be afraid to highlight your shortcomings, whatever they may be. Stating that your methods are built on speculation rather than previous examples and therefore may be limited is GOOD. Trying to hide your shortcomings is pretty obvious to me and is bad academic style. No bueno.',
          'Lots and lots of people, for instance, did not glean from the Manual that primary sources (corpora, analyzed material, etc) go in a separate list of sources in the references section.',
          'I hope you gleaned from the previous point that <em>glean</em> is a nice verb if I may say so myself.',
          'If you are running short on time, maybe prepare an email with the address, subject etc already filled out. Then you can just attach the finished file and hit send. Also, do not stress over small, last-minute fixes. They will barely impact your grade. Handing it in post-deadline, however, definitely will majorly impact your grade.',
        ],
      },
      {
        head: 'Digital subterfuge',
        source: src('intro', 'Mai 2024', 'May 2024'),
        text: [
          'As a side note, my job used to be fixing PDFs from literal decades ago and conducting other forensic research on digital files. […]',
          'If anyone tries to do a fake submission to gain more time, (saving a random file as a .pdf that will then appear to be “damaged”; saving a fake error message as pdf; .....) I will immediately notice =) I will then build a shrine of mockery in your name and will sneer at your measly attempt at academic treachery every single day. Digital subterfuge is not an option. :]',
        ],
      },
      {
        head: 'Armchair linguistics',
        source: src('gender', 'Oktober 2024', 'October 2024'),
        text: [
          '[…] I don’t feel comfortable mansplaining feminist perspectives to you for obvious reasons, so please turn this into something more collaborative by reading it and participating next time! […]',
          'Robin Lakoff notes early on in the paper that she takes all examples from her own mind. She gives a few justifications for this, but essentially, making up sentences and discussing them goes under the category of “armchair linguistics.” It is a valid, albeit not wholly unbiased approach to linguistics. So, while reading, please think: Do the examples ring true to you? Do you think her points would hold up if we try to test them quantitatively? Crucially: Do you experience this in your own life in your own language community?',
        ],
      },
      {
        head: 'Lessons learned',
        pull: true,
        source: src('social', 'Dezember 2025', 'December 2025'),
        text: ['One of my lessons learned for the seminar was "no data extraction is ever trivial."'],
      },
    ],
  },
  {
    id: 'zwischentoene',
    title: { de: 'Zwischentöne', en: 'Asides' },
    excerpts: [
      {
        head: 'Christmas',
        source: src('intro', 'November 2023', 'November 2023'),
        text: [
          'My first shock as a student was how Christmas time did not feel at all christmassy anymore while in uni. You will just get pulled into a million events, get tortured with deadlines and exams, and end up shivering under a Christmas tree on the 24th with a thousand-yard stare. But later I realized: It’s on you to make Christmas time christmassy! Take that time off! Sometimes it’s even beneficial to study an hour less and instead do something relaxing! […] Don’t forget to be human beings outside of all this stuff, mind your inner child, don’t let Christmas die!',
        ],
      },
      {
        head: 'An anecdote',
        source: src('intro', 'Oktober 2023', 'October 2023'),
        text: [
          'And as a little anecdote: I once helped an old gentleman find his way around UZH at a large linguistics conference that was being hosted here. He asked me if I knew about language typology. I told him yeah and that I knew about the 4 groups and such. He said he was happy to hear that because he was one of the linguists who started typology and came up with the 4 categories. I was star-struck to say the least.',
        ],
      },
      {
        head: 'On the evaluation',
        source: src('gender', 'Dezember 2024', 'December 2024'),
        text: [
          'The course evaluation was extreeeemely positive and I want to thank you once again! The comments are very helpful and honestly sweet. If I wrote them on post-its and put those around my apartment that would be just slightly creepy and would make my days so happy and sunny!',
        ],
      },
      {
        head: 'One-liners',
        source: { de: 'Aus verschiedenen Mails, 2023–2025', en: 'From various emails, 2023–2025' },
        list: [
          'Thanks for subscribing to my newsletter and see you at tomorrow’s lecture!',
          'Now that email wasn’t very funny. And that’s okay. No need to force it.',
          'And now off you go, the sun is shining. You know what that means! Beethoven\'s 6th Symphony 😇🤗 (wow they have emojis on OLAT)',
          'I have brought my unread emails counter down from 52 to 4, where it shall remain for the rest of the day.',
        ],
      },
    ],
  },
];

// How the emails end. In order of first appearance.
export const signOffs = [
  'Haut les cœurs!',
  'Season’s greetings,',
  'That’s all, folks!',
  'Toodaloo,',
  'Bippity boppity,',
  'Okay boomers,',
  'Hell yeah!',
  'Häbed sorg,',
  '*Gestures vaguely*',
  '*Warm*,',
  'Lait malolo liklik –',
  'Saúdos cordiais,',
  'Carlos over and out!',
  'Bless you,',
  'Yeehaw,',
  '*Look behind you*,',
  'With an understanding nod,',
  'Onwards and upwards!',
  'Yup,',
  'Toodles,',
  '¡Hasta la proxima!',
  'An Irish blessing,',
  'Byyeeeeee,',
  'Have a wonderful rainy day!',
  'Up high!',
  'Up and away,',
  'G\'bye!',
  'Safe travels,',
  'I bid you adieu–',
  'Be merry, be resilient!',
  'Cursing under my breath,',
  'With a respectful bow,',
];

// Pictures from the last slide of a session. Made with an image generator in
// August 2023; the captions are the prompts.
export const pictures = [
  { src: '/teaching/monday-1.webp', prompt: 'An epic dark academic impression of what Mondays feel like, optimistic' },
  { src: '/teaching/monday-2.webp', prompt: 'Monday digital art, university, bright, optimistic, smart' },
  { src: '/teaching/monday-3.webp', prompt: 'Monday digital art, university, bright, optimistic, smart' },
  { src: '/teaching/syntax-tree.webp', prompt: 'A popart painting of a tree spelling the word \'syntax\'' },
];

export const copy = {
  de: {
    kicker: 'Lehre',
    title: 'Send-offs',
    lede: 'Nach jeder Sitzung schreibe ich meinen Studierenden eine Mail: was offen blieb, was ich nachschlagen musste, was als Nächstes kommt, und meistens ein Witz. Ich nenne sie Send-offs. Zwischen 2023 und 2026 sind 88 davon entstanden. Hier eine Auswahl, unverändert auf Englisch; Kürzungen sind mit […] markiert.',
    coursesTitle: 'Kurse',
    coursesNote: 'Alle am Englischen Seminar der Universität Zürich.',
    voiceLink: 'Mehr Stimmen von Studierenden',
    signOffsTitle: 'Grussformeln',
    signOffsNote: 'So enden die Mails, in der Reihenfolge ihres ersten Auftritts.',
    picturesTitle: 'Vom Ende der Folien',
    picturesNote: 'Der Einführungskurs fand montags statt. Für die letzte Folie sollte ein Bildgenerator 2023 «Monday» malen und, einmal, einen Syntaxbaum. Unter jedem Bild steht der Auftrag.',
  },
  en: {
    kicker: 'Teaching',
    title: 'Send-offs',
    lede: 'After every session I write my students an email: what stayed open, what I had to look up, what comes next, and usually a joke. I call them send-offs. Between 2023 and 2026 there were 88 of them. Here is a selection, unedited; cuts are marked […].',
    coursesTitle: 'Courses',
    coursesNote: 'All at the English Department of the University of Zurich.',
    voiceLink: 'More voices from students',
    signOffsTitle: 'Sign-offs',
    signOffsNote: 'How the emails end, in order of first appearance.',
    picturesTitle: 'From the last slide',
    picturesNote: 'The introductory course met on Mondays. For the last slide, an image generator was asked in 2023 to paint “Monday” and, once, a syntax tree. The prompt is under each picture.',
  },
};

export const pick = (value, lang) => (value && typeof value === 'object' && !Array.isArray(value) ? value[lang] : value);
