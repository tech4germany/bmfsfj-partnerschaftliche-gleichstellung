<template>
  <div class="text-blue-500">
    <label class="flex flex-row items-center space-x-1">
      <input
        type="checkbox"
        :name="label"
        class="
          w-4
          h-4
          border-blue-500 border-2
          rounded
          appearance-none
          relative
          text-white
          checked:bg-blue-500
          checked:after:top-0
          checked:after:leading-3
          checked:after:absolute
          checked:after:content-['\2713']
        "
        :checked="value"
        v-bind="attrs"
        @input="$emit('input', $event.target.checked)"
      />
      <span>{{label}}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean
    }
  },
  emits: [
    'input'
  ],
  setup(_props, { attrs }) {
    return {
      attrs
    }
  },
})
</script>
