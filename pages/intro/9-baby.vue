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
import { computed, defineComponent, unref } from '@nuxtjs/composition-api'
import { BabySituation, useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const questionId = 'baby'
    const nextLocation = 'intro-10-birthday'

    const userStore = useUserStore()

    const babySituation = computed(() => userStore.babySituation)

    return {
      nextLocation,
      questionId,
      types: BabySituation,
      select: (type: BabySituation) => {
        userStore.setBabySituation(type)
      },
      isSelected: (type: BabySituation) => {
        return unref(babySituation) === type
      },
      hasSelection: computed(() => userStore.babySituation != null),
    }
  },
})
</script>
