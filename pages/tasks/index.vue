<template>
  <div>
    <bmfsfj-card v-for="task in tasks" :key="task.dir">
      <template #header>{{task.title}}</template>
      <todo-link :todo="task.id">Go!</todo-link>
      <span>
        <li v-for="category in task.categories" :key="category">{{category}}</li>
      </span>
    </bmfsfj-card>
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
