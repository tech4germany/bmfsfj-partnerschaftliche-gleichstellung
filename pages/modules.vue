<template>
  <div class="flex flex-col gap-2 overflow-auto">
    <module-card v-for="module in modules" :key="module" :module="module"></module-card>
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
