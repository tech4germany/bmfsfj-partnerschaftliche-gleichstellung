import {
  File,
  IContentDocument,
  contentFunc,
} from '@nuxt/content/types/content'
import type { Duration } from 'date-fns'

export type Module = string

export type TodoContent = {
  title: string
  document?: File & IContentDocument
}

export type Todo = TodoContent & {
  id: string
  modules: Module[]
  recommendedDateFromExpectedBirth: Duration
}

export const TODOS_DIRECTORY = 'todos'

export function isContentDocumentAFile(
  content: IContentDocument
): content is IContentDocument & File {
  return 'data' in content
}

export function isContentDocumentATodo(
  content: IContentDocument
): content is IContentDocument & {
  id: string
  title: string
  modules: string[]
  recommendedDateFromExpectedBirth: Duration
} {
  return (
    'id' in content &&
    typeof content.id === 'string' &&
    'title' in content &&
    typeof content.title === 'string' &&
    'modules' in content &&
    Array.isArray(content.modules) &&
    'recommendedDateFromExpectedBirth' in content
  )
}

export function contentDocumentToTodo(content: IContentDocument): Todo {
  if (!isContentDocumentATodo(content))
    throw new Error(`Non todo content document: ${JSON.stringify(content)}`)

  return {
    document: content as unknown as IContentDocument & File,
    id: content.id,
    title: content.title,
    modules: content.modules,
    recommendedDateFromExpectedBirth: content.recommendedDateFromExpectedBirth,
  }
}

export async function getTodo(
  $content: contentFunc,
  todoId: string
): Promise<Todo> {
  const todoContent = await $content(TODOS_DIRECTORY, { deep: true })
    .where({
      id: todoId,
    })
    .limit(1)
    .fetch()

  if (!Array.isArray(todoContent)) throw new TypeError('Expected an array')
  if (todoContent.length !== 1)
    throw new Error(`Found no todo with the id ${todoId}`)

  return contentDocumentToTodo(todoContent[0])
}

export async function getTodos(
  $content: contentFunc,
  where: object = {},
  searchTerm: string | null = null
): Promise<Todo[]> {
  const todosContents = await $content(TODOS_DIRECTORY, { deep: true })
    .without('data')
    .where(where)
    .search(searchTerm)
    .fetch()

  if (!Array.isArray(todosContents))
    throw new Error('Expected array of todo contents')

  return todosContents.map((content) => contentDocumentToTodo(content))
}
