<template>
  <div>
    <header class="">
      <div class="w-full bg-primary-500 text-white h-16 flex flex-col justify-center">
        <h1 class="ml-2"> {{$t('welcome')}} Team :)</h1>
      </div>

      <nav class="flex w-full text-center text-primary-500 font-bold">
        <NuxtLink :to="localeRoute('/tasks')" class="flex-grow m-2">Aufgaben</NuxtLink>
        <NuxtLink :to="localeRoute('/')" class="flex-grow m-2">Übersicht</NuxtLink>
        <NuxtLink :to="localeRoute('/intro/married')" class="flex-grow m-2">Wir</NuxtLink>
      </nav>

      <div>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </div>
    </header>

    <Nuxt />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, wrapProperty } from '@nuxtjs/composition-api'
import type { LocaleObject } from '@nuxtjs/i18n';

export const useI18n = wrapProperty('$i18n', false)

export default defineComponent({
  setup(_props) {
    const $i18n = useI18n();
    return {
      availableLocales: computed(() => ($i18n.locales as LocaleObject[]).filter(i => i.code !== $i18n.locale))
    }
  },
})
</script>

<style>
  .nuxt-link-exact-active {
    @apply border-b-2 border-primary-500;
  }
</style>
