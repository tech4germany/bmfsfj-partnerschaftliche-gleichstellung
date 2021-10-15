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
import { defineComponent, toRef } from '@nuxtjs/composition-api'
import { useUserTask } from '~/utils/useTask'

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

    const { title, modules, document, finished, updateFinished } =
      useUserTask(taskId)

    return {
      taskId,
      modules,
      title,
      document,
      finished,
      updateFinished,
    }
  },
})
</script>
