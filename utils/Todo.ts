import { contentFunc } from '@nuxt/content/types/content'
import { reactive, toRefs } from '@vue/composition-api'
import { add, compareDesc, formatISO, isBefore, parseISO } from 'date-fns/fp'
import Todos, {
  Todo as StoreTodo,
  getTodo as getStoreTodo,
} from '~/store/todos'
import {
  Todo as ContentTodo,
  getTodo as getContentTodo,
  getTodos as getContentTodos,
} from '~/utils/content/Todo'

export type Todo = Readonly<StoreTodo & ContentTodo>

export async function getTodo(
  store: Todos,
  $content: contentFunc,
  todoId: string,
  locales: string[]
): Promise<Todo> {
  const storeTodo = toRefs(getStoreTodo(store, todoId))
  const contentTodo = await getContentTodo($content, todoId, locales)

  return reactive({
    ...storeTodo,
    ...contentTodo,
  }) as Todo
}

export async function getTodos(
  store: Todos,
  $content: contentFunc,
  where: object = {},
  searchTerm: string | null = null,
  locales: string[]
): Promise<Todo[]> {
  const todos = (
    await getContentTodos($content, where, searchTerm, locales)
  ).map(
    (todo) =>
      reactive({
        ...todo,
        ...toRefs(getStoreTodo(store, todo.id)),
      }) as Todo
  )

  if (searchTerm === '') {
    return todos.sort(sortTodosByDueDate(new Date()))
  }

  return todos
}

export function todosFinished(todos: Todo[]): number {
  return todos.filter(({ finished }) => finished).length
}

export function todosFinishedPercent(todos: Todo[]): number {
  const finishedPercent = (todosFinished(todos) / todos.length) * 100

  return Number.isNaN(finishedPercent) ? 100 : finishedPercent
}

export function sortTodosByDueDate(
  expectedBirthday: Date
): (todoA: Todo, todoB: Todo) => number {
  return (todoA: Todo, todoB: Todo) => {
    return compareDesc(
      add(todoA.recommendedDateFromExpectedBirth)(expectedBirthday)
    )(add(todoB.recommendedDateFromExpectedBirth)(expectedBirthday))
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

export function groupTodosByDateGroup(
  todos: Todo[],
  referenceDate: Date
): { group: Date; todos: Todo[] }[] {
  const dates = getDateGroupRanges(referenceDate)

  const closestDate = closestDateTo(dates)

  const groupedTodos = todos.reduce((acc, todo) => {
    const date = add(todo.recommendedDateFromExpectedBirth)(referenceDate)
    const closestDateToDate = closestDate(date).getTime()
    const dateGroup = formatISO(
      Number.isNaN(closestDateToDate) ? 0 : closestDateToDate
    )

    return {
      ...acc,
      [dateGroup]: [...(acc[dateGroup] ?? []), todo],
    }
  }, {} as { [key: string]: Todo[] })

  return Object.entries(groupedTodos).map(([group, todos]) => {
    return {
      group: parseISO(group),
      todos,
    }
  })
}
