<template>
  <intro-question-select
    question-id="healthInsurance"
    next-location="intro-6-relationship"
    :has-selection="hasSelection"
    :is-selected="isSelected"
    :types="types"
    @input="(type) => select(type)"
  ></intro-question-select>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { useUserStore, HealthInsurance } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const userStore = useUserStore()

    return {
      types: Object.keys(HealthInsurance),
      select: userStore.setHealthInsurance,
      isSelected: (type: HealthInsurance) => userStore.healthInsurance === type,
      hasSelection: computed(() => userStore.healthInsurance != null),
    }
  },
})
</script>
