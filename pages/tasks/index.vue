<template>
  <div>
    <bmfsfj-card v-for="task in tasks" :key="task.dir">
      <template #header>{{task.title}}</template>
      <nuxt-link :to="`${task.dir}/`">Go</nuxt-link>
    </bmfsfj-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useTasks } from '~/utils/useTasks';

export default defineComponent({
  setup(_props) {
    const tasks = useTasks()

    return {
      tasks
    }
  }
})
</script>
