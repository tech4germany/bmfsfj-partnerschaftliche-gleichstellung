<template>
  <div>
    <header class="">
      <div class="w-full bg-blue-500 text-white h-16 rounded-t-xl flex flex-col justify-center">
        <h1 class="ml-2"> {{$t('welcome')}} Team :)</h1>
      </div>

      <nav class="flex w-full text-center text-blue-500 font-bold">
        <NuxtLink :to="localeRoute('/')" class="flex-grow m-2">Aufgaben</NuxtLink>
        <NuxtLink :to="localeRoute('/home')" class="flex-grow m-2">Übersicht</NuxtLink>
        <NuxtLink :to="localeRoute('/test')" class="flex-grow m-2">Wir</NuxtLink>
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

<style>
  .nuxt-link-exact-active {
    @apply border-b-2 border-blue-500;
  }
</style>

<script lang="ts">
import { computed, defineComponent, wrapProperty } from '@nuxtjs/composition-api'
import { LocaleObject } from '@nuxtjs/i18n';

export const useI18n = wrapProperty('$i18n', false)

export default defineComponent({
  setup(_props, ctx) {
    const $i18n = useI18n();
    return {
      availableLocales: computed(() => ($i18n.locales as LocaleObject[]).filter(i => i.code !== $i18n.locale))
    }
  },
})
</script>

