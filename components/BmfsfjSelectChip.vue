<template>
  <div class="flex flex-row border-2 border-primary-500 rounded-full">
    <button v-if="value != null" class="ml-0.5" @click="unselect"><font-awesome-icon class="text-primary-500" :icon="faTimesCircle" /></button>
    <v-select class="flex-grow" :options="items" :clearable="false" :searchable="false" v-bind="attrs" :value="value" @input="onInput">
      <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData"><slot :name="name" v-bind="slotData" /></template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'
import { faTimesCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import vSelect from 'vue-select'

export default defineComponent({
  components: {
    vSelect
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array as PropType<{label: string, value: unknown}[] | unknown[]>,
      default: () => []
    },
    value: {
      type: null as unknown as PropType<unknown>,
      default: null
    }
  },
  setup(_props, { attrs, emit }) {
    function onInput(e: unknown) {
      emit('input', e)
    }
    function unselect() {
      emit('input', null)
    }

    return {
      attrs,
      onInput,
      unselect,
      faTimesCircle,
      faAngleDown
    }
  },
})
</script>

<style>
.vs__dropdown-toggle {
  border: unset;
  border-radius: unset;
  @apply flex-grow
}

.v-select {
  @apply flex flex-col
}

.vs__search {
  @apply text-center p-0;
}

.vs__dropdown-menu .vs__dropdown-option--selected,
.vs__dropdown-menu .vs__dropdown-option--highlight {
  @apply bg-primary-500 text-white
}
</style>
