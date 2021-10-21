<template>
  <custom-toggle-button
    class="p-1 border-primary-500 border-2 rounded-xl"
    v-bind="attrs"
    v-on="listeners"
  >
    <slot></slot>
  </custom-toggle-button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  inheritAttrs: false,
  setup(_props, { attrs, listeners }) {
    return {
      attrs,
      listeners
    }
  },
})
</script>

<style scoped>
button.checked {
  @apply bg-primary-500 text-white;
}
</style>
