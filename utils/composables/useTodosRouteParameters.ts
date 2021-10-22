import { useRoute, computed, unref } from '@nuxtjs/composition-api'
import { TodoQueryParameters } from '../TodoQueryParameters'

function useTodosRouteQueryParameters() {
  const $route = useRoute()

  return computed(() => $route.value.query as Partial<TodoQueryParameters>)
}

export function useTodosRouteParameters() {
  const queryParameters = useTodosRouteQueryParameters()

  const search = computed(() => unref(queryParameters).search?.toString() ?? '')
  const module = computed(
    () => unref(queryParameters).module?.toString() ?? null
  )
  const user = computed(() => unref(queryParameters).user?.toString() ?? null)
  const done = computed(() => unref(queryParameters).done != null)

  return {
    search,
    module,
    user,
    done,
  }
}
