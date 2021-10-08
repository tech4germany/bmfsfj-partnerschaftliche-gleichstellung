import { ref } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { TaskContentDocument, TaskContentProperties } from "./Task";
import { useContent } from "./useContent";

export function useTasks() {
  const $content = useContent();
  const tasks: Ref<TaskContentDocument[]> = ref([]);

  const fetchContent = async () => {
    const a = await $content(`tasks`, {deep: true}).only(['dir', 'title']).where({
      task: { $eq: true }
    }).fetch<TaskContentProperties>() as TaskContentDocument[];

    tasks.value = a;
  }

  // watch([], fetchContent, {immediate: true});
  fetchContent();

  return tasks;
}
