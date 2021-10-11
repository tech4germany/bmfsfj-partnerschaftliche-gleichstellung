import { ref } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { useContent } from "./useContent";
import { contentDocumentToTask, Task } from "./Task";

export function useTasks() {
  const $content = useContent();
  const tasks: Ref<Task[]> = ref([]);

  const fetchContent = async () => {
    const tasksContents = await $content(`tasks`, {deep: true}).without('data').where({
      task: { $eq: true }
    }).fetch();

    if (!Array.isArray(tasksContents)) throw new Error("Expected array of task contents");

    tasks.value = tasksContents.map((content) => contentDocumentToTask(content));
  }

  // watch([], fetchContent, {immediate: true});
  fetchContent();

  return tasks;
}
