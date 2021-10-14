<template>
  <select class="p-2" :value="value" v-bind="attrs" @input="onInput">
    <option
      v-for="item in items"
      :key="item.value || item"
      :value="item.value || item"
    >
      <slot :item="item">{{ item.label }}</slot>
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'

export default defineComponent({
  inheritAttrs: false,
  props: {
    items: {
      type: Array as PropType<{label: string, value: unknown}[] | unknown[]>,
      default: () => []
    },
    value: {
      type: null as unknown as PropType<unknown>,
      default: null
    }
  },
  setup(_props, { attrs, emit }) {
    function onInput(e: InputEvent) {
      emit('input', (e.target as HTMLSelectElement).value)
    }

    return {
      attrs,
      onInput
    }
  },
})
</script>
