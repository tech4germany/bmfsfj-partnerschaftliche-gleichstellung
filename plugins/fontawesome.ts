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
  faGlassCheers,
  faExternalLinkAlt,
  faBrain,
  faPuzzlePiece,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEuroSign) // Modul: Geld
library.add(faBriefcase) // Modul: Beruf
library.add(faPaste) // Modul: Behörden & Dokumente

library.add(faMapMarkedAlt) // Ort
library.add(faCalendarAlt) // Gesetzliche Frist
library.add(faCalendarCheck) // Empfohlene Frist
library.add(faCalendarTimes) // Frist verpasst
library.add(faExclamation) // Stolperfalle
library.add(faInfoCircle) // Info
library.add(faGlassCheers) // Tipp Partnerschaftlichkeit
library.add(faExternalLinkAlt) // Weiterführende Infos (Links)
library.add(faBrain) // Interessanter Fakt
library.add(faPuzzlePiece) // Beispiele
library.add(faLightbulb) // Insider Tipp


config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
