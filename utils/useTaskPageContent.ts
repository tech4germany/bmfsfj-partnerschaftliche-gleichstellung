import { ref, watch } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { useContent } from "./useContent";
import { getTaskDir } from "./useTaskContent";

export function useTaskPageContent(task: Ref<string>, page: Ref<string>) {
  const $content = useContent();
  const content = ref({});


  const fetchContent = async () => {
    const dir = await getTaskDir(task.value);
    content.value = await $content(`${dir}/${page.value}`).fetch<{title: string}>();
  }

  watch([task, page], fetchContent, {immediate: true});

  return content;
}
