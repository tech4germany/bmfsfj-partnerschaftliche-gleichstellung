import { ref, watch } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { contentFunc } from "@nuxt/content/types/content";
import { useContent } from "./useContent";
import { contentDocumentToTask, Task } from "./Task";

export function getTaskQuery($content: contentFunc, taskId: string) {
  return $content(`tasks`, {deep: true}).where({
    id: taskId,
    task: true
  }).limit(1)
}

export async function getTaskDir(taskId: string): Promise<string> {
  const $content = useContent();

  const taskContent = await getTaskQuery($content, taskId).only('dir').fetch();

  if (!Array.isArray(taskContent)) throw new TypeError('Expected an array');

  return taskContent[0].dir
}

export function useTaskContent(taskId: Ref<string>): Ref<Task | null> {
  const $content = useContent();
  const content: Ref<Task | null> = ref(null);

  const fetchContent = async () => {
    const taskContent = await getTaskQuery($content, taskId.value).fetch();

    if (!Array.isArray(taskContent)) throw new TypeError('Expected an array');
    if (taskContent.length !== 1) throw new Error(`Found no task with the id ${taskId.value}`)

    const task = contentDocumentToTask(taskContent[0]);

    content.value = task
  }

  watch([taskId], fetchContent, {immediate: true});

  return content;
}
