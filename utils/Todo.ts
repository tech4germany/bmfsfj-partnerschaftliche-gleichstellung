import { contentFunc } from '@nuxt/content/types/content'
import { reactive, toRefs } from '@vue/composition-api'
import { add, compareDesc, isAfter } from 'date-fns/fp'
import Todos, {
  getTodo as getStoreTodo,
  Todo as StoreTodo,
} from '~/store/todos'
import {
  getTodo as getContentTodo,
  getTodos as getContentTodos,
  Todo as ContentTodo,
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

const CLOSEBY_DATE_GROUPS_DURATIONS: (Duration & {
  text?: string
})[] = [
  {
    years: 100,
    text: 'later',
  },
  {
    months: 2,
    text: 'next-month',
  },
  {
    months: 1,
    text: 'this-month',
  },
  {
    weeks: 2,
    text: 'next-week',
  },
  {
    weeks: 1,
    text: 'this-week',
  },
]

function getDateGroupRanges(referenceDate: Date) {
  return CLOSEBY_DATE_GROUPS_DURATIONS.map((duration) => ({
    date: add(duration)(referenceDate),
    text: duration.text,
  }))
}

function findBefore<T>(a: T[], predicate: (item: T) => boolean) {
  const index = a.findIndex((item) => predicate(item))

  if (index === -1) {
    return a[a.length - 1]
  }

  if (index === 0) {
    return a[0]
  }

  return a[index - 1]
}

function closestDateTo(dates: Date[]): (date: Date) => Date {
  return (date) => findBefore(dates, (d) => isAfter(d)(date))
}

export function groupTodosByDateGroup(
  todos: Todo[],
  referenceDate: Date
): { group: string; todos: Todo[] }[] {
  const dates = getDateGroupRanges(referenceDate)

  const dateToTextMap: Map<number, string | undefined> = new Map(
    dates.map(({ date, text }) => [date.getTime(), text])
  )

  const closestDate = closestDateTo(dates.map(({ date }) => date))

  const groupedTodos: Map<Date, Todo[]> = todos
    .sort(
      (
        { recommendedDateFromExpectedBirth: a },
        { recommendedDateFromExpectedBirth: b }
      ) => {
        const dateA = add(a)(referenceDate)
        const dateB = add(b)(referenceDate)
        return compareDesc(dateA)(dateB)
      }
    )
    .reduce((acc, todo) => {
      const date = add(todo.recommendedDateFromExpectedBirth)(referenceDate)
      const closestDateToDate = closestDate(date)
      acc.set(closestDateToDate, [...(acc.get(closestDateToDate) ?? []), todo])
      return acc
    }, new Map())

  return [...groupedTodos.entries()]
    .sort(([groupA], [groupB]) => compareDesc(groupA, groupB))
    .map(([group, todos]) => {
      return {
        group: dateToTextMap.get(group.getTime()) ?? '',
        todos: todos.sort(),
      }
    })
}
