<template>
  <div class="flex flex-col gap-2 overflow-auto">
    <category-card v-for="module in modules" :key="module" :module="module"></category-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useModuleIds } from  '~/utils/composables/useModules';

export default defineComponent({
  setup(_props) {
    const modules = useModuleIds()

    return {
      modules
    }
  }
})
</script>
