import Vue from 'vue'
import { config , library } from '@fortawesome/fontawesome-svg-core'
import {
  faEuroSign,
  faBriefcase,
  faPaste,
  faMapMarkedAlt,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarTimes,
  faExclamation,
  faInfoCircle,
  faExternalLinkAlt,
  faBrain,
  faPuzzlePiece,
  faLightbulb,
  faIdBadge,
  faQuestion,
  faHandsHelping,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInfoCircle) // More Info icon for into

library.add(faQuestion) // Fallback icon for modules
library.add(faEuroSign) // Modul: Geld
library.add(faBriefcase) // Modul: Beruf
library.add(faPaste) // Modul: Behörden & Dokumente
library.add(faIdBadge) // Modul: Persönliches

library.add(faMapMarkedAlt) // Ort
library.add(faCalendarAlt) // Gesetzliche Frist
library.add(faCalendarCheck) // Empfohlene Frist
library.add(faCalendarTimes) // Frist verpasst
library.add(faExclamation) // Stolperfalle
library.add(faHandsHelping) // Tipp Partnerschaftlichkeit
library.add(faExternalLinkAlt) // Weiterführende Infos (Links)
library.add(faBrain) // Interessanter Fakt
library.add(faPuzzlePiece) // Beispiele
library.add(faUser) // Wer
library.add(faLightbulb) // Insider Tipp

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
