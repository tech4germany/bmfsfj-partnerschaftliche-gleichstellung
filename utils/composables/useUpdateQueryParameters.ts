import { useRoute, useRouter, unref } from '@nuxtjs/composition-api'
import { TodoQueryParameters } from '../TodoQueryParameters'
import { useLocalLocation } from './useLocalRoute'

export function useUpdateQueryParameters(): (
  query: Partial<TodoQueryParameters>
) => void {
  const $router = useRouter()
  const $route = useRoute()
  const localLocation = useLocalLocation()

  return (query) => {
    const location = localLocation({
      query: {
        ...unref($route).query,
        ...query,
      },
    })

    if (location != null) {
      $router.push(location)
    }
  }
}
