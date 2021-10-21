import { wrapProperty, unref, Ref } from '@nuxtjs/composition-api'
import { useAsnycResult } from '~/utils/composables/useAsnycResult'

export const useContent = wrapProperty('$content', false)

export const usePageContent = (page: Ref<string> | string) => {
  const $content = useContent()

  return useAsnycResult(() => $content(unref(page)).fetch<{ title: string }>())
}