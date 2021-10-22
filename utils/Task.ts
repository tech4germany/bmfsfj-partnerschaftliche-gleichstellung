import { contentFunc } from '@nuxt/content/types/content'
import { reactive, toRefs } from '@vue/composition-api'
import { add, compareDesc, formatISO, isBefore, parseISO } from 'date-fns/fp'
import Todos, {
  Task as StoreTask,
  getTask as getStoreTask,
} from '~/store/todos'
import {
  Task as ContentTask,
  getTask as getContentTask,
  getTasks as getContentTasks,
} from '~/utils/content/Task'

export type Task = Readonly<StoreTask & ContentTask>

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
  const tasks = (await getContentTasks($content, where, searchTerm)).map(
    (task) =>
      reactive({
        ...task,
        ...toRefs(getStoreTask(store, task.id)),
      }) as Task
  )

  if (searchTerm === '') {
    return tasks.sort(sortTasksByDueDate(new Date()))
  }

  return tasks
}

export function tasksFinished(tasks: Task[]): number {
  return tasks.filter(({ finished }) => finished).length
}

export function tasksFinishedPercent(tasks: Task[]): number {
  const finishedPercent = (tasksFinished(tasks) / tasks.length) * 100

  return Number.isNaN(finishedPercent) ? 100 : finishedPercent
}

export function sortTasksByDueDate(
  expectedBirthday: Date
): (taskA: Task, taskB: Task) => number {
  return (taskA: Task, taskB: Task) => {
    return compareDesc(
      add(taskA.recommendedDateFromExpectedBirth)(expectedBirthday)
    )(add(taskB.recommendedDateFromExpectedBirth)(expectedBirthday))
  }
}

const DATE_GROUPS_DURATIONS: Duration[] = [
  {
    months: -12,
  },
  {
    months: -9,
  },
  {
    months: -6,
  },
  {
    months: -3,
  },
  {
    weeks: -2,
  },
  {
    weeks: -1,
  },
  {
    days: -1,
  },
  {
    days: 1,
  },
  {
    weeks: 1,
  },
  {
    months: 1,
  },
]

function getDateGroupRanges(referenceDate: Date) {
  return DATE_GROUPS_DURATIONS.map((duration) => add(duration)(referenceDate))
}

function closestDateTo(dates: Date[]): (date: Date) => Date {
  return (date) => dates.find((d) => isBefore(d)(date)) ?? dates[0]
}

export function groupTasksByDateGroup(
  tasks: Task[],
  referenceDate: Date
): { group: Date; todos: Task[] }[] {
  const dates = getDateGroupRanges(referenceDate)

  const closestDate = closestDateTo(dates)

  const groupedTasks = tasks.reduce((acc, task) => {
    const date = add(task.recommendedDateFromExpectedBirth)(referenceDate)
    const closestDateToDate = closestDate(date).getTime()
    const dateGroup = formatISO(
      Number.isNaN(closestDateToDate) ? 0 : closestDateToDate
    )

    return {
      ...acc,
      [dateGroup]: [...(acc[dateGroup] ?? []), task],
    }
  }, {} as { [key: string]: Task[] })

  return Object.entries(groupedTasks).map(([group, tasks]) => {
    return {
      group: parseISO(group),
      todos: tasks,
    }
  })
}
