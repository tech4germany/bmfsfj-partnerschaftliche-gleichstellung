<template>
  <div class="md:bg-grau-100 h-screen md:py-3">
    <div
      class="
        flex flex-col
        h-full
        bg-white
        md:max-h-full md:rounded-lg md:overflow-auto md:max-w-xl md:mx-auto
      "
    >
      <header class="mx-3">
        <h1 class="text-3xl text-primary-500 mt-20 font-bold">{{ $t(`intro.title`) }}</h1>
      </header>
      <div class="m-2 flex-grow">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
