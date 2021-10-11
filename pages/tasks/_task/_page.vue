<template>
  <bmfsfj-card>
    <template #header>
      <todo-link :todo="task">&lt;</todo-link>
      {{content != null ? content.title : ''}}
    </template>
    <nuxt-content
      class="mx-auto"
      :document="content" />
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useTaskPageContent } from '~/utils/useTaskPageContent';

export default defineComponent({
  setup(_props) {
    const $route = useRoute()
    const task = computed(() => $route.value.params.task)
    const page = computed(() => $route.value.params.page)

    const content = useTaskPageContent(task, page)

    return {
      task,
      page,
      content
    }
  }
})
</script>
