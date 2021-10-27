<template>
  <bmfsfj-intro-question
    :question-id="questionId"
    :next-location="nextLocation"
    :has-selection="hasSelection"
  >
    <div class="flex flex-col gap-2">
      <bmfsfj-intro-toggle-button
        v-for="type in types"
        :key="type"
        class="bmfsfj-intro-toggle-button w-full"
        :value="isSelected(type)"
        :multi="multi"
        @input="$emit('input', type)"
        >{{ $t(`${questionId}.${type}`) }}</bmfsfj-intro-toggle-button
      >
    </div>
  </bmfsfj-intro-question>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    questionId: {
      type: String,
      required: true
    },
    nextLocation: {
      type: String,
      required: true
    },
    hasSelection: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Function,
      required: true
    },
    multi: {
      type: Boolean,
      default: false
    },
    types: {
      type: Array,
      default: () => []
    }
  },
})
</script>

<style>
.bmfsfj-intro-toggle-button *:first-letter {
  @apply capitalize;
}
</style>
