<template>
  <div>
    <label class="flex flex-row items-center">
      <font-awesome-icon
        class="text-primary-500 dark:text-white dark:bg-primary-500"
        fixed-width
        size="lg"
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
      <span class="mr-1">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, unref } from '@vue/composition-api'
import { faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
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

      return faCircle
    })

    return {
      attrs,
      checkboxIcon,
    }
  },
})
</script>
