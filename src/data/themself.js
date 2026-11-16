// "themselves or themself?": an explainer built on the article
// "Singular they Becoming even more Singular: The themselves/themself
// Variation on Reddit" (Applied Corpus Linguistics 6(2), 2026).
//
// Every figure here is taken from the article. Do not round or change one
// without checking it against the article's tables:
//   ratio     Table 1, themself per 100 themselves
//   share     Table 4, estimated share of themself by what it refers to
//   recent    Table 5, specific singular, most recent data
// Group order everywhere: declarers, neighbours (Baseline 1), rest (Baseline 2).

export const figures = {
  ratio: [7.08, 9.29, 1.91],
  share: {
    plural: [1, 4, 1],
    generic: [17, 11, 5],
    specific: [38, 24, 14],
  },
  recent: { all: 33.3, theyOnly: 35 },
  article: 'https://doi.org/10.1016/j.acorp.2026.100199',
  dataset: 'https://doi.org/10.48656/4xzy-gc80',
};

// Reddit comments quoted in the article (from the study's dataset).
export const quotes = {
  // The gap sentence. In the original the writer used both forms in a row.
  gap: ['There is nothing you can say that they haven\'t already said to ', '.'],
  gapFull: 'I\'m sure OP has beaten themselves up. There is nothing you can say that they haven\'t already said to themself.',
  voice: 'In order to reinforce the fact that the pronoun is being used in its singular (not plural) meaning, the enby folks that I know prefer to say "themself" rather than "themselves"',
  generic: 'You were probably someone who called themselves an anarchist.',
  specific: '[…] consider the possibility that your partner hadn\'t fully admitted their feelings to themselves prior to this.',
};

export const copy = {
  de: {
    kicker: 'Aus meiner Forschung',
    title: '<em>themselves</em> oder <em>themself</em>?',
    lede: 'Wer mit <em>they</em> von einer einzelnen Person spricht, braucht früher oder später das Reflexivpronomen dazu. Die Grammatiken kennen nur <em>themselves</em>. Auf Reddit schreiben manche <em>themself</em>. Wer das tut, wann und wie oft, habe ich in einem Artikel untersucht.',
    groups: ['Leute, die ihre Pronomen angeben', 'Ihre Nachbarschaft in denselben Communities', 'Das übrige Reddit'],
    first: 'Zuerst du',
    gapContext: 'Aus einem Reddit-Kommentar. Gemeint ist «OP», die Person, die den Beitrag geschrieben hat: ein bestimmter einzelner Mensch.',
    gapAsk: 'Was gehört in die Lücke?',
    solution: 'Auflösung',
    youChose: 'Du hast dich entschieden für:',
    noWrong: 'Richtig oder falsch gibt es hier nicht. Im Original steht <em>themself</em>, und zwar gleich nach einem <em>themselves</em>:',
    bothForms: 'Dieselbe Person, zwei Sätze, beide Formen.',
    others: 'So entscheiden andere, wenn eine bestimmte einzelne Person gemeint ist (geschätzter Anteil <em>themself</em>):',
    sections: {
      what: {
        title: 'Worum es geht',
        text: [
          'Bei <em>you</em> zeigt erst das Reflexiv, ob eine oder mehrere Personen gemeint sind: <em>yourself</em>, <em>yourselves</em>. Bei <em>they</em> gab es diese Unterscheidung lange nicht. <em>Themself</em> ist vom 14. bis ins späte 16. Jahrhundert als Pluralform belegt und taucht in den 1970er-Jahren wieder auf, nun für die Einzahl.',
          'Lange galt die Form als Fehler. Erforscht wurde sie bisher fast nur mit Akzeptanzurteilen: Leute lesen einen Satz und sagen, ob er für sie geht. Was Menschen von sich aus schreiben, war kaum bekannt.',
        ],
        voiceSource: 'Reddit-Kommentar aus dem Datensatz, 2021 («enby» steht für «non-binary»)',
      },
      data: {
        title: 'Die Daten',
        text: [
          'Über drei Millionen Reddit-Kommentare aus den Jahren 2012 bis 2021 von Leuten, die ihre Pronomen neben dem Benutzernamen angeben. Wer das tut, achtet erkennbar auf Pronomen. Verglichen habe ich sie mit zwei Gruppen: mit Leuten, die in denselben Communities schreiben, ohne Pronomen anzugeben, und mit einer Zufallsstichprobe aus dem übrigen Reddit.',
          'Für jede Gruppe habe ich von beiden Formen bis zu 200 Belege von Hand danach sortiert, worauf sie sich beziehen, und daraus hochgerechnet.',
        ],
      },
      results: {
        title: 'Was herauskam',
        rare: '<em>Themself</em> ist selten, aber nicht überall gleich selten.',
        rareCaption: 'Auf 100 <em>themselves</em> kommen so viele <em>themself</em> (Balken: 0 bis 10)',
        rareText: 'Die beiden pronomenbewussten Gruppen unterscheiden sich statistisch nicht voneinander. Beide liegen aber klar über dem übrigen Reddit: Dort ist <em>themself</em> im Verhältnis fast viermal seltener.',
        depends: 'Es kommt darauf an, wer gemeint ist.',
        dependsCaption: 'Geschätzter Anteil <em>themself</em> an allen Reflexiven von <em>they</em> (Balken: 0 bis 100 %)',
        kinds: {
          plural: { label: 'Mehrere', note: 'eine Gruppe, mehrere Personen' },
          generic: { label: 'Irgendwer', note: 'eine beliebige Person, zum Beispiel:' },
          specific: { label: 'Eine bestimmte Person', note: 'ein einzelner Mensch, zum Beispiel:' },
        },
        dependsText: 'Je bestimmter die Person, desto häufiger <em>themself</em>. Zwischen «irgendwer» und «eine bestimmte Person» liegt mehr als das Doppelte. Es zählt also nicht nur die Zahl, sondern auch, ob jemand Bestimmtes gemeint ist. In der Forschung werden die beiden Fälle oft nicht getrennt; die Daten sprechen dafür, es zu tun.',
        still: 'Trotzdem bleibt <em>themselves</em> überall die häufigere Form.',
        stillText: 'Selbst in den jüngsten Kommentaren und bei Leuten, die für sich ausschliesslich <em>they/them</em> angeben, steht bei einer bestimmten Person nur in rund einem Drittel der Fälle <em>themself</em> (33,3 % und 35 %).',
        rising: 'Der Gebrauch nimmt zu.',
        risingText: 'Seit 2018 steigt der Anteil von <em>themself</em> in allen drei Gruppen: schwach, aber messbar.',
      },
      why: {
        title: 'Warum das zählt',
        text: [
          'Die meisten Autokorrekturen ersetzen <em>themself</em> ungefragt durch <em>themselves</em>, vor allem auf dem Handy. Dass die Form trotzdem so oft stehen bleibt, heisst: Menschen wählen sie mit Absicht.',
          '<em>Themself</em> ist kein Grammatikfehler, sondern ein neues Mittel, Geschlechtsneutralität zu markieren. Stilratgeber und Sprachsoftware täten gut daran, es als Variante gelten zu lassen.',
          'Und eine Ironie zum Schluss: Setzt sich die Unterscheidung durch, bekommt ausgerechnet das nicht-binäre Pronomen eine binäre Form.',
        ],
      },
      more: {
        title: 'Zum Nachlesen',
        article: 'Der Artikel in Applied Corpus Linguistics',
        dataset: 'Der Datensatz: Reddit FlairShare',
        quiz: 'Weiter ausprobieren: Wer ist <em>they</em>?',
        note: 'Alle Zahlen stammen aus dem Artikel. Die Anteile nach Bezug sind Hochrechnungen aus Stichproben, keine Zählungen.',
      },
    },
  },
  en: {
    kicker: 'From my research',
    title: '<em>themselves</em> or <em>themself</em>?',
    lede: 'Anyone who uses <em>they</em> for a single person will sooner or later need the reflexive that goes with it. The grammar books only know <em>themselves</em>. On Reddit, some people write <em>themself</em>. I studied who does, when, and how often.',
    groups: ['People who declare their pronouns', 'Their neighbours in the same communities', 'The rest of Reddit'],
    first: 'You first',
    gapContext: 'From a Reddit comment. It is about “OP”, the person who wrote the post: one specific individual.',
    gapAsk: 'What goes in the gap?',
    solution: 'Solution',
    youChose: 'You chose:',
    noWrong: 'There is no right or wrong here. The original has <em>themself</em>, and that right after a <em>themselves</em>:',
    bothForms: 'The same person, two sentences, both forms.',
    others: 'This is how others decide when one specific person is meant (estimated share of <em>themself</em>):',
    sections: {
      what: {
        title: 'What this is about',
        text: [
          'With <em>you</em>, only the reflexive shows whether one person or several are meant: <em>yourself</em>, <em>yourselves</em>. For a long time <em>they</em> had no such distinction. <em>Themself</em> is attested as a plural form from the 14th to the late 16th century and reappears in the 1970s, now for the singular.',
          'For a long time the form counted as a mistake. It has been studied almost only through acceptability judgments: people read a sentence and say whether it works for them. What people write of their own accord was hardly known.',
        ],
        voiceSource: 'Reddit comment from the dataset, 2021 (“enby” stands for “non-binary”)',
      },
      data: {
        title: 'The data',
        text: [
          'More than three million Reddit comments from 2012 to 2021 by people who display their pronouns next to their user name. Whoever does that visibly pays attention to pronouns. I compared them with two groups: people who write in the same communities without declaring pronouns, and a random sample from the rest of Reddit.',
          'For each group I sorted up to 200 instances of both forms by hand according to what they refer to, and extrapolated from there.',
        ],
      },
      results: {
        title: 'What came out',
        rare: '<em>Themself</em> is rare, but not equally rare everywhere.',
        rareCaption: 'For every 100 <em>themselves</em> there are this many <em>themself</em> (bars: 0 to 10)',
        rareText: 'The two pronoun-aware groups do not differ statistically from each other. Both are clearly above the rest of Reddit, where <em>themself</em> is, in proportion, almost four times rarer.',
        depends: 'It depends on who is meant.',
        dependsCaption: 'Estimated share of <em>themself</em> among all reflexives of <em>they</em> (bars: 0 to 100%)',
        kinds: {
          plural: { label: 'Several', note: 'a group, several people' },
          generic: { label: 'Anyone', note: 'no one in particular, for example:' },
          specific: { label: 'One specific person', note: 'a single individual, for example:' },
        },
        dependsText: 'The more specific the person, the more frequent <em>themself</em>. Between “anyone” and “one specific person” the share more than doubles. So it is not only number that counts but also whether someone in particular is meant. Research often does not separate the two cases; the data suggest it should.',
        still: 'Even so, <em>themselves</em> remains the more common form everywhere.',
        stillText: 'Even in the most recent comments, and among people who declare only <em>they/them</em> for themselves, <em>themself</em> appears in only about a third of the cases with a specific person (33.3% and 35%).',
        rising: 'Its use is growing.',
        risingText: 'Since 2018 the share of <em>themself</em> has been rising in all three groups: faintly, but measurably.',
      },
      why: {
        title: 'Why it matters',
        text: [
          'Most autocorrect tools replace <em>themself</em> with <em>themselves</em> without asking, especially on phones. That the form survives so often anyway means people choose it on purpose.',
          '<em>Themself</em> is not a grammatical error but a new means of marking gender neutrality. Style guides and language software would do well to accept it as a variant.',
          'And an irony to end on: if the distinction takes hold, it is the non-binary pronoun, of all things, that gets a binary form.',
        ],
      },
      more: {
        title: 'Read more',
        article: 'The article in Applied Corpus Linguistics',
        dataset: 'The dataset: Reddit FlairShare',
        quiz: 'Keep trying: who is <em>they</em>?',
        note: 'All figures come from the article. The shares by reference are extrapolations from samples, not counts.',
      },
    },
  },
};
