<template>
  <div class="module-icon-wrapper w-8 flex flex-col overflow-hidden">
    <bmfsfj-module-icon v-for="module in moduleIds" :key="module" class="w-8 h-8" :module-id="module"></bmfsfj-module-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    moduleIds: {
      type: Array, // Array<string>
      default: () => []
    }
  }
})
</script>

<style scoped>
.module-icon {
  @apply text-white;
  background-color: var(--color);
}

</style>
