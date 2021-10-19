<template>
  <div>
    <div class="title" @click="toggle">
      <slot name="title">
        <font-awesome-icon
          class="self-center mx-2 text-primary-500"
          :icon="icon"
        />
        <span>{{ title }}</span>
      </slot>
    </div>

    <div class="extension" :hidden="!extended">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from '@nuxtjs/composition-api'
import type { Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    initalValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup({ initalValue }) {
    const extended: Ref<boolean> = ref(initalValue)

    function toggle() {
      extended.value = !unref(extended)
    }

    return {
      extended,
      toggle,
    }
  },
})
</script>
