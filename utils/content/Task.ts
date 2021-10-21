import {
  File,
  IContentDocument,
  contentFunc,
} from '@nuxt/content/types/content'

export type Module = string

export type TaskContent = {
  title: string
  document?: File & IContentDocument
}

export type Task = TaskContent & {
  id: string
  modules: Module[]
}

export const TODOS_DIRECTORY = 'todos'

export function isContentDocumentAFile(
  content: IContentDocument
): content is IContentDocument & File {
  return 'data' in content
}

export function isContentDocumentATask(
  content: IContentDocument
): content is IContentDocument & {
  id: string
  title: string
  modules: string[]
} {
  return (
    'id' in content &&
    typeof content.id === 'string' &&
    'title' in content &&
    typeof content.title === 'string' &&
    'modules' in content &&
    Array.isArray(content.modules)
  )
}

export function contentDocumentToTask(content: IContentDocument): Task {
  if (!isContentDocumentATask(content))
    throw new Error('Non task content document')

  return {
    document: content as unknown as IContentDocument & File,
    id: content.id,
    title: content.title,
    modules: content.modules,
  }
}

export async function getTask(
  $content: contentFunc,
  taskId: string
): Promise<Task> {
  const taskContent = await $content(TODOS_DIRECTORY, { deep: true })
    .where({
      id: taskId,
    })
    .limit(1)
    .fetch()

  if (!Array.isArray(taskContent)) throw new TypeError('Expected an array')
  if (taskContent.length !== 1)
    throw new Error(`Found no task with the id ${taskId}`)

  return contentDocumentToTask(taskContent[0])
}

export async function getTasks(
  $content: contentFunc,
  where: object = {},
  searchTerm: string | null = null
): Promise<Task[]> {
  const tasksContents = await $content(TODOS_DIRECTORY, { deep: true })
    .without('data')
    .where(where)
    .search(searchTerm)
    .fetch()

  if (!Array.isArray(tasksContents))
    throw new Error('Expected array of task contents')

  return tasksContents.map((content) => contentDocumentToTask(content))
}