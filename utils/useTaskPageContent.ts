import { ref, Ref, watch } from "@vue/composition-api";
import { useContent } from "./useContent";

export function useTaskPageContent(task: Ref<string>, page: Ref<string>) {
  const $content = useContent();
  const content = ref({});

  const fetchContent = async () => {
    content.value = await $content(`tasks/${task.value}/${page.value}`).fetch<{title: string}>();
  }

  watch([task, page], fetchContent, {immediate: true});

  return content;
}
