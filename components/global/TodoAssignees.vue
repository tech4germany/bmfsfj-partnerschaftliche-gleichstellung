<template>
  <div class="flex flex-row gap-1">
    <custom-toggle-button
      v-for="user in users"
      :key="user.id"
      class="user-icon w-10 h-10 rounded-full"
      :class="{ checked: isAssigned(user.id) }"
      :value="isAssigned(user.id)"
      @input="toggleAssigned(user.id)"
    >
      {{ user.name.toUpperCase().substring(0, 2) }}
    </custom-toggle-button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  unref,
} from '@nuxtjs/composition-api'
import { useTodosStore } from '~/store/todos'
import { useTask } from '~/utils/composables/useTasks'
import { useUsers } from '~/utils/composables/useUsers'

export default defineComponent({
  props: {
    todo: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const { todo } = toRefs(props)
    const task = useTask(todo)
    const store = useTodosStore()
    const users = useUsers()
    const assignees = computed(() => unref(task)?.assignees)

    function isAssigned(userId: string): boolean {
      return unref(assignees)?.[userId] ?? false
    }

    function toggleAssigned(userId: string) {
      store.toggleTodoAssignee({ todoId: unref(todo), userId })
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
  @apply bg-white text-primary-500 border-2 border-primary-500;
}

.user-icon.checked {
  @apply bg-primary-500 text-white;
}
</style>
