<template>
  <div>
    <bmfsfj-todos-filter></bmfsfj-todos-filter>

    <div class="flex flex-col">
      <div v-for="group in groupedTasks" :key="group.group.getTime()" class="flex flex-col">
        <span v-if="isInFuture(group.group)" class="mt-1">in {{formatDistance(group.group)}}</span>
        <bmfsfj-task v-for="task in group.todos" :key="task.id" class="mt-2" :task="task.id"></bmfsfj-task>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, unref, useRoute, useRouter } from '@nuxtjs/composition-api'
import { formatDistanceWithOptions, isAfter } from 'date-fns/fp';
import { de, enGB, ru, tr } from 'date-fns/locale'
import { Task , groupTasksByDateGroup } from '~/utils/Task';
import { useTasks } from '~/utils/composables/useTasks';
import { useModuleIds } from '~/utils/composables/useModules';
import { useLocalLocation } from '~/utils/composables/useLocalRoute';

import { useI18n } from '~/components/BmfsfjLanguageSelect.vue';
import { useUserStore } from '~/store/user';

const locales = {
  de, en: enGB, ru, tr
}

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $router = useRouter()
    const localLocation = useLocalLocation()
    const $i18n = useI18n();

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

    const userStore = useUserStore();

    const groupedTasks = computed(() => groupTasksByDateGroup(tasks.value, new Date(userStore.expectedBirthday ?? 0)))

    return {
      selectedCategory,
      selectCategory,
      tasks,
      groupedTasks,
      categories,
      formatDistance: formatDistanceWithOptions({locale: (locales as any)[$i18n.locale]})(new Date()),
      isInFuture: isAfter(new Date())
    }
  }
})
</script>
