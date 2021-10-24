<template>
  <nuxt-link :to="to"><slot></slot></nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { useLocalRoute } from '~/utils/composables/useLocalRoute'

export default defineComponent({
  props: {
    todo: {
      type: String,
      default: null
    }
  },
  setup({ todo }) {
    const localeRoute = useLocalRoute();

    const to = computed(() => {
      return localeRoute({name: 'todos-todo', params: { todo }})
    })

    return {
      to
    }
  }
})
</script>
