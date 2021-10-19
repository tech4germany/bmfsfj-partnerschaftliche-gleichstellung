<template>
  <intro-question
    :question-id="questionId"
    :next-location="nextLocation"
    :has-selection="hasSelection"
  >
    <bmfsfj-toggle-button
      v-for="type in types"
      :key="type"
      class="w-full my-1"
      :value="isSelected(type)"
      @input="select(type)"
      >{{ $t(`${questionId}.${type}`) }}</bmfsfj-toggle-button
    >
  </intro-question>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { WorkSituation, useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const questionId = 'work'
    const nextLocation = 'intro-5-healthInsurance'

    const userStore = useUserStore()

    return {
      nextLocation,
      questionId,
      types: WorkSituation,
      select: (type: WorkSituation) => {
        userStore.setWorkSituation(type)
      },
      isSelected: (type: WorkSituation) => {
        return userStore.workSituation === type
      },
      hasSelection: computed(() => userStore.workSituation != null),
    }
  },
})
</script>
