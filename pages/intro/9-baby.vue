<template>
  <intro-question-select
    question-id="baby"
    :next-location="nextLocation"
    :types="types"
    :has-selection="hasSelection"
    :is-selected="isSelected"
    @input="(type) => select(type)"
  ></intro-question-select>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from '@nuxtjs/composition-api'
import { useUserStore, BabySituation } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const userStore = useUserStore()
    const babySituation = computed(() => userStore.babySituation)
    const nextLocation = computed(() =>
      unref(babySituation) === BabySituation.EXPECTED ? 'intro-10-birthday' : 'intro-11-finished'
    )

    return {
      nextLocation,
      types: Object.keys(BabySituation),
      select: userStore.setBabySituation,
      isSelected: (type: BabySituation) => unref(babySituation) === type,
      hasSelection: computed(() => unref(babySituation) != null),
    }
  },
})
</script>
