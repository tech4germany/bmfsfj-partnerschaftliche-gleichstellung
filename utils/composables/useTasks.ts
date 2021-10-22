import { unref } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'
import { useContent } from './useContent'
import { Task, getTask, getTasks } from '~/utils/Task'
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
 * Get a refernce to the task based on the taskId.
 */
export const useTask: (taskId: Ref<string> | string) => Ref<Task | null> = (
  taskId
) => {
  const { store, $content } = useContentAndStore()
  return useAsnycResult(() => getTask(store, $content, unref(taskId)))
}

/**
 * Get a reference to all tasks.
 */
export function useTasks(
  moduleId: Ref<string> | string | null = null,
  searchTerm: Ref<string | null> | string | null = null,
  assignee: Ref<string | null> | string | null = null,
  done: Ref<boolean | null> | boolean | null = null
): Ref<Task[]> {
  const { store, $content } = useContentAndStore()
  return useAsnycArrayResult(async () => {
    const where = unref(moduleId)
      ? {
          modules: {
            $contains: unref(moduleId),
          },
        }
      : {}

    const tasks = await getTasks(store, $content, where, unref(searchTerm))

    return tasks
      .filter(
        (task) =>
          unref(assignee) == null || task.assignees[unref(assignee)!] === true
      )
      .filter((task) => unref(done) == null || !unref(done) || task.finished)
  })
}
