<template>
  <bmfsfj-card>
    <template #header>{{content != null ? content.title : ''}}</template>
    <nuxt-content
      class="mx-auto"
      :document="content" />
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useTaskContent } from '~/utils/useTaskContent';

export default defineComponent({
  setup(_props) {
    const $route = useRoute()
    const task = computed(() => $route.value.params.task)

    const content = useTaskContent(task)

    return {
      task,
      content
    }
  }
})
</script>
