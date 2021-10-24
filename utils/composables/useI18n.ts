import { wrapProperty } from '@nuxtjs/composition-api'

export const useI18n = wrapProperty('$i18n', false)
export const useSwitchLocalePath = wrapProperty('switchLocalePath', false)
export const useLocalesPriorityList = () => {
  const $i18n = useI18n()
  return [$i18n.locale, ...($i18n.fallbackLocale as string[])]
}
