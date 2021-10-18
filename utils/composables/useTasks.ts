import { unref } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'
import { useContent } from './useContent'
import {
  Task,
  TaskPageContent,
  getTaskDirectory,
  getTask,
  getTaskPageContent,
  getTasks,
} from '~/utils/Task'
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
 * Get a refernce to the directory the file of the task is placed in.
 */
export const useTaskDirectory: (
  taskId: Ref<string> | string
) => Ref<string | null> = (taskId) => {
  const $content = useContent()
  return useAsnycResult(() => getTaskDirectory($content, unref(taskId)))
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
 * Get a reference to the the content of a task page.
 */
export const useTaskPageContent: (
  taskId: Ref<string>,
  page: Ref<string>
) => Ref<TaskPageContent | null> = (taskId, page) => {
  const $content = useContent()
  const taskDirectory = useTaskDirectory(taskId)

  return useAsnycResult(async () => {
    if (taskId.value != null && taskDirectory.value != null) {
      return getTaskPageContent($content, taskDirectory.value, page.value)
    }

    return await null
  })
}

/**
 * Get a reference to all tasks.
 */
export function useTasks(
  where: Ref<object> | object = {},
  searchTerm: Ref<string | null> | string | null = null
): Ref<Task[]> {
  const { store, $content } = useContentAndStore()
  return useAsnycArrayResult(() =>
    getTasks(store, $content, unref(where), unref(searchTerm))
  )
}
