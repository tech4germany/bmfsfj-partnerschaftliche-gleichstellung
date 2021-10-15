<template>
  <div>
    <div v-for="category in categories" :key="category" @click="selectCategory(category)">{{category}}</div>

    <bmfsfj-task v-for="task in tasks" :key="task.id" :task="task.id"></bmfsfj-task>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, useRoute } from '@nuxtjs/composition-api'
import { Task } from '~/utils/Task';
import { useTasks } from '~/utils/useTask';
import { useCategories } from '~/utils/useCategories';

export default defineComponent({
  setup() {
    const selectedCategory = ref()
    const $route = useRoute();

    const search = computed(() => $route.value.query?.search?.toString() ?? '')

    const tasks: Ref<Task[]> = useTasks(computed(() => selectedCategory.value != null ? {
      categories: {
        $contains: selectedCategory.value
      }
    }: {}), search)

    const categories: Ref<string[]> = useCategories()

    function selectCategory(category: string) {
      selectedCategory.value = category
    }

    return {
      selectedCategory,
      selectCategory,
      tasks,
      categories
    }
  }
})
</script>
