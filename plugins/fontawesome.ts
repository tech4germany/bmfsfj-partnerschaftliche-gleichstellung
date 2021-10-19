import Vue from 'vue'
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkerAlt)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
