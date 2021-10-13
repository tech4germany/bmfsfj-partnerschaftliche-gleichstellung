import Vue from 'vue'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
