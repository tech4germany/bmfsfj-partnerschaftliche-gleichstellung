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
import {
  computed,
  defineComponent,
  unref,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import { useLocalLocation } from '~/utils/composables/useLocalRoute'

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $router = useRouter()
    const localLocation = useLocalLocation()

    const selectedModule = computed(
      () => $route.value.query?.module?.toString() ?? null
    )
    const selectedUser = computed(
      () => $route.value.query?.user?.toString() ?? null
    )
    const doneFilter = computed(() => $route.value.query?.done != null)

    function selectModule(module: string) {
      const location = localLocation({
        query: {
          ...unref($route).query,
          module: unref(module) ?? undefined,
        },
      })

      if (location != null) {
        $router.push(location)
      }
    }

    function selectUser(user: string) {
      const location = localLocation({
        query: {
          ...unref($route).query,
          user: unref(user) ?? undefined,
        },
      })

      if (location != null) {
        $router.push(location)
      }
    }

    function updateDoneFilter(value: boolean) {
      const location = localLocation({
        query: {
          ...unref($route).query,
          done: value ? 'true' : undefined,
        },
      })

      if (location != null) {
        $router.push(location)
      }
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
