// Feedback page: quoted praise from course evaluations and reference letters.
//
// The quotes are verbatim and stay in the language they were written in, on
// both language versions of the page (typos included; cuts are marked […]).
// Only the frame around them (headings, source lines, notes) is translated.
// Nobody is named: a source says where a quote comes from, not who wrote it.
//
// Each quote: src (key of `sources`), lang of the quote, text, and optionally
//   pull:  true for a short quote that is set large
//   asked: the survey question it answers, in the survey's own words
//   note:  an editorial note in both languages

const evaluation = { de: 'Kursevaluation, anonym', en: 'course evaluation, anonymous' };

export const sources = {
  intro23: {
    tag: { de: 'HS 2023', en: 'Fall 2023' },
    de: `Seminargruppe «Introduction to English Linguistics», Universität Zürich · ${evaluation.de}`,
    en: `Seminar group “Introduction to English Linguistics”, University of Zurich · ${evaluation.en}`,
  },
  intro24: {
    tag: { de: 'HS 2024', en: 'Fall 2024' },
    de: `Seminargruppe «Introduction to English Linguistics», Universität Zürich · ${evaluation.de}`,
    en: `Seminar group “Introduction to English Linguistics”, University of Zurich · ${evaluation.en}`,
  },
  intro25: {
    tag: { de: 'HS 2025', en: 'Fall 2025' },
    de: `Seminargruppe «Introduction to English Linguistics», Universität Zürich · ${evaluation.de}`,
    en: `Seminar group “Introduction to English Linguistics”, University of Zurich · ${evaluation.en}`,
  },
  email26: {
    tag: { de: 'FS 2026', en: 'Spring 2026' },
    de: 'Seminargruppe «Introduction to English Linguistics», Universität Zürich · E-Mail, anonymisiert',
    en: 'Seminar group “Introduction to English Linguistics”, University of Zurich · email, anonymized',
  },
  gender24: {
    tag: { de: 'HS 2024', en: 'Fall 2024' },
    de: `BA-Seminar «Gender and Sexuality in English», Universität Zürich · ${evaluation.de}`,
    en: `BA seminar “Gender and Sexuality in English”, University of Zurich · ${evaluation.en}`,
  },
  social25: {
    tag: { de: 'HS 2025', en: 'Fall 2025' },
    de: `BA-Seminar «Analysing Language on Social Media», Universität Zürich · ${evaluation.de}`,
    en: `BA seminar “Analysing Language on Social Media”, University of Zurich · ${evaluation.en}`,
  },
  school: {
    tag: { de: 'Gymnasium', en: 'High school' },
    de: 'Kantonsschule Enge, Zürich · psychoanalytische Filmanalyse und ästhetische Theorie mit Gymnasiastinnen und Gymnasiasten · Rückmeldung, anonym',
    en: 'Kantonsschule Enge (high school), Zurich · psychoanalytic film analysis and aesthetic theory with the students · feedback, anonymous',
  },
  archive: {
    tag: '2019–2022',
    de: 'Arbeitszeugnis des Staatsarchivs des Kantons Zürich',
    en: 'Reference letter, State Archives of the Canton of Zurich',
  },
  cinema: {
    tag: '2015–2020',
    de: 'Bestätigung des studentischen Engagements, Filmstelle VSETH',
    en: 'Confirmation of voluntary work, Filmstelle VSETH (student cinema of ETH Zurich)',
  },
  tutoring: {
    tag: { de: 'Tutorat', en: 'Tutoring' },
    de: 'Evaluation der Tutorate, anonym · das Lob gilt einem Team von fünf Tutorinnen und Tutoren',
    en: 'Evaluation of the tutorials, anonymous · the praise is for a team of five tutors',
  },
};

// Shown first and large.
export const featured = {
  src: 'intro25',
  lang: 'de',
  asked: 'Comments regarding positive aspects of this course (optional):',
  text: 'alles supi dupi schlupi wupi',
};

export const sections = [
  {
    id: 'begeisterung',
    title: { de: 'Begeisterung, die ansteckt', en: 'Enthusiasm that carries over' },
    quotes: [
      {
        src: 'intro23',
        lang: 'en',
        text: 'Carlos comes across as a true linguistic and teaching enthusiast, passing his linguistic fervor to students. […] He always manages to satisfy practically every student\'s interest and answer every question, if not during the lecture, then within the mail send-offs after it. I am inspired by the versatility of his knowledge and eagerness to grow in his craft of teaching. I respect that Carlos always says directly if he cannot answer this or that question (and always extends to the question later), as well as he always leaves space for improvement in the class.',
      },
      {
        src: 'gender24',
        lang: 'en',
        pull: true,
        text: 'Before this seminar, I was 100% convinced that I would pursue a master\'s degree in literature, but now I\'m not so sure...',
      },
      {
        src: 'gender24',
        lang: 'en',
        text: 'He is very passionate about the subject and it\'s clear that he is an expert on this topic. The class is a good mixture of fun and serious. I usually don\'t like linguistics at all but this class made me a lot more curious about it, and showed me a much more interesting side of linguistics.',
      },
      {
        src: 'intro24',
        lang: 'en',
        text: 'Carlos not only explained the content of the seminar very well but also continuously mentioned that he is available for questions at any time. He acknowledged the difficulty of many of the chapters, which took off some of the stress […]. Having not known anything about linguistics, Carlos has presented this seminar in a way that excites me to write my linguistics paper and book further linguistics modules. […] Would recommend to future students :)',
      },
      {
        src: 'intro23',
        lang: 'de',
        pull: true,
        text: 'Ich komme gerne zum Unterricht, und das heisst was, weil Linguistics ist mit absoluter Sicherheit kein Thema, dem ich meine Zukunft widmen werde.',
      },
      {
        src: 'intro25',
        lang: 'de',
        text: '[…] Ich muss IntroLing machen da es zu meinem Major gehört. Bevor ich aber die Gruppe ausgewählt habe, bin ich auf der ES Webseite die Interessen der Dozierenden anschauen gegangen. Als ich they und reddit sah war ich sofort überzeugt.',
      },
      {
        src: 'intro25',
        lang: 'en',
        text: '[…] Carlos puts it in a great context and has a really good structure. He‘s also really nice and always answers to questions whether they are in class or through emails or the forum. He also seems very interested in us as students and our wellbeing',
      },
    ],
  },
  {
    id: 'atmosphaere',
    title: { de: 'Atmosphäre', en: 'Atmosphere' },
    quotes: [
      {
        src: 'gender24',
        lang: 'en',
        text: 'I really liked the atmosphere they created, it felt like an inclusive and also "safe" space. They chose interesting topics and presented them in a way that motivated me to be interested in them even if I thought they were boring before. I also really liked the inclusion of their own research, think it\'s nice when the instructor is more then just "the instructor"',
      },
      {
        src: 'gender24',
        lang: 'en',
        text: '[…] I also appreciate the down-to-earth atmosphere in the classroom - queer topics are not always easy, and there was always ample communication ahead of time and understanding for any issues students may have had.',
      },
      {
        src: 'gender24',
        lang: 'en',
        asked: 'Was my approach fair, inclusive, and accurate […]?',
        text: '100%. […] it never felt like you were being condescending/patronizing or anything like that. You seemed to be very aware of different identities in the classroom (and the teaching material) and made sure to use inclusive and respectful language.',
      },
      {
        src: 'gender24',
        lang: 'en',
        asked: 'Was my approach fair, inclusive, and accurate […]?',
        text: 'Yes and I also liked the fact that you were honest about which topics were in your area of expertise and which ones were not.',
      },
      {
        src: 'gender24',
        lang: 'en',
        text: 'Oh, I also loved the fan as a "quiet down" gesture! I hate loud noises and when people raise their voice, so thanks for that :)',
        note: {
          de: 'Der Fächer dient im Seminar als Zeichen für «bitte Ruhe».',
          en: 'The fan is the signal for “quiet, please” in the seminar.',
        },
      },
      {
        src: 'intro25',
        lang: 'en',
        text: 'The instructor was very engaging and respectful. He had a good sense of humor, which helped lighten the mood, and I personally really appreciated his peaceful teaching style (big fan of the fan).',
      },
    ],
  },
  {
    id: 'betreuung',
    title: { de: 'Betreuung & Send-off-Mails', en: 'Support & send-off emails' },
    quotes: [
      {
        // From a private email, not an evaluation: cut to the praise, no name.
        src: 'email26',
        lang: 'en',
        text: "[…] I really liked the atmosphere in class […]. What I loved most, however, were the send-off emails on OLAT. Those really made my day and helped me to stay up to date. Furthermore, I’d like to mention that your hard work in all the little OLAT subfolders really make it clear that you also enjoy teaching, as you provided us with lots and lots of information that were ( a bit overwhelming but definitely) very much appreciated. […] I simply wanted to say thank you […] for being an inspiring and cheerful instructor!",
      },
      {
        src: 'gender24',
        lang: 'en',
        text: 'Carlos was (and still is!) incredibly supportive when I needed help with literally anything at all. This is my first linguistic seminar (after IntroLing), so I am still finding my feet, and Carlos has provided much needed reassurance and guidance throughout the semester. I am confident that I will manage to write a decent seminar paper all thanks to Carlos\' help! :)',
      },
      {
        src: 'intro24',
        lang: 'en',
        text: 'What I find extremely helpful are the e-mails we receive after every session mentioning again a few important points and answering questions in a written and extensive manner so that we can be sure to have all informaiton',
      },
      {
        src: 'intro23',
        lang: 'en',
        text: 'I really like that they take questions from the students seriously and when he does not know something off the top of his head he will answer it in the send-off e-mails. I really appreciate the send-off e-mails. They are also very transparent and the seminars are always entertaining.',
      },
      {
        src: 'gender24',
        lang: 'en',
        text: 'Very available and flexible but clear in what was required from the students. There was enough leeway to make sure that the semester was adaptable to the students interests and needs whilst maintaining the focus of the topic.',
      },
      {
        src: 'intro23',
        lang: 'en',
        text: 'I really liked that you put the syllabus directly on olat. […] The syllabus was very clear in structure and it was really helpful to know exactly what was expected from us not only for the following week but also for the whole semester.',
      },
      {
        src: 'social25',
        lang: 'en',
        text: 'you listen to the concerns of students really well and try to accommodate whatever you can',
      },
    ],
  },
  {
    id: 'humor',
    title: { de: 'Humor', en: 'Humor' },
    quotes: [
      {
        src: 'intro23',
        lang: 'de',
        text: 'Lieber Carlos, ich finde deinen Unterricht wirklich sehr angenehm und kann wenig Verbesserungswünsche anbringen. Am besten gefällt mir dein Humor, der die ganzen trockenen Themen etwas auflockert. […]',
      },
      {
        src: 'intro24',
        lang: 'en',
        pull: true,
        asked: 'What other aspects concerning the instructor do you think need improvement? (Optional)',
        text: 'could throw more chocolate',
      },
      {
        src: 'gender24',
        lang: 'en',
        asked: 'What other aspects concerning the instructor do you think need improvement? (Optional)',
        text: 'Genuinely, no, nothing at all. I loved the recap emails and the humorous undertones that managed to loosen up the denser sessions - 10/10!',
      },
      {
        src: 'intro25',
        lang: 'en',
        text: 'This course has taught me many things ive needed to know. I like Carlos, I think he does a good job in teaching in a way that makes the content comprehensible. And he is funny.',
      },
      {
        src: 'intro23',
        lang: 'en',
        text: 'It is clearly visible that you have a passion for linguistics. This makes it a lot more enjoyable for students as well to come to your classes and learn. Please do keep your humorous side!',
      },
    ],
  },
  {
    id: 'arbeit',
    title: { de: 'Ausserhalb des Seminarraums', en: 'Beyond the classroom' },
    quotes: [
      {
        src: 'school',
        lang: 'de',
        pull: true,
        text: 'Super Film, Carlos cooler Typ […]',
      },
      {
        src: 'archive',
        lang: 'de',
        text: 'Mit seinem Vorwissen in Informatik konnte Carlos Hartmann die Mitarbeitenden der beiden Abteilungen von Anfang an wirkungsvoll unterstützen. Mit der Zeit entwickelte er sich zum eigentlichen Experten für elektronische Archivierung und übernahm entsprechend eine wichtige Rolle in diesem Bereich. Seine Arbeit trug sowohl bei Standardabläufen wie auch bei verschiedenen Projekten zu wesentlichen Verbesserungen und Effizienzsteigerungen bei.',
      },
      {
        src: 'archive',
        lang: 'de',
        pull: true,
        text: 'Carlos Hartmann war sowohl innovativ, was die Entwicklung neuer Lösungsmöglichkeiten und -wege anbelangte, als auch hartnäckig bei schwierigen und langwierigen Aufgaben.',
      },
      {
        src: 'archive',
        lang: 'de',
        text: 'Herr Hartmann erledigte seine Arbeiten sehr selbstständig und mit grosser Eigeninitiative. Er war jederzeit bereit, kurzfristig anberaumte Aufträge zu übernehmen, und brachte zahlreiche wertvolle Ideen ein.',
      },
      {
        src: 'cinema',
        lang: 'de',
        text: 'Wir durften Carlos während seiner Amtszeit als sehr motiviertes und kreatives Kommissionsmitglied erleben. Seine Leidenschaft für den Film und die Filmstelle waren stets spürbar. Er brachte viele Ideen ein und engagierte sich auf allen Ebenen beherzt für die Qualität des Filmprogramms sowie den offenen und freundschaftlichen Umgang im Team.',
      },
      {
        src: 'tutoring',
        lang: 'de',
        text: 'Die Tutorinnen und Tutoren haben ihren Job sehr gut gemacht: schnelle und zielgerichtete, effiziente Hilfe bei konkreten Problemen (insbesondere Python).',
      },
    ],
  },
];

export const pick = (value, lang) => (value && typeof value === 'object' ? value[lang] : value);
