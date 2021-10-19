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

<style>
h2#wo::before {
  display:inline-block;
  font-size:inherit;
  height:1em;
  overflow:visible;
  vertical-align:-.125em;

  /* fa-w-14 */
  width:.875em;

  content: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='map-marker' class='svg-inline--fa fa-map-marker fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='currentColor' d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z'%3E%3C/path%3E%3C/svg%3E");

  /* Margin */
  margin-right:.75rem;
}
</style>
