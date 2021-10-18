<template>
  <bmfsfj-card class="my-2">
    <template #header>
      <div class="flex dark flex-row">
        <bmfsfj-checkbox
          class=""
          :value="finished"
          :label="title"
          @input="updateFinished"
        ></bmfsfj-checkbox>
      </div>
    </template>
    <todo-link :todo="taskId">Go!</todo-link>
    <span>
      <li v-for="module in modules" :key="module">{{ $t(`modules.${module}`) }}</li>
    </span>
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, unref } from '@nuxtjs/composition-api'
import { useTodosStore } from '~/store/todos';
import { useTask } from '~/utils/composables/useTasks'

export default defineComponent({
  props: {
    task: {
      default: 'mutterschaftsgeld-beantragen',
      type: String,
      required: true,
    },
  },
  setup(props) {
    const taskId = toRef(props, 'task')

    const task = useTask(taskId);
    const store = useTodosStore()

    return {
      taskId,
      title: computed(() => unref(task)?.title),
      finished: computed(() => unref(task)?.finished),
      modules: computed(() => unref(task)?.modules),
      updateFinished: (value: boolean) =>
        store.updateTodoFinished({ todoId: unref(taskId), finished: value })
    }
  },
})
</script>
