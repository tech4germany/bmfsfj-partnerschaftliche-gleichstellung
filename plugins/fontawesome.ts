import Vue from 'vue'
import { config , library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkerAlt,
  faEuroSign,
  faBriefcase,
  faPaste,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkerAlt)
library.add(faEuroSign)
library.add(faBriefcase)
library.add(faPaste)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
