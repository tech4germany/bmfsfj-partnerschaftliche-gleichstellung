<template>
  <bmfsfj-intro-question-select
    question-id="work"
    next-location="intro-5-healthInsurance"
    :has-selection="hasSelection"
    :is-selected="isSelected"
    :types="types"
    @input="(type) => select(type)"
  ></bmfsfj-intro-question-select>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { WorkSituation, useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const userStore = useUserStore()

    return {
      types: Object.keys(WorkSituation),
      select: userStore.setWorkSituation,
      isSelected: (type: WorkSituation) => userStore.workSituation === type,
      hasSelection: computed(() => userStore.workSituation != null),
    }
  },
})
</script>
