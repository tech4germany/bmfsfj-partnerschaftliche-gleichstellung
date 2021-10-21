<template>
  <div class="module-icon-wrapper w-8 flex flex-col overflow-hidden">
    <div v-for="module in modules" :key="module.id" class="module-icon w-8 h-8 flex" :style="`--color: ${module.color2}`">
      <font-awesome-icon style="margin: auto" fixed-width :icon="module.icon"></font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    modules: {
      type: Array, // Array<Modul>
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
