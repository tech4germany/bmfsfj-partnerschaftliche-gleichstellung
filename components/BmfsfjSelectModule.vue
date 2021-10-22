<template>
  <bmfjfs-chip-select class="w-1/3 h-10 rounded-xl" placeholder="Modul" :items="categories" :value="value" @input="selectCategory">
    <template #option="{ label }">{{$t(`modules.${label}`)}}</template>
    <template #selected-option="{ label }">
      <bmfsfj-module-icon class="w-6 h-6 text-xs rounded-full" :module-id="label"></bmfsfj-module-icon>
    </template>
  </bmfjfs-chip-select>
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
