import { ref, watch } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { AdditionalTaskContentDocument, AdditionalTaskContentProperties, TaskContentDocument, TaskContentProperties } from "./Task";
import { useContent } from "./useContent";

export function useTaskContent(task: Ref<string>) {
  const $content = useContent();
  const content = ref({});

  const fetchContent = async () => {
    const taskContent = await $content(`tasks/${task.value}/index`).fetch<TaskContentProperties>() as TaskContentDocument;
    const additionalTaskContent = await $content(`tasks/${task.value}`).only(['path', 'title']).where({
      task: { $ne: true }
    }).fetch<AdditionalTaskContentProperties>() as AdditionalTaskContentDocument[];

    content.value = {
      ...taskContent,
      pages: additionalTaskContent
    }
  }

  watch([task], fetchContent, {immediate: true});

  return content;
}
