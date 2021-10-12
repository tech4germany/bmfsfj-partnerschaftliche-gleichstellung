<template>
  <div>
    <bmfsfj-task v-for="task in tasks" :key="task.id" :task="task.id"></bmfsfj-task>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref } from '@nuxtjs/composition-api'
import { Task } from '~/utils/Task';
import { useTasks } from '~/utils/useTask';

export default defineComponent({
  setup() {
    const tasks: Ref<Task[]> = useTasks()

    return {
      tasks
    }
  }
})
</script>
