import { DeepPartial } from "~/utils/DeepPartial"

const translations = {
  toolName: 'StartApp Familie',
  yes: 'Ja',
  no: 'Nein',
  search: 'Suche',
  intro: {
    welcome: 'Willkommen bei',
    introduction:
      'Wir freuen uns, Dich auf dem spannenden Weg in dieser Lebensphase begleiten zu dürfen!',
    title: 'Einführung',
    'skip-question': 'Frage überspringen',
    'continue-without-personalization': 'Ohne Personalisierung fortfahren',
    note: {
      title: 'Hinweis',
      start: 'Und los!',
    },
    name: {
      question: 'Wie sollen wir Dich nennen?',
      placeholder: 'Name',
    },
    relationship: {
      question: 'Lebst Du in einer Partnerschaft?',
    },
    namePartner: {
      question: 'Mit wem lebst Du gemeinsam in einer Partnerschaft?',
      placeholder: 'Name',
    },
    work: {
      question: 'Wie ist Deine berufliche Situation?',
    },
    baby: {
      question: 'Erwartet Ihr ein Kind?',
    },
    birthday: {
      question: 'Wann ist der errechnete Geburtstermin?',
      placeholder: 'Geburtstag',
    },
    language: {
      question: 'Wie verstehst Du uns am besten?',
    },
    married: {
      question:
        'Seid Ihr verheiratet oder lebt in einer eingetragenen Partnerschaft?',
    },
    healthInsurance: {
      question: 'Wie bist Du krankenversichert?',
    },
    finished: {
      title: 'Jetzt kann es losgehen!',
    },
  },
  timeline: {
    'this-week': 'Empfohlen für diese Woche',
    'next-week': 'Empfohlen für die nächste Woche',
    'this-month': 'Empfohlen für diesen Monat',
    'next-month': 'Empfohlen für den nächsten Monat',
    later: 'Später',
  },
  todos: {
    filter: {
      module: 'Modul',
      assignee: 'Zuständig',
      done: 'Erledigt',
    },
  },
  healthInsurance: {
    GESETZLICH: 'Gesetzlich',
    GESETZLICH_FAMILIENVERSICHERT: 'Gesetzlich Familienversichert',
    PRIVAT: 'Privat',
  },
  work: {
    ANGESTELLT: 'angestellt',
    SELBSTSTÄNDIG: 'selbstständig',
    ARBEITSSUCHEND: 'arbeitssuchend',
    IN_AUSBILDUNG: 'in Ausbildung',
    VERBEAMTET: 'verbeamtet',
  },
  baby: {
    NOT_PLANED: 'Nein',
    WISH: 'Noch nicht',
    EXPECTED: 'Ja',
    MULTIPLE: 'Ja, sogar mehr als eins',
  },
  assignees: {
    'no-users':
      'Ohne dass Du uns verrätst, wie Du heißt, kannst Du leider keine Aufgaben zuweisen 😢',
  },
  welcome: 'Willkommen',
  modules: {
    geld: 'Geld',
    beruf: 'Beruf',
    behoerden: 'Anträge & Papiere',
    private: 'Persönliches',
  },
}

export default translations
export type translation = DeepPartial<typeof translations>
