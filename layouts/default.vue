<template>
  <div>
    <tech-4-germany-info-banner :class="{ 'hidden': isLocalHost }"></tech-4-germany-info-banner>
    <header>
      <div class="w-full bg-primary-500 text-white h-16 flex flex-row justify-center shadow">
        <h1 class="ml-2 flex-grow"> {{$t('welcome')}} Team :) <font-awesome-icon :icon="faUserSecret" /></h1>

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
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  setup() {
    return {
      isLocalHost: window.location.hostname.startsWith('localhost'),
      faUserSecret
    }
  },
})
</script>

<style>
  .nuxt-link-active {
    @apply border-b-2 border-primary-500;
  }
</style>
