<template>
  <div>
    <tech-4-germany-info-banner :class="{ 'hidden': isLocalHost }"></tech-4-germany-info-banner>
    <header class="w-full bg-primary-500 text-white h-16 align-bottom justify-center flex">
      <h1 class="self-center text-lg font-light">Einführung</h1>
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
