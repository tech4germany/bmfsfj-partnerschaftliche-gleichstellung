<template>
  <select class="p-2" :value="currentLocale" @input="switchLocale">
    <option
      v-for="locale in availableLocales"
      :key="locale.code"
      :value="locale.code"
    >{{ locale.name }}</option>
  </select>
</template>

<script lang="ts">
import { useRouter, wrapProperty } from '@nuxtjs/composition-api';
import type { LocaleObject } from '@nuxtjs/i18n';
import { computed, defineComponent } from '@vue/composition-api'

export const useI18n = wrapProperty('$i18n', false)
export const useSwitchLocalePath = wrapProperty('switchLocalePath', false)

export default defineComponent({
  inheritAttrs: false,
  setup(_props, { attrs }) {
    const $i18n = useI18n();
    const $router = useRouter();
    const switchLocalePath = useSwitchLocalePath();

    return {
      attrs,
      availableLocales: computed(() => ($i18n.locales as LocaleObject[])),
      currentLocale: computed(() => $i18n.locale),
      switchLocale: (e: InputEvent) => $router.push(switchLocalePath((e.target! as HTMLSelectElement).value))
    }
  },
})
</script>
