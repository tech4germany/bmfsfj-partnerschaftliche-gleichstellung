<template>
  <nuxt-link :to="localeRoute(`/tasks?module=${module}`)">
    <div class="category-card text-black" :style="`--border-color: ${borderColor}; --color: ${color};`">
      <div
        class="growing-background gap-4 text-1.5xl px-4 align-middle"
        :style="`--background-width: ${percentDone}%;`"
      >
        <font-awesome-icon class="my-auto" :icon="icon" />
        <span class="flex-grow my-auto">
          {{ $t(`modules.${module}`) }}
        </span>
        <span class="my-auto">{{ percentDone }}%</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, unref } from '@nuxtjs/composition-api'
import { useModule, useModuleFinishedPercent } from '~/utils/composables/useModules'

export default defineComponent({
  props: {
    module: {
      default: 'beruf',
      type: String,
    }
  },
  setup(props) {
    const id = toRef(props, 'module');
    const module = useModule(id);
    const percentDone = useModuleFinishedPercent(id);

    return {
      color: computed(() => unref(module)?.color ?? '#0f0'),
      borderColor: computed(() => unref(module)?.color2 ?? '#0f0'),
      icon: computed(() => unref(module)?.icon ?? 'euro-sign'),
      percentDone: computed(() => unref(percentDone).toFixed(0))
    }
  }
})
</script>

<style scoped>
.category-card {
  @apply rounded-xl border-3 relative h-24;
  border-color: var(--border-color);
}

.growing-background {
  @apply flex w-full h-full;
}

.growing-background * {
  z-index: 1;
}

.growing-background::before {
  @apply rounded-l;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: var(--background-width);
  height: 100%;
  z-index: 0;
  background-color: var(--color);
}

/*
.growing-background > * {
  color: var(--color);
}
*/

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

/*
.growing-background {
  filter: invert();
}

.growing-background::before {
  filter: invert();
}

.growing-background > * {
  mix-blend-mode: difference;
  filter: invert();
}
*/
</style>
