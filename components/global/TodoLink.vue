<template>
  <nuxt-link :to="to"><slot></slot></nuxt-link>
</template>

<script lang="ts">
import { wrapProperty } from '@nuxtjs/composition-api';
import { computed, defineComponent } from '@vue/composition-api'
export const useLocalRoute = wrapProperty('localeRoute', false)

export default defineComponent({
  props: {
    todo: {
      type: String,
      default: null
    },
    page: {
      type: String,
      default: null
    }
  },
  setup({ todo, page }) {
    const localeRoute = useLocalRoute();

    const to = computed(() => {
      if (page == null) {
        return localeRoute({name: 'tasks-task', params: { task: todo }})
      }

      return localeRoute({name: 'tasks-task-page', params: { page }})
    })

    return {
      to
    }
  }
})
</script>
