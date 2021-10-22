import { wrapProperty } from '@nuxtjs/composition-api'

export const useI18n = wrapProperty('$i18n', false)
export const useSwitchLocalePath = wrapProperty('switchLocalePath', false)
