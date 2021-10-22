import { DeepPartial } from "~/utils/DeepPartial"

const translations = {
  yes: 'Ja',
  no: 'Nein',
  search: 'Suche',
  intro: {
    title: 'Einführung',
    'skip-question': 'Frage überspringen',
    note: {
      title: 'Hinweis',
    },
    name: {
      placeholder: 'Name',
    },
    namePartner: {
      placeholder: 'Name',
    },
    work: {
      question: 'Wie ist deine berufliche Situation?',
    },
    language: {
      question: 'Wie verstehst du uns am besten? Bitte wählen!',
    },
    married: {
      question: 'Bist du verheiratet?',
    },
    healthInsurance: {
      question: 'Wie bist du krankenversichert?',
    },
    birthday: {
      placeholder: 'Geburtstag',
    },
    finished: {
      title: 'Geschafft!',
    },
  },
  todos: {
    filter: {
      module: 'Modul',
      assingee: 'Zuständig',
      done: 'Erledigt',
    },
  },
  healthInsurance: {
    GESETZLICH: 'Gesetzlich',
    GESETZLICH_FAMILIENVERSICHERT: 'Gesetzlich Familienversichert',
    PRIVAT: 'Privat',
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
