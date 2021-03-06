<template>
  <label
    class="flex-grow bg-white rounded-full text-black self-center flex"
  >
    <font-awesome-icon
      class="self-center mx-1 text-primary-500"
      :icon="faSearch"
    />
    <input
      class="p-1 flex-grow"
      :value="searchTerm"
      type="search"
      inputmode="latin"
      :placeholder="$t(`search`)"
      @submit="onSubmitSearch"
      @change="onSearchChange"
    />
    <button @click="onSubmitSearch">
      <font-awesome-icon
        class="self-center mx-1 text-primary-500"
        :icon="faArrowCircleRight"
      />
    </button>
  </label>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  unref,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import { faSearch, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useLocalLocation } from '~/utils/composables/useLocalRoute'

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $router = useRouter()
    const localLocation = useLocalLocation()

    const searchTerm = computed(
      () => unref($route).query?.search?.toString() ?? ''
    )

    const newSearchTerm = ref('')

    function search(searchTerm: string) {
      const route = localLocation({
        path: 'todos',
        query: {
          ... unref($route).query,
          search: searchTerm !== '' ? searchTerm : undefined
        },
      })

      if (route != null) {
        $router.push(route)
      }
    }

    function onSearchChange(a: InputEvent) {
      newSearchTerm.value = (a.target as HTMLInputElement).value

      if (unref($route).path === '/todos') {
        search(unref(newSearchTerm))
      }
    }

    function onSubmitSearch() {
      const searchTerm = unref(newSearchTerm);
      if( searchTerm.length > 0 ) {
        search(searchTerm)
      }
    }

    return {
      searchTerm,
      search,
      onSearchChange,
      onSubmitSearch,
      faSearch,
      faArrowCircleRight,
    }
  },
})
</script>
