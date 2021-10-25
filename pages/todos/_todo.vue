<template>
  <bmfsfj-card>
    <template #header>
      <div class="w-full flex h-24">
        <bmfsfj-icon-bar-module class="rounded-tl min-w-max" :module-ids="modules"></bmfsfj-icon-bar-module>
        <bmfsfj-checkbox class="py-1 px-2 my-auto flex-grow" :value="finished" @input="updateFinished">
          <h2 class="text-xl ml-1 my-auto">{{title}}</h2>
        </bmfsfj-checkbox>
      </div>
    </template>
    <bmfsfj-content-area>
      <nuxt-content
        class="mx-auto"
        :document="document" />
    </bmfsfj-content-area>

    <nuxt-link :to="localeRoute('/todos')">
      <font-awesome-icon
          class="self-center mt-2 mb-2 text-primary-500"
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
import { useTodo } from '~/utils/composables/useTodos';

export default defineComponent({
  setup() {
    const $route = useRoute()
    const todoId = computed(() => $route.value.params.todo)

    const todo = useTodo(todoId);
    const store = useTodosStore()

    return {
      todoId,
      title: computed(() => unref(todo)?.title),
      document: computed(() => unref(todo)?.document),
      finished: computed(() => unref(todo)?.finished),
      modules: computed(() => unref(todo)?.modules),
      updateFinished: (value: boolean) =>
        store.updateTodoFinished({ todoId: unref(todoId), finished: value }),
      faArrowLeft
    }
  }
})
</script>
