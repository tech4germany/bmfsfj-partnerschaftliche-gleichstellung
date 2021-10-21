<template>
  <bmfsfj-card>
    <template #header>
      <div class="w-full flex py-1 px-2">
        <bmfsfj-checkbox class="my-auto" :value="finished" @input="updateFinished">
          <h2 class="text-xl ml-1 my-auto">{{title}}</h2>
        </bmfsfj-checkbox>
      </div>
    </template>
    <nuxt-content
      class="mx-auto"
      :document="document" />

    <nuxt-link :to="localeRoute('/tasks')">
      <font-awesome-icon
          class="self-center mt-2 text-primary-500"
          fixed-width
          size="2x"
          :icon="faArrowLeft"
        />
    </nuxt-link>
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, unref, useRoute } from '@nuxtjs/composition-api'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useTodosStore } from '~/store/todos';
import { useTask } from '~/utils/composables/useTasks';

export default defineComponent({
  setup() {
    const $route = useRoute()
    const taskId = computed(() => $route.value.params.task)

    const task = useTask(taskId);
    const store = useTodosStore()

    return {
      taskId,
      title: computed(() => unref(task)?.title),
      document: computed(() => unref(task)?.document),
      finished: computed(() => unref(task)?.finished),
      updateFinished: (value: boolean) =>
        store.updateTodoFinished({ todoId: unref(taskId), finished: value }),
      faArrowLeft
    }
  }
})
</script>

<style>
.nuxt-content {
  @apply flex flex-col gap-1;
}

.nuxt-content a {
  @apply text-primary-500;
}

.nuxt-content ul {
  @apply list-inside list-disc;
}

.nuxt-content li {
  @apply list-item;
}
</style>
