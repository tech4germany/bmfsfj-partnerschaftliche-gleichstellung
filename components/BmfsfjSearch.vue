<template>
  <label
    class="flex-grow bg-white rounded-full m-2 text-black self-center p-1 flex"
  >
    <font-awesome-icon
      class="self-center mx-2 text-primary-500"
      :icon="faSearch"
    />
    <input
      class="p-1 mr-2 flex-grow"
      :value="searchTerm"
      type="search"
      inputmode="latin"
      placeholder="Suche"
      @change="search"
    />
  </label>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $router = useRouter()

    const searchTerm = computed(
      () => $route.value.query?.search?.toString() ?? ''
    )

    function search(a: InputEvent) {
      $router.push({
        query: {
          search: (a.target as HTMLInputElement).value,
        },
      })
    }

    return {
      searchTerm,
      search,
      faSearch,
    }
  },
})
</script>
