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
  background-color: var(--color);
}

.growing-background span {
  color: var(--color);
}

/*
 * We want the color of the text to be white when on the colored part of the background.
 * When the text is on the uncolored part it should be in the color of the background.
 * The colored width of the background is changing based on the percantage of done tasks.
 *
 * To change the color on the text based on the color of the background we use `mix-blend-mode: difference` which is changing
 * the color of the text to the difference of the background-color and the text-color. Therfore the text color is black (`#000`)
 * when both the color and background-color are the same. As we want the color to be white we then use `filter: invert()` to invert
 * this color to white (`#000` -> `#fff`). This is done on the parent element of the element that has the background. In this case
 * it is the same css-class as the background is defined on the `::before` pseudo-element and therefore still a child element.
 * As this would require us to provide the invers color of the color we actually want to see on the page we add further
 * `filter: invert()` statements on the elment with the background definition (`.growing-background::before`) and on the element
 * containing the text (`.growing-background span`). This appearantly works...
 */

.growing-background {
  filter: invert();
}

.growing-background::before {
  filter: invert();
}

.growing-background span {
  mix-blend-mode: difference;
  filter: invert();
}
</style>
