<template>
  <bmfsfj-select-chip class="w-1/3 h-11 rounded-xl" :items="modules" :value="value" v-bind="attrs" @input="selectModule">
    <template #option="{ label }">{{$t(`modules.${label}`)}}</template>
    <template #selected-option="{ label }">
      <bmfsfj-icon-module class="w-3 h-3 text-xs rounded-full" :module-id="label"></bmfsfj-icon-module>
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
  setup(_props, { emit, attrs }) {
    const modules: Ref<string[]> = useModuleIds()

    function selectModule(module: string) {
      emit('input', module)
    }

    return {
      attrs,
      selectModule,
      modules
    }
  }
})
</script>
