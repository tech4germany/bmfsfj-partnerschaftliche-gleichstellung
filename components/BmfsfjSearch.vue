<template>
  <label class="flex-grow bg-white rounded-full m-2 text-black self-center p-1 flex">
    <font-awesome-icon class="self-center mx-2 text-primary-500" :icon="faSearch" />
    <input class="p-1 mr-2 flex-grow" type="search" inputmode="latin" placeholder="Suche"/>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  setup() {
    return {
      faSearch
    }
  },
})
</script>
