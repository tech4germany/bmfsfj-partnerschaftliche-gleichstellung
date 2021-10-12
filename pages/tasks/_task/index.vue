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
import { useUserTask } from '~/utils/useTask';

export default defineComponent({
  setup() {
    const $route = useRoute()
    const taskId = computed(() => $route.value.params.task)

    const { task, title, document, finished, updateFinished } = useUserTask(taskId)

    return {
      taskId, task, title, document, finished, updateFinished
    }
  }
})
</script>
