<template>
  <div>
    <label class="flex flex-row items-center space-x-1">
      <font-awesome-icon
        class="text-primary-500 dark:text-white dark:bg-primary-500"
        fixed-width
        :icon="checkboxIcon"
      />
      <input
        ref="checkbox"
        type="checkbox"
        :name="label"
        class="appearance-none"
        :checked="value"
        v-bind="attrs"
        @input="$emit('input', $event.target.checked)"
      />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, unref } from '@vue/composition-api'
import { faCheck, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: null,
    },
  },
  emits: ['input'],
  setup(props, { attrs }) {
    const value = toRef(props, 'value')

    const checkboxIcon = computed(() => {
      if (unref(value) == null) {
        return faQuestion
      }

      if (unref(value)) {
        return faCheck
      }

      return faTimes
    })

    return {
      attrs,
      checkboxIcon,
    }
  },
})
</script>
