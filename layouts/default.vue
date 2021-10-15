<template>
  <div>
    <tech-4-germany-info-banner :class="{ 'hidden': isLocalHost }"></tech-4-germany-info-banner>
    <header>
      <div class="w-full bg-primary-500 text-white h-16 flex flex-row justify-center shadow">
        <bmfsfj-search class="my-3"></bmfsfj-search>

        <bmfsfj-profile-icon></bmfsfj-profile-icon>
      </div>

      <nav class="flex w-full text-center text-primary-500 font-bold">
        <NuxtLink :to="localeRoute('/modules')" class="flex-grow m-2">Module</NuxtLink>
        <NuxtLink :to="localeRoute('/tasks')" class="flex-grow m-2">ToDos</NuxtLink>
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
    return {
      isLocalHost: window.location.hostname.startsWith('localhost')
    }
  },
})
</script>

<style scoped>
  nav >>> .nuxt-link-active {
    @apply border-b-2 border-primary-500;
  }
</style>
