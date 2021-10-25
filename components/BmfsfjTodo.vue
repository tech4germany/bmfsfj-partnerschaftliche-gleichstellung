<template>
  <div class="flex">
    <div class="flex">
      <bmfsfj-checkbox class="m-auto" :value="finished" @input="updateFinished"></bmfsfj-checkbox>
    </div>
    <bmfsfj-todo-link :todo="todoId" class="flex h-24 bg-background-300 rounded-xl flex-grow">
      <bmfsfj-icon-bar-module class="rounded-l-xl min-w-max" :module-ids="modules"></bmfsfj-icon-bar-module>
      <div class="flex-grow px-2 py-1 flex flex-col">
        <h4 class="flex-grow">
          {{ title }}
        </h4>

        <div class="flex flex-row gap-1">
          <bmfsfj-user-icon
            v-for="assignes in assignees"
            :key="assignes"
            :user-id="assignes"
          ></bmfsfj-user-icon>
        </div>
      </div>
      <div class="w-12 flex h-full">
        <font-awesome-icon size="lg" style="margin: auto" fixed-width :icon="faChevronRight"></font-awesome-icon>
      </div>
    </bmfsfj-todo-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, unref } from '@nuxtjs/composition-api'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import BmfsfjUserIcon from './BmfsfjUserIcon.vue';
import { useTodosStore } from '~/store/todos';
import { useTodo } from '~/utils/composables/useTodos'

export default defineComponent({
  components: { BmfsfjUserIcon },
  props: {
    todoId: {
      default: 'mutterschaftsgeld-beantragen',
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { todoId } = toRefs(props)

    const todo = useTodo(todoId);
    const store = useTodosStore();
    const assignees = computed(() => Object.entries(unref(todo)?.assignees ?? {}).filter(([_id, status]) => status).map(([id]) => id))

    function updateFinished(value: boolean) {
      return store.updateTodoFinished({ todoId: unref(todoId), finished: value })
    }

    return {
      title: computed(() => unref(todo)?.title),
      finished: computed(() => unref(todo)?.finished),
      date: computed(() => unref(todo)?.recommendedDateFromExpectedBirth),
      modules: computed(() => unref(todo)?.modules),
      assignees,
      updateFinished,
      faChevronRight
    }
  },
})
</script>
