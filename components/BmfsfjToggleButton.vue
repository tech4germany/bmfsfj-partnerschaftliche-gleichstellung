<template>
  <button
    :class="{ checked: value }"
    :aria-pressed="value"
    v-bind="attrs"
    @click="$emit('input', !value)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
    },
  },
  emits: ['input'],
  setup(_props, { attrs }) {
    return {
      attrs,
    }
  },
})
</script>

<style scoped>
button {
  @apply p-2 border-primary-500 border-2 rounded;
}

button.checked {
  @apply bg-primary-500 text-white;
}
</style>
