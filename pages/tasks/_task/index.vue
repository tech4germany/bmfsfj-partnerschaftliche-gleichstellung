<template>
  <bmfsfj-card>
    <template #header>{{title}}</template>
    <bmfsfj-checkbox :value="finished" label="TEST 3" @input="updateFinished"></bmfsfj-checkbox>
    <nuxt-content
      class="mx-auto"
      :document="document" />
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, unref, useRoute } from '@nuxtjs/composition-api'
import { useTodosStore } from '~/store/todos';
import { useTask } from '~/utils/composables/useTasks';

export default defineComponent({
  setup() {
    const $route = useRoute()
    const taskId = computed(() => $route.value.params.task)

    const task = useTask(taskId);
    const store = useTodosStore()

    return {
      taskId,
      title: computed(() => unref(task)?.title),
      document: computed(() => unref(task)?.document),
      finished: computed(() => unref(task)?.finished),
      updateFinished: (value: boolean) =>
        store.updateTodoFinished({ todoId: unref(taskId), finished: value })
    }
  }
})
</script>
