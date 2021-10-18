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
import { computed, defineComponent, Ref, unref, useRoute, useRouter } from '@nuxtjs/composition-api'
import { Task } from '~/utils/Task';
import { useTasks } from '~/utils/composables/useTasks';
import { useModuleIds } from '~/utils/composables/useModules';
import { useLocalLocation } from '~/utils/composables/useLocalRoute';

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $router = useRouter()
    const localLocation = useLocalLocation()

    const search = computed(() => $route.value.query?.search?.toString() ?? '')
    const selectedCategory = computed(() => $route.value.query?.module?.toString() ?? null)

    const tasks: Ref<Task[]> = useTasks(computed(() => selectedCategory.value != null ? {
      modules: {
        $contains: selectedCategory.value
      }
    }: {}), search)

    const categories: Ref<string[]> = useModuleIds()

    function selectCategory(category: string) {
      const location = localLocation({
        query: {
          ... unref($route).query,
          module: unref(category) ?? undefined
        }
      });

      if (location != null) {
        $router.push(location)
      }
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
