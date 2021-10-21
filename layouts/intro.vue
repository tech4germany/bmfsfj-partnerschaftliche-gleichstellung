<template>
  <div class="h-screen flex flex-col">
    <header class="mx-3">
      <h1 class="text-3xl text-primary-500 mt-20">{{$t(`intro.title`)}}</h1>
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
