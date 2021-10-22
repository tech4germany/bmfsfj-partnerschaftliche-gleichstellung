<template>
  <bmfsfj-select-chip class="w-1/3 h-10 rounded-xl" placeholder="Modul" :items="categories" :value="value" @input="selectCategory">
    <template #option="{ label }">{{$t(`modules.${label}`)}}</template>
    <template #selected-option="{ label }">
      <bmfsfj-icon-module class="w-6 h-6 text-xs rounded-full" :module-id="label"></bmfsfj-icon-module>
    </template>
  </bmfsfj-select-chip>
</template>

<script lang="ts">
import { defineComponent, Ref } from '@nuxtjs/composition-api'
import { useModuleIds } from '~/utils/composables/useModules';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null
    }
  },
  setup(_props, { emit }) {
    const categories: Ref<string[]> = useModuleIds()

    function selectCategory(category: string) {
      emit('input', category)
    }

    return {
      selectCategory,
      categories
    }
  }
})
</script>
