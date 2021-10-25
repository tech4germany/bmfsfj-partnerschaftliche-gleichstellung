<template>
  <div class="flex flex-row gap-1 my-1">
    <bmfsfj-toggle-button
      v-for="user in users"
      :key="user.id"
      class="user-icon w-10 h-10 rounded-full"
      :class="{ checked: isAssigned(user.id) }"
      :value="isAssigned(user.id)"
      @input="toggleAssigned(user.id)"
    >
      {{ user.name.toUpperCase().substring(0, 2) }}
    </bmfsfj-toggle-button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  Ref,
  toRef,
  unref,
} from '@nuxtjs/composition-api'
import { todoIdInjectionKey } from '~/pages/todos/_todo.vue'
import { useTodosStore } from '~/store/todos'
import { useTodo } from '~/utils/composables/useTodos'
import { useUsers } from '~/utils/composables/useUsers'

export default defineComponent({
  props: {
    todoId: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const propsTodoId = toRef(props, 'todoId')
    const injectedTodoId = inject(todoIdInjectionKey, null) as unknown as Ref<
      string | null
    >
    const todoId = computed(() => propsTodoId.value ?? injectedTodoId.value)

    const todo = useTodo(todoId)
    const store = useTodosStore()
    const users = useUsers()
    const assignees = computed(() => unref(todo)?.assignees)

    function isAssigned(userId: string): boolean {
      return unref(assignees)?.[userId] ?? false
    }

    function toggleAssigned(userId: string) {
      store.toggleTodoAssignee({ todoId: unref(todoId), userId })
    }

    return {
      users,
      isAssigned,
      toggleAssigned,
    }
  },
})
</script>

<style scoped>
.user-icon {
  @apply bg-transparent text-primary-500 border-2 border-primary-500;
}

.user-icon.checked {
  @apply bg-primary-500 text-white;
}
</style>
