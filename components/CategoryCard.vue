<template>
  <div class="category-card" :style="`--color: ${color};`">
    <div class="growing-background-parent">
      <div
        class="growing-background"
        :style="`--background-width: ${percentDone}%;`"
      >
        <span class="flex-grow m-2">{{ name }}</span>
        <span class="m-2">{{ percentDone }}%</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      default: 'test',
      type: String,
    },
    percentDone: {
      default: 0,
      type: Number,
    },
    color: {
      default: '#00797f',
      type: String,
    },
  },
})
</script>

<style scoped>
.category-card {
  @apply rounded-xl font-bold border-4 relative;
  border-color: var(--color);
}

.growing-background-parent {
  filter: invert();
}

.growing-background {
  @apply flex;
  width: 100%;
}

.growing-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--background-width);
  height: 100%;
  filter: invert();
  background-color: var(--color);
}

.growing-background span {
  filter: invert();
  color: var(--color);
  mix-blend-mode: difference;
}
</style>
