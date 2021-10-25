import { unref } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'
import { useContent } from './useContent'
import { useLocalesPriorityList } from './useI18n'
import { Todo, getTodo, getTodos } from '~/utils/Todo'
import {
  useAsnycResult,
  useAsnycArrayResult,
} from '~/utils/composables/useAsnycResult'
import { useTodosStore } from '~/store/todos'

function useContentAndStore() {
  const store = useTodosStore()
  const $content = useContent()
  return { store, $content }
}

/**
 * Get a refernce to the todo based on the todoId.
 */
export const useTodo: (
  todoId: Ref<string | null> | string | null
) => Ref<Todo | null> = (todoId) => {
  const { store, $content } = useContentAndStore()
  const locales = useLocalesPriorityList()
  return useAsnycResult(() =>
    unref(todoId) != null
      ? getTodo(store, $content, unref(todoId)!, locales)
      : Promise.resolve(null)
  )
}

/**
 * Get a reference to all todos.
 */
export function useTodos(
  moduleId: Ref<string | null> | string | null = null,
  searchTerm: Ref<string | null> | string | null = null,
  assignee: Ref<string | null> | string | null = null,
  done: Ref<boolean | null> | boolean | null = null
): Ref<Todo[]> {
  const { store, $content } = useContentAndStore()
  const locales = useLocalesPriorityList()
  return useAsnycArrayResult(async () => {
    const where = unref(moduleId)
      ? {
          modules: {
            $contains: unref(moduleId),
          },
        }
      : {}

    const todos = await getTodos(
      store,
      $content,
      where,
      unref(searchTerm),
      locales
    )

    return todos
      .filter(
        (todo) =>
          unref(assignee) == null || todo.assignees[unref(assignee)!] === true
      )
      .filter(
        (todo) =>
          unref(done) == null ||
          (unref(done) && todo.finished) ||
          (!unref(done) && !todo.finished)
      )
  })
}
