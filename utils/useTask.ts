import { ref, unref, watchEffect } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { contentFunc } from "@nuxt/content/types/content";
import { QueryBuilder } from "@nuxt/content/types/query-builder";
import { useContent } from "./useContent";
import { contentDocumentToTask, Task, TaskPageContent } from "./Task";

export function getTaskQuery($content: contentFunc, taskId: string): QueryBuilder{
  return $content(`tasks`, {deep: true}).where({
    id: taskId,
    task: true
  }).limit(1)
}

export async function getTaskDirectory($content: contentFunc, taskId: string): Promise<string> {
  const taskContent = await getTaskQuery($content, taskId).only('dir').fetch();

  if (!Array.isArray(taskContent)) throw new TypeError('Expected an array');

  return taskContent[0].dir
}

export async function getTaskPageContent($content: contentFunc, taskDirectory: string, page: string): Promise<TaskPageContent> {
  const taskContent = await $content(`${taskDirectory}/${page}`).fetch<TaskPageContent>();

  if (Array.isArray(taskContent)) throw new TypeError('Unexpected array');
  if (taskContent == null) throw new Error(`Found no task page at ${taskDirectory}/${page}`)

  return taskContent
}

export async function getTask($content: contentFunc, taskId: string): Promise<Task> {
  const taskContent = await getTaskQuery($content, taskId).fetch();

  if (!Array.isArray(taskContent)) throw new TypeError('Expected an array');
  if (taskContent.length !== 1) throw new Error(`Found no task with the id ${taskId}`)

  return contentDocumentToTask(taskContent[0]);
}

export async function getTasks($content:contentFunc): Promise<Task[]> {
  const tasksContents = await $content(`tasks`, {deep: true}).without('data').where({
    task: { $eq: true }
  }).fetch();

  if (!Array.isArray(tasksContents)) throw new Error("Expected array of task contents");

  return tasksContents.map((content) => contentDocumentToTask(content));
}

/**
 * Get a reference to the result of `f`. `f` is run whenever a refence it uses is updated (see `watchEffect`).
 */
export function useAsnycResult<T>(f: () => Promise<T>): Ref<T | null> {
  const result: Ref<T | null> = ref(null);

  watchEffect(async () => {
    result.value = await f()
  })

  return result;
}

/**
 * Get a reference to the result of `f`, when supplied with the content function and the current value of the `taskId`.
 *
 * @param f the method that uses the content and taskId to get the return value
 * @param taskId a reference to the id of the task that should be used
 * @returns a reference to the return value of `f`, updated whenever `taskId` updates
 */
function useTaskIdWithContent<T>(f: ($content: contentFunc, taskId: string) => Promise<T>, taskId: Ref<string>): Ref<T | null> {
  const $content = useContent();
  return useAsnycResult(() => f($content, unref(taskId)))
}

/**
 * Get a refernce to the directory the file of the task is placed in.
 */
export const useTaskDirectory: (taskId: Ref<string>) => Ref<string | null> =
  (taskId) => useTaskIdWithContent(getTaskDirectory, taskId)

/**
 * Get a refernce to the task (without user specific details) based on the taskId.
 */
export const useTask: (taskId: Ref<string>) => Ref<Task | null> =
  (taskId) => useTaskIdWithContent(getTask, taskId)


/**
 * Get a reference to the the content of a task page.
 */
export const useTaskPageContent: (taskId: Ref<string>, page: Ref<string>) => Ref<TaskPageContent | null> = (taskId, page) => {
  const $content = useContent();
  const taskDirectory = useTaskDirectory(taskId);

  return useAsnycResult(async () => {
    if (taskId.value != null && taskDirectory.value != null) {
      return getTaskPageContent($content, taskDirectory.value, page.value)
    }

    return await null;
  })
}

/**
 * Get a reference to all tasks.
 */
export function useTasks(): Ref<Task[]> {
  const $content = useContent();
  const result: Ref<Task[]> = ref([]);

  watchEffect(async () => {
    result.value = await getTasks($content)
  })

  return result;
}