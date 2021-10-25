<template>
  <div>
    <bmfsfj-todos-filter></bmfsfj-todos-filter>

    <div class="flex flex-col">
      <div v-for="group in groupedTodos" :key="group.group.getTime()" class="flex flex-col">
        <span v-if="isInFuture(group.group)" class="mt-1">in {{formatDistance(group.group)}}</span>
        <bmfsfj-todo v-for="todo in group.todos" :key="todo.id" class="mt-2" :todo-id="todo.id"></bmfsfj-todo>
      </div>
    </div>

    <button class="absolute shadow-lg bottom-3 w-5 h-5 rounded-full bg-primary-500" style="left: calc(50% - 25px)" @click="notImplemented">
      <font-awesome-icon class="fa-lg text-white" :icon="faPlus" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref } from '@nuxtjs/composition-api'
import { formatDistanceWithOptions, isAfter } from 'date-fns/fp';
import { de, enGB, ru, tr } from 'date-fns/locale'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Todo , groupTodosByDateGroup } from '~/utils/Todo';
import { useTodos } from '~/utils/composables/useTodos';
import { useModuleIds } from '~/utils/composables/useModules';
import { useTodosRouteParameters } from '~/utils/composables/useTodosRouteParameters';
import { useUserStore } from '~/store/user';
import { useI18n } from '~/utils/composables/useI18n';

const locales = {
  de, en: enGB, ru, tr
}

export default defineComponent({
  setup() {
    const $i18n = useI18n();

    const {
      search,
      module: selectedModule,
      user: selectedUser,
      done: doneFilter
    } = useTodosRouteParameters()

    const todos: Ref<Todo[]> = useTodos(selectedModule, search, selectedUser, doneFilter)

    const modules: Ref<string[]> = useModuleIds()

    const userStore = useUserStore();

    const groupedTodos = computed(() => groupTodosByDateGroup(todos.value, new Date(userStore.expectedBirthday ?? 0)))

    return {
      selectedModule,
      todos,
      groupedTodos,
      modules,
      faPlus,
      formatDistance: formatDistanceWithOptions({locale: (locales as any)[$i18n.locale]})(new Date()),
      notImplemented: () => alert('Diese funktion hat es leider nicht in den Prototypen geschafft :('),
      isInFuture: isAfter(new Date())
    }
  }
})
</script>
