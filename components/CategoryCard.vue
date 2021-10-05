<template>
  <div>
    <div @click="increment">{{name}} - {{counter}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      default: "test",
      type: String
    }
  },
  setup(props) {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    }

    return {
      counter,
      increment
    }
  }
})
</script>
