import { contentFunc } from "@nuxt/content/types/content";
import { computed } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { Module } from "./Module";
import { useContent } from "./useContent";
import { useAsnycArrayResult } from "./useTask";


export async function getModules($content:contentFunc): Promise<Module[]> {
  const content = await $content(`modules`).fetch<{modules: Module[]}>();

  if (Array.isArray(content)) throw new TypeError('Unexpected array for modules');

  return content.body;
}

export function useModules(): Ref<Module[]> {
  const $content = useContent();
  return useAsnycArrayResult(() => getModules($content))
}

export function useModuleIds(): Ref<string[]> {
  const modules = useModules();
  return computed(() => modules.value.map(modul => modul.id))
}
