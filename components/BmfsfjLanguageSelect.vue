<template>
  <bmfsfj-select :items="availableLocales" :value="currentLocale" @input="switchLocale"></bmfsfj-select>
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
      currentLocale: computed(() => $i18n.locale),
      availableLocales: computed(() => ($i18n.locales as LocaleObject[]).map(a => ({label: a.name, value: a.code}))),
      switchLocale: (e: string) => $router.push(switchLocalePath(e))
    }
  },
})
</script>
