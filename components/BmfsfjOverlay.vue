<template>
   <div :class="{hidden: !open}"  class="absolute top-0 left-0 md:bg-grau-100 h-screen w-full md:py-3 bg-white opacity-90" @click="$emit('close')">
    <div
      class="
        flex flex-col
        h-full
        bg-white
        md:max-h-full md:rounded-lg md:overflow-auto md:max-w-xl md:mx-auto
      "
    >
       <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  setup() {

  },
})
</script>
