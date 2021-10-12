<template>
  <div>
    <header>
      <div class="w-full bg-primary-500 text-white h-16 flex flex-row justify-center">
        <h1 class="ml-2 flex-grow"> {{$t('welcome')}} Team :)</h1>


        <select class="bg-primary-300 p-2" :value="currentLocale" @input="switchLocale">
          <option
            v-for="locale in availableLocales"
            :key="locale.code"
            class="hover:bg-yellow-500"
            :value="locale.code"
          >{{ locale.name }}</option>
        </select>
      </div>

      <nav class="flex w-full text-center text-primary-500 font-bold">
        <NuxtLink :to="localeRoute('/tasks')" class="flex-grow m-2">Aufgaben</NuxtLink>
        <NuxtLink :to="localeRoute('/test')" class="flex-grow m-2">Übersicht</NuxtLink>
        <NuxtLink :to="localeRoute('/intro/married')" class="flex-grow m-2">Wir</NuxtLink>
      </nav>
    </header>

    <div class="m-2">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useRouter, wrapProperty } from '@nuxtjs/composition-api'
import type { LocaleObject } from '@nuxtjs/i18n';

export const useI18n = wrapProperty('$i18n', false)
export const useSwitchLocalePath = wrapProperty('switchLocalePath', false)

export default defineComponent({
  setup(_props) {
    const $i18n = useI18n();
    const $router = useRouter();
    const switchLocalePath = useSwitchLocalePath();

    return {
      availableLocales: computed(() => ($i18n.locales as LocaleObject[])),
      currentLocale: computed(() => $i18n.locale),
      switchLocale: (e: InputEvent) => $router.push(switchLocalePath((e.target! as HTMLSelectElement).value))
    }
  },
})
</script>

<style>
  .nuxt-link-active {
    @apply border-b-2 border-primary-500;
  }
</style>
