<template>
  <bmfsfj-card>
    <template #header>{{title}}</template>
    <bmfsfj-checkbox :value="finished" label="TEST 3" @input="updateFinished"></bmfsfj-checkbox>
    <nuxt-content
      class="mx-auto"
      :document="task != null ? task.document : null" />
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useTaskContent } from '~/utils/useTaskContent';
import { useTodosStore } from '~/store/todos';

export default defineComponent({
  setup(_props) {
    const $route = useRoute()
    const taskId = computed(() => $route.value.params.task)

    const task = useTaskContent(taskId)
    const todosStore = useTodosStore()

    return {
      taskId,
      task,
      title: computed(() => task.value?.title),
      document: computed(() => task.value && ('document' in task.value) ? task.value?.document : null),
      finished: computed(() => todosStore.todos[taskId.value]?.finished ?? false),
      updateFinished: (value: boolean) => todosStore.updateTodoFinished({ todo: taskId.value, finished: value })
    }
  }
})
</script>
