<template>
  <custom-toggle-button
    class="py-3 px-2 border-primary-500 text-xl flex gap-2 text-primary-500 border-2 rounded-xl"
    :class="{checked: value}"
    v-bind="attrs"
    v-on="listeners"
  >
    <font-awesome-icon

      fixed-width
      size="lg"
      :icon="checkboxIcon"
    />
    <div class="flex-grow text-left">
      <slot></slot>
    </div>
  </custom-toggle-button>
</template>

<script lang="ts">
import { faCheck, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faDotCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import { computed, defineComponent, toRefs, unref } from '@vue/composition-api'

export default defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: Boolean,
    },
    multi: {
      type: Boolean,
      default: false
    },
  },
  setup(props, { attrs, listeners }) {
    const { value, multi } = toRefs(props)

    const checkboxIcon = computed(() => {

      if (unref(value) == null) {
        return faQuestion
      }

      if (unref(multi)) {
        if (unref(value)) {
          return faCheck
        }

        return faSquare
      }

      if (unref(value)) {
        return faDotCircle
      }

      return faCircle
    })

    return {
      attrs,
      listeners,
      checkboxIcon
    }
  },
})
</script>

<style scoped>
.checked {
  @apply bg-primary-500 text-white;
}
</style>
