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
      <li v-for="category in categories" :key="category">{{ category }}</li>
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

    const { title, categories, document, finished, updateFinished } =
      useUserTask(taskId)

    return {
      taskId,
      categories,
      title,
      document,
      finished,
      updateFinished,
    }
  },
})
</script>
