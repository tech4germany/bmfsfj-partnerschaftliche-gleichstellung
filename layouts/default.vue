<template>
  <div>
    <header>
      <div class="w-full bg-primary-500 text-white h-16 flex flex-row justify-center">
        <h1 class="ml-2 flex-grow"> {{$t('welcome')}} Team :)</h1>

        <bmfsfj-language-select class="bg-primary-400"></bmfsfj-language-select>
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style>
  .nuxt-link-active {
    @apply border-b-2 border-primary-500;
  }
</style>
