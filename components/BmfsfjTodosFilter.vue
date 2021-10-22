<template>
  <div class="flex flex-row w-full gap-1">
    <bmfsfj-select-module
      class="w-1/3 rounded-xl"
      :value="selectedModule"
      @input="selectModule"
    ></bmfsfj-select-module>
    <bmfsfj-select-user
      class="w-1/3 rounded-xl"
      :value="selectedUser"
      @input="selectUser"
    ></bmfsfj-select-user>
    <bmfsfj-toggle-button
      class="w-1/3 rounded-xl border-2 border-primary-500"
      :class="{ checked: doneFilter }"
      :value="doneFilter"
      @input="updateDoneFilter"
      >Erledigt</bmfsfj-toggle-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, unref } from '@nuxtjs/composition-api'
import { useTodosRouteParameters } from '~/utils/composables/useTodosRouteParameters'
import { useUpdateQueryParameters } from '~/utils/composables/useUpdateQueryParameters'

export default defineComponent({
  setup() {
    const updateQueryParameters = useUpdateQueryParameters()

    const {
      module: selectedModule,
      user: selectedUser,
      done: doneFilter,
    } = useTodosRouteParameters()

    function selectModule(moduleId: string) {
      updateQueryParameters({
        module: unref(moduleId) ?? undefined,
      })
    }

    function selectUser(userId: string) {
      updateQueryParameters({
        user: unref(userId) ?? undefined,
      })
    }

    function updateDoneFilter(value: boolean) {
      updateQueryParameters({
        done: value ? 'true' : undefined,
      })
    }

    return {
      selectedModule,
      selectModule,
      doneFilter,
      updateDoneFilter,
      selectedUser,
      selectUser,
    }
  },
})
</script>

<style scoped>
.checked {
  @apply bg-primary-500 text-white;
}
</style>
