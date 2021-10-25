import { wrapProperty } from '@nuxtjs/composition-api'
import { de, enGB, ru, tr } from 'date-fns/locale'
import { formatDistanceWithOptions, formatWithOptions } from 'date-fns/fp'

export const useI18n = wrapProperty('$i18n', false)
export const useSwitchLocalePath = wrapProperty('switchLocalePath', false)
export const useLocalesPriorityList = () => {
  const $i18n = useI18n()
  return [$i18n.locale, ...($i18n.fallbackLocale as string[])]
}

const DATE_FORMAT_LOCALES = {
  de,
  en: enGB,
  ru,
  tr,
}

export const useDateFormat = () => {
  const $i18n = useI18n()
  return formatWithOptions({
    locale: (DATE_FORMAT_LOCALES as any)[$i18n.locale],
  })('PP')
}

export const useDistanceFormat = () => {
  const $i18n = useI18n()
  return formatDistanceWithOptions({
    locale: (DATE_FORMAT_LOCALES as any)[$i18n.locale],
  })
}
