import { contentFunc } from '@nuxt/content/types/content'
import { wrapProperty, unref, Ref } from '@nuxtjs/composition-api'
import { useI18n } from './useI18n'
import { useAsnycResult } from '~/utils/composables/useAsnycResult'

export const useContent = wrapProperty('$content', false)

export const usePageContent = (page: Ref<string> | string) => {
  const $content = useContent()
  const $i18n = useI18n()

  return useAsnycResult(() =>
    getMatchingPageVariant($content, unref(page), [
      $i18n.locale,
      ...($i18n.fallbackLocale as string[]),
    ])
  )
}

const getMatchingPageVariant = async (
  $content: contentFunc,
  page: string,
  localesToTry: string[]
) => {
  for (const locale of localesToTry) {
    try {
      const content = await $content(`${locale}/${page}`).fetch<{
        title: string
      }>()

      if (content) {
        return content
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(`No translation for ${page} in ${locale}.`)
    }
  }

  throw new Error(
    `Page not found in any fitting translation: ${page}, tried locales: ${localesToTry}`
  )
}
