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

/**
 * How many todos are finished?
 *
 * @param todos An array of todos
 * @returns The amount of finished todos.
 */
export function todosFinished(todos: Todo[]): number {
  return todos.filter(({ finished }) => finished).length
}

/**
 * What percentage of the todos is finished?
 *
 * @param todos An array of todos.
 * @returns What percentage of these (as a number between 0 and 100) is finished.
 */
export function todosFinishedPercent(todos: Todo[]): number {
  const finishedPercent = (todosFinished(todos) / todos.length) * 100

  return Number.isNaN(finishedPercent) ? 100 : finishedPercent
}

/**
 * Get a sort function to sort the todos based on the due date.
 *
 * @param expectedBirthday The reference date for the due dates.
 * @returns A sort function for the todos.
 */
export function sortTodosByDueDate(
  expectedBirthday: Date
): (todoA: Todo, todoB: Todo) => number {
  return (todoA: Todo, todoB: Todo) => {
    return compareDesc(
      add(todoA.recommendedDateFromExpectedBirth)(expectedBirthday)
    )(add(todoB.recommendedDateFromExpectedBirth)(expectedBirthday))
  }
}

/**
 * Durations by which the todos are grouped in the todo overview.
 * The duration is the amount of time after the current date.
 * The value of the `text` key is used as a translation key (with the prefix `timeline`) for the headline of the group.
 * The durations *need* to be sorted from longest to shortest.
 */
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

type DateGroup = {
  date: Date
  text: string | undefined
}

function getDateGroupRanges(referenceDate: Date): DateGroup[] {
  return CLOSEBY_DATE_GROUPS_DURATIONS.map((duration) => ({
    date: add(duration)(referenceDate),
    text: duration.text,
  }))
}

/**
 * Find the element in the array before the first element for which the predicate is true.
 */
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

/**
 * Find the date in the list of dates that is the closest to the provided date.
 */
function closestDateTo(dates: Date[]): (date: Date) => Date {
  return (date) => findBefore(dates, (d) => isAfter(d)(date))
}

function groupSortedTodosByDateGroup(
  todos: Todo[],
  dateGroups: DateGroup[],
  referenceDate: Date
): Map<Date, Todo[]> {
  const closestDate = closestDateTo(dateGroups.map(({ date }) => date))

  return todos.sort(sortTodosByDueDate(referenceDate)).reduce((acc, todo) => {
    const date = add(todo.recommendedDateFromExpectedBirth)(referenceDate)
    const closestDateToDate = closestDate(date)
    acc.set(closestDateToDate, [...(acc.get(closestDateToDate) ?? []), todo])
    return acc
  }, new Map())
}

/**
 * A Group of todos.
 */
type TodosGroup = {
  // The identifier of this group.
  group: string;

  // The todos that are part of this group
  todos: Todo[]
}

/**
 * Convert a map of todos grouped by a date to a sorted array of TodosGroups.
 */
function dateGroupedTodosMapToArray(groupedTodos: Map<Date, Todo[]>, dates: DateGroup[]): TodosGroup[] {
  const dateToTextMap: Map<number, string | undefined> = new Map(
    dates.map(({ date, text }) => [date.getTime(), text])
  )

  return [...groupedTodos.entries()]
    .sort(([groupA], [groupB]) => compareDesc(groupA, groupB))
    .map(([group, todos]) => {
      return {
        group: dateToTextMap.get(group.getTime()) ?? '',
        todos: todos.sort(),
      }
    })
}

/**
 * Group the todos based on the above defined date groups.
 */
export function groupTodosByDateGroup(
  todos: Todo[],
  referenceDate: Date
): TodosGroup[] {
  const dates = getDateGroupRanges(new Date())
  const groupedTodos: Map<Date, Todo[]> = groupSortedTodosByDateGroup(todos, dates, referenceDate)

  return dateGroupedTodosMapToArray(groupedTodos, dates);
}
