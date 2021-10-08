import { useAsync, wrapProperty } from '@nuxtjs/composition-api'

export const useContent = wrapProperty('$content', false)

export const usePageContent = (page: string) => {
  const $content = useContent();

  return useAsync(() => $content(page).fetch<{title: string}>())
}
