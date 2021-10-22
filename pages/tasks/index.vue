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
import { computed, defineComponent, Ref, useRoute } from '@nuxtjs/composition-api'
import { formatDistanceWithOptions, isAfter } from 'date-fns/fp';
import { de, enGB, ru, tr } from 'date-fns/locale'
import { Task , groupTasksByDateGroup } from '~/utils/Task';
import { useTasks } from '~/utils/composables/useTasks';
import { useModuleIds } from '~/utils/composables/useModules';

import { useI18n } from '~/components/BmfsfjLanguageSelect.vue';
import { useUserStore } from '~/store/user';

const locales = {
  de, en: enGB, ru, tr
}

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $i18n = useI18n();

    const search = computed(() => $route.value.query?.search?.toString() ?? '')
    const selectedCategory = computed(() => $route.value.query?.module?.toString() ?? null)
    const selectedUser = computed(
      () => $route.value.query?.user?.toString() ?? null
    )
    const doneFilter = computed(() => $route.value.query?.done != null)

    const tasks: Ref<Task[]> = useTasks(selectedCategory, search, selectedUser, doneFilter)

    const categories: Ref<string[]> = useModuleIds()

    const userStore = useUserStore();

    const groupedTasks = computed(() => groupTasksByDateGroup(tasks.value, new Date(userStore.expectedBirthday ?? 0)))

    return {
      selectedCategory,
      tasks,
      groupedTasks,
      categories,
      formatDistance: formatDistanceWithOptions({locale: (locales as any)[$i18n.locale]})(new Date()),
      isInFuture: isAfter(new Date())
    }
  }
})
</script>
