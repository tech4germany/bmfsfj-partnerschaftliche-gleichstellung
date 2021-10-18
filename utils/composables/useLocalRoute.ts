import { wrapProperty } from '@nuxtjs/composition-api'

export const useLocalRoute = wrapProperty('localeRoute', false)
export const useLocalLocation = wrapProperty('localeLocation', false)
