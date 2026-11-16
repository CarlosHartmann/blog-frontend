// "Who is they?" Ten texts from the annotation study behind the article
// "Who is the Pronoun Pro?" (arXiv:2611.04968), all of them cases where the
// surrounding thread decides the answer.
//
// The texts are Reddit comments from the study's dataset, verbatim except for
// cuts marked […]. User names are left out. The answer of each item is the
// study's gold label; the explanations are written for this page.
//
// answer: 'plural' | 'generic' | 'singular'
// thread: what came before the comment (post title, earlier replies)
// target: [text before, the pronoun, text after]

export const figures = {
  texts: 174,
  humans: 73,
  bestModel: 94.5,
  humanMajority: 86.2,
  humanTopHalf: 78.5,
  paper: 'https://arxiv.org/abs/2611.04968',
};

export const choices = {
  plural: { de: 'Mehrere', en: 'Several', hintDe: 'eine Gruppe, mehrere Personen oder Dinge', hintEn: 'a group, several people or things', term: 'plural they' },
  generic: { de: 'Irgendwer', en: 'Anyone', hintDe: 'eine einzelne, aber beliebige oder gedachte Person', hintEn: 'one person, but no one in particular', term: 'generic they' },
  singular: { de: 'Eine bestimmte Person', en: 'One specific person', hintDe: 'ein ganz bestimmter Mensch (oder eine Figur)', hintEn: 'one particular individual (or character)', term: 'singular they' },
};

export const items = [
  {
    sub: 'r/science',
    thread: ['Scientists present new evidence that great apes possess the “theory of mind,” which means they can attribute mental states to themselves and others, and also understand that others may believe different information than they do.'],
    target: ['', 'They', ' have never been observed asking questions in any context, in the wild or captivity.'],
    answer: 'plural',
    why: {
      de: 'Gemeint sind die Menschenaffen aus dem Titel, also mehrere. Ohne den Titel wüsste man es nicht.',
      en: 'It refers to the great apes in the title, so several. Without the title you could not tell.',
    },
  },
  {
    sub: 'r/australia',
    thread: ['Going to the dunny in Australia [video]'],
    target: ['When your SO complains about you leaving the toilet seat up you show ', 'them', ' this video and explain you do it only for their safety.'],
    answer: 'generic',
    why: {
      de: '«Your SO» ist die Partnerin oder der Partner von wem auch immer, der das liest: eine einzelne, aber beliebige Person.',
      en: '“Your SO” is the partner of whoever happens to be reading: one person, but no one in particular.',
    },
  },
  {
    sub: 'r/Komi_san',
    thread: ['Chapter 306 English (CatManga)'],
    target: ['I knew there would be blood....lust, but I like how the initial hurdle was the futile attempt to keep it Najimi who probably couldn\'t keep a secret if ', 'their', ' life depended on it. […]'],
    answer: 'singular',
    why: {
      de: 'Najimi ist eine bestimmte Figur des Mangas, deren Geschlecht dort offen bleibt. Das ist singulares <em>they</em> für jemanden, den man beim Namen kennt.',
      en: 'Najimi is one particular character in the manga, whose gender is left open there. This is singular <em>they</em> for someone known by name.',
    },
  },
  {
    sub: 'r/CODWarzone',
    thread: ['Plunder is the best game mode in COD and is super underrated'],
    target: ['I don\'t think ', 'they', ' could\'ve made a worse game mode if they tried. But if you like it good for you.'],
    answer: 'plural',
    why: {
      de: 'Die Leute, die das Spiel entwickelt haben: eine Firma, ein Team. Dieses institutionelle <em>they</em> zählt als plural.',
      en: 'The people who made the game: a company, a team. This institutional <em>they</em> counts as plural.',
    },
  },
  {
    sub: 'r/AskReddit',
    thread: ['What if you marry someone who looks like you in every behaviour detail , can you live with for whole life ?'],
    target: ['As long as ', 'they', ' Don\'t look like me physically I\'d like them probably'],
    answer: 'generic',
    why: {
      de: 'Eine gedachte Person, das «someone» aus der Frage. Es gibt sie nicht, also ist sie auch niemand Bestimmtes.',
      en: 'A hypothetical person, the “someone” from the question. They do not exist, so they are no one in particular.',
    },
  },
  {
    sub: 'r/crafts',
    thread: ['Please help me find! Saw this being used in a craft video, but the creator was Korean and linked the product to a Korean shop and the shop just called it "6 types of powder" when translated. The creator only said it was powder that looks like wood'],
    target: ['You should describe what it was used for/what ', 'they', ' were doing with it, or what you want to do with it, to help narrow it down.'],
    answer: 'singular',
    why: {
      de: 'Die Person, die das Bastelvideo gemacht hat: genau eine, und es gibt sie wirklich. Nur weiss im Thread niemand, ob Frau oder Mann.',
      en: 'The creator of the craft video: exactly one real person. It is just that nobody in the thread knows their gender.',
    },
  },
  {
    sub: 'r/chch',
    thread: ['For Queens Birthday - these are the Monarchs of Woodham Park [image]'],
    target: ['Wow ', 'they', ' are stunning. What kind of tree is it?'],
    answer: 'plural',
    why: {
      de: 'Die «Monarchs» auf dem Bild, der Frage nach dem Baum zufolge Monarchfalter: viele Tiere, also plural.',
      en: 'The “Monarchs” in the picture, monarch butterflies to judge by the question about the tree: many animals, so plural.',
    },
  },
  {
    sub: 'r/britishproblems',
    thread: ['Charity rep came to the door, told them I don\'t have time to talk as I WFH. They replied "well I\'m busy too mate".'],
    target: ['My standard response is the same as my mum’s: I don’t donate at the door. I tell ', 'them', ' I’ll look up the website to donate and shut the door.'],
    answer: 'generic',
    why: {
      de: 'Der Titel erzählt von einem bestimmten Spendensammler. Die Antwort beschreibt aber eine Gewohnheit: gemeint ist, wer auch immer vor der Tür steht.',
      en: 'The title is about one particular charity rep. The reply, however, describes a habit: it means whoever turns up at the door.',
    },
  },
  {
    sub: 'r/britishproblems',
    thread: [
      'Most people in the office are warm enough. One person isn’t. So the heating gets cranked up',
      'Conversation usually goes like this: “Ooh, I’m cold! Is anyone else cold?” “No, I’m fine” “Yeah, I’m warm enough” “Does anyone mind if I turn the heating up?” — Proceeds to turn heating up. […]',
    ],
    target: ['Why can\'t the cold worker put on another layer or maybe even use a hot water bottle on ', 'their', ' lap or something? That seems like it would be a fairer situation.'],
    answer: 'singular',
    why: {
      de: '«The cold worker» klingt allgemein, meint aber die eine Person aus dem Büro, von der der Beitrag erzählt: jemand Bestimmtes, dessen Geschlecht nicht genannt wird.',
      en: '“The cold worker” sounds general but means the one person in the office the post is about: someone specific whose gender is not given.',
    },
  },
  {
    sub: 'r/AnimalsBeingJerks',
    thread: [
      'This is mine!!!',
      '[…] owners that let their animals show aggression like this. It\'s not cute, it\'s not funny, and it\'s not to be rewarded.',
      'If someone dragged your bed with you in it, and then dumped you out of it, you\'d have no negative emotions to show for that?',
    ],
    target: ['Correct. The person who put them in this situation is to blame, as ', 'they', ' stated.'],
    answer: 'singular',
    why: {
      de: '«As they stated» meint die Person, die zwei Kommentare weiter oben geschrieben hat: jemand Bestimmtes, von dem man nur den Benutzernamen kennt.',
      en: '“As they stated” means the person who wrote the comment two replies up: someone specific, known only by a user name.',
    },
  },
];
