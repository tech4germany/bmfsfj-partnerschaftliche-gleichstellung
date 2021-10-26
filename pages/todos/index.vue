<template>
  <div>
    <bmfsfj-todos-filter></bmfsfj-todos-filter>

    <div class="flex flex-col">
      <div v-for="group in groupedTodos" :key="group.group" class="flex flex-col">
        <span class="mt-1">{{$t(`timeline.${group.group}`)}}</span>
        <bmfsfj-todo v-for="todo in group.todos" :key="todo.id" class="mt-2" :todo-id="todo.id"></bmfsfj-todo>
      </div>
    </div>

    <button class="absolute shadow-lg bottom-3 w-5 h-5 rounded-full bg-primary-500" style="left: calc(50% - 25px)" @click="notImplemented">
      <font-awesome-icon class="fa-lg text-white" :icon="faPlus" />
    </button>
  </div>
</template>

<script lang="ts">
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { computed, defineComponent, Ref } from '@nuxtjs/composition-api';
import { isAfter } from 'date-fns/fp';
import { useUserStore } from '~/store/user';
import { useDistanceFormat } from '~/utils/composables/useI18n';
import { useModuleIds } from '~/utils/composables/useModules';
import { useTodos } from '~/utils/composables/useTodos';
import { useTodosRouteParameters } from '~/utils/composables/useTodosRouteParameters';
import { groupTodosByDateGroup, Todo } from '~/utils/Todo';

export default defineComponent({
  setup() {
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
    const formatDistance = useDistanceFormat()

    return {
      selectedModule,
      todos,
      groupedTodos,
      modules,
      faPlus,
      formatDistance: formatDistance(new Date()),
      notImplemented: () => alert('Diese funktion hat es leider nicht in den Prototypen geschafft :('),
      isInFuture: isAfter(new Date())
    }
  }
})
</script>
