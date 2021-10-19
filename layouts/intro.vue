<template>
  <div class="h-screen flex flex-col">
    <header class="w-full bg-primary-500 text-white h-16 align-bottom justify-center flex">
      <h1 class="self-center text-lg font-light">Einführung</h1>
    </header>
    <div class="m-2 flex-grow">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
