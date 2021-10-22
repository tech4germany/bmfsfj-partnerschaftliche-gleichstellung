<template>
  <bmfsfj-intro-question
    :question-id="questionId"
    :next-location="nextLocation"
    :has-selection="hasSelection"
  >
    <bmfsfj-intro-toggle-button
      class="w-full my-1"
      :value="relationship === true"
      @input="yes"
      >{{ $t('yes') }}</bmfsfj-intro-toggle-button
    >
    <bmfsfj-intro-toggle-button
      class="w-full my-1"
      :value="relationship === false"
      @input="no"
      >{{ $t('no') }}</bmfsfj-intro-toggle-button
    >
  </bmfsfj-intro-question>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from '@nuxtjs/composition-api'
import { useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const relationship = computed(() => userStore.relationship)
    const questionId = 'relationship'
    const nextLocation = computed(() =>
      unref(relationship) ? 'intro-7-partner-name' : 'intro-9-baby'
    )

    const userStore = useUserStore()

    return {
      questionId,
      nextLocation,
      yes: () => {
        userStore.setRelationship(true)
      },
      no: () => {
        userStore.setRelationship(false)
      },
      relationship: computed(() => userStore.relationship),
      hasSelection: computed(() => userStore.relationship != null),
    }
  },
})
</script>
