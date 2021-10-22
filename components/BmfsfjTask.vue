<template>
  <div class="flex">
    <div class="flex">
      <bmfsfj-checkbox class="m-auto" :value="finished" @input="updateFinished"></bmfsfj-checkbox>
    </div>
    <todo-link :todo="taskId" class="flex h-24 bg-gray-200 rounded-xl flex-grow">
      <bmfsfj-modul-icon-bar class="rounded-l-xl" :modules="modules"></bmfsfj-modul-icon-bar>
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
    </todo-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef, unref } from '@nuxtjs/composition-api'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import BmfsfjUserIcon from './BmfsfjUserIcon.vue';
import { useTodosStore } from '~/store/todos';
import { useTask } from '~/utils/composables/useTasks'
import { useTaskModules } from '~/utils/composables/useModules';

export default defineComponent({
  components: { BmfsfjUserIcon },
  props: {
    task: {
      default: 'mutterschaftsgeld-beantragen',
      type: String,
      required: true,
    },
  },
  setup(props) {
    const taskId = toRef(props, 'task')

    const task = useTask(taskId);
    const store = useTodosStore();
    const assignees = computed(() => Object.entries(unref(task)?.assignees ?? {}).filter(([_id, status]) => status).map(([id]) => id))

    return {
      taskId,
      title: computed(() => unref(task)?.title),
      finished: computed(() => unref(task)?.finished),
      date: computed(() => unref(task)?.recommendedDateFromExpectedBirth),
      modules: useTaskModules(task),
      assignees,
      updateFinished: (value: boolean) =>
        store.updateTodoFinished({ todoId: unref(taskId), finished: value }),
      faChevronRight
    }
  },
})
</script>
