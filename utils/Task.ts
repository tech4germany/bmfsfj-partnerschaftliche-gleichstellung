import { contentFunc } from '@nuxt/content/types/content'
import { reactive, toRefs } from '@vue/composition-api'
import Todos, {
  Task as StoreTask,
  getTask as getStoreTask,
} from '~/store/todos'
import {
  Task as ContentTask,
  TaskPageContent as ContentTaskPageContent,
  getTask as getContentTask,
  getTasks as getContentTasks,
} from '~/utils/content/Task'

export type Task = Readonly<StoreTask & ContentTask>
export type TaskPageContent = ContentTaskPageContent

export async function getTask(
  store: Todos,
  $content: contentFunc,
  taskId: string
): Promise<Task> {
  const storeTask = toRefs(getStoreTask(store, taskId))
  const contentTask = await getContentTask($content, taskId)

  return reactive({
    ...storeTask,
    ...contentTask,
  }) as Task
}

export async function getTasks(
  store: Todos,
  $content: contentFunc,
  where: object = {},
  searchTerm: string | null = null
): Promise<Task[]> {
  const tasks = await getContentTasks($content, where, searchTerm)

  return tasks.map(
    (task) =>
      reactive({
        ...task,
        ...toRefs(getStoreTask(store, task.id)),
      }) as Task
  )
}

export function tasksFinished(tasks: Task[]): number {
  return tasks.filter(({ finished }) => finished).length
}

export function tasksFinishedPercent(tasks: Task[]): number {
  const finishedPercent = (tasksFinished(tasks) / tasks.length) * 100

  return Number.isNaN(finishedPercent) ? 100 : finishedPercent
}

export { getTaskDirectory, getTaskPageContent } from '~/utils/content/Task'
