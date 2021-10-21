<template>
  <div class="flex">
    <div class="flex">
      <bmfsfj-checkbox class="m-auto" :value="finished" @input="updateFinished"></bmfsfj-checkbox>
    </div>
    <todo-link :todo="taskId" class="flex h-24 bg-gray-200 rounded-xl flex-grow">
      <div class="module-icon-wrapper w-8 flex flex-col ">
        <div v-for="module in modules" :key="module.id" class="module-icon w-8 h-8 flex first:rounded-tl-xl" :style="`--color: ${module.color2}`">
          <font-awesome-icon style="margin: auto" fixed-width :icon="module.icon"></font-awesome-icon>
        </div>
      </div>
      <div class="flex-grow p-2">
        <h4>
          {{ title }}
        </h4>
      </div>
      <div class="w-12 flex h-full">
        <font-awesome-icon size="lg" style="margin: auto" fixed-width :icon="faChevronRight"></font-awesome-icon>
      </div>
    </todo-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef, unref } from '@nuxtjs/composition-api'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTodosStore } from '~/store/todos';
import { useModules } from '~/utils/composables/useModules';
import { Module }  from '~/utils/Module';
import { useTask } from '~/utils/composables/useTasks'
import { Task } from '~/utils/Task';

function useTaskModules(task: Ref<Task | null>): Ref<Module[]> {
  const modules = useModules();

  return computed(() => {
    if (task.value === null) return [];

    const taskModules = task.value.modules

    return modules.value.filter(module => taskModules.find((id) => id === module.id) != null);
  });
}

export default defineComponent({
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
    const store = useTodosStore()

    return {
      taskId,
      title: computed(() => unref(task)?.title),
      finished: computed(() => unref(task)?.finished),
      modules: useTaskModules(task),
      updateFinished: (value: boolean) =>
        store.updateTodoFinished({ todoId: unref(taskId), finished: value }),
      faChevronRight
    }
  },
})
</script>

<style scoped>
.module-icon {
  @apply text-white;
  background-color: var(--color);
}

.module-icon:nth-child(3) {
  @apply rounded-bl-xl;
}

</style>
