import { DeepPartial } from "~/utils/DeepPartial"

const translations = {
  yes: 'Ja',
  no: 'Nein',
  search: 'Suche',
  intro: {
    welcome: 'Willkommen in der StartApp Familie',
    introduction: 'Wir freuen uns, dich auf dem spannenden Weg in dieser Lebensphase begleiten zu dürfen!',
    title: 'Einführung',
    'skip-question': 'Frage überspringen',
    'continue-without-personalization': 'Ohne Personalisierung fortfahren',
    note: {
      title: 'Hinweis',
      start: 'Und los!',
    },
    name: {
      question: 'Wie sollen wir dich nennen?',
      placeholder: 'Name',
    },
    relationship: {
      question: 'Lebst du in einer Partnerschaft?'
    },
    namePartner: {
      question: 'Mit wem lebst du gemeinsam in einer Partnerschaft?',
      placeholder: 'Name',
    },
    work: {
      question: 'Wie ist deine berufliche Situation?',
    },
    baby: {
      question: 'Erwartet ihr ein Kind?',
    },
    birthday: {
      question: 'Wann ist der errechnete Geburtstermin?',
      placeholder: 'Geburtstag',
    },
    language: {
      question: 'Wie verstehst du uns am besten?',
    },
    married: {
      question:
        'Seid ihr verheiratet oder lebt in einer eingetragenen Partnerschaft?',
    },
    healthInsurance: {
      question: 'Wie bist du krankenversichert?',
    },
    finished: {
      title: 'Jetzt kann es losgehen!',
    },
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
    ANGESTELLT: 'Angestellt',
    SELBSTSTÄNDIG: 'Selbstständig',
    ARBEITSSUCHEND: 'Arbeitssuchend',
    IN_AUSBILDUNG: 'In Ausbildung',
  },
  baby: {
    NOT_PLANED: 'Nein',
    WISH: 'Noch nicht',
    EXPECTED: 'Ja',
    MULTIPLE: 'Ja, sogar mehr als eins',

  },
  welcome: 'Willkommen',
  modules: {
    geld: 'Geld',
    beruf: 'Beruf',
    behoerden: 'Behörden & Papiere',
    private: 'Persönliches',
  },
}

export default translations
export type translation = DeepPartial<typeof translations>
