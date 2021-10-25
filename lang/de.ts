import { DeepPartial } from "~/utils/DeepPartial"

const translations = {
  yes: 'Ja',
  no: 'Nein',
  search: 'Suche',
  intro: {
    title: 'Einführung',
    welcome: 'Willkommen bei der StartApp Familie',
    'skip-question': 'Frage überspringen',
    'continue-without-personalization': 'Ohne Personalisierung fortfahren',
    note: {
      title: 'Hinweis',
      start: 'Und los!',
    },
    name: {
      question:
        'Trage hier deinen Namen ein, damir wir dich direkt ansprechen können.',
      placeholder: 'Name',
    },
    relationship: {
      question: 'Lebst Du in einer Partnerschaft?',
    },
    namePartner: {
      question:
        'Trage hier den Namen deines Partners oder deiner Partnerin ein, damit Inhalte gegebenenfalls unter euch aufgeteilt werden können.',
      placeholder: 'Name',
    },
    work: {
      question: 'Wie ist deine berufliche Situation?',
    },
    language: {
      question: 'Wie verstehst du uns am besten? Bitte wählen!',
    },
    married: {
      question:
        'Seid ihr verheiratet oder lebt in einer eingetragenen Partnerschaft?',
    },
    healthInsurance: {
      question: 'Wie bist du krankenversichert?',
    },
    baby: {
      question: 'Erwartet ihr ein Kind?',
    },
    birthday: {
      question:
        'Wenn euch der Geburtstermin eures Kindes bekannt ist oder ihn bereits ausgerechnet habt, tragt diesen bitte hier ein:',
      placeholder: 'Geburtstag',
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
