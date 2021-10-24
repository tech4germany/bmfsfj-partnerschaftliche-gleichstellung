import { wrapProperty, unref, Ref } from '@nuxtjs/composition-api'
import { getMatchingLanguageVariant } from '../content/getMatchingPageVariant'
import { useLocalesPriorityList } from './useI18n'
import { useAsnycResult } from '~/utils/composables/useAsnycResult'

export const useContent = wrapProperty('$content', false)

export const usePageContent = (page: Ref<string> | string) => {
  const $content = useContent()
  const locales = useLocalesPriorityList()

  return useAsnycResult(() =>
    getMatchingLanguageVariant(
      (page) =>
        $content(page).fetch<{
          title: string
        }>(),
      unref(page),
      locales
    )
  )
}
