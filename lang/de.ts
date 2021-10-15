import { DeepPartial } from "~/utils/DeepPartial"

const translations = {
  yes: 'Ja',
  no: 'Nein',
  intro: {
    married: {
      question: 'Bist du verheiratet?'
    },
    healthInsurance: {
      question: 'Wie bist du krankenversichert?'
    }
  },
  healthInsurance: {
    GESETZLICH: 'Gesetzlich',
    GESETZLICH_FAMILIENVERSICHERT: 'Gesetzlich Familienversichert',
    PRIVAT: 'Privat'
  },
  welcome: 'Willkommen',
  modules: {
    geld: 'Geld',
    beruf: 'Beruf',
    behoerden: 'Behörden & Papiere',
    gesundheit: 'Gesundheit'
  }
}

export default translations
export type translation = DeepPartial<typeof translations>
