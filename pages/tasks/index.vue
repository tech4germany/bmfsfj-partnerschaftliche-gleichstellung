<template>
  <div>
    <div class="flex w-full gap-2">
      <bmfjfs-chip-select class="flex-grow" placeholder="Modul" :items="categories" :value="selectedCategory" @input="selectCategory"><template #default="{ item }">{{$t(`modules.${item}`)}}</template></bmfjfs-chip-select>
      <bmfsfj-toggle-button class="rounded-full" :value="false">Zeitlich</bmfsfj-toggle-button>
      <bmfsfj-toggle-button class="rounded-full" :value="true">Meine Todos</bmfsfj-toggle-button>
      <!--<bmfjfs-chip-select class="flex-grow" ><template #default="{item}">{{item}}</template></bmfjfs-chip-select>-->
    </div>

    <bmfsfj-task v-for="task in tasks" :key="task.id" :task="task.id"></bmfsfj-task>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, useRoute } from '@nuxtjs/composition-api'
import { Task } from '~/utils/Task';
import { useTasks } from '~/utils/useTask';
import { useModuleIds } from '~/utils/useModules';

export default defineComponent({
  setup() {
    const selectedCategory = ref()
    const $route = useRoute();

    const search = computed(() => $route.value.query?.search?.toString() ?? '')

    const tasks: Ref<Task[]> = useTasks(computed(() => selectedCategory.value != null ? {
      modules: {
        $contains: selectedCategory.value
      }
    }: {}), search)

    const categories: Ref<string[]> = useModuleIds()

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
