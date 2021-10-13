import type { Ref } from "@vue/composition-api";
import { useContent } from "./useContent";
import { getCategories, useAsnycArrayResult } from "./useTask";

export function useCategories(): Ref<string[]> {
  const $content = useContent();
  return useAsnycArrayResult(() => getCategories($content))
}
