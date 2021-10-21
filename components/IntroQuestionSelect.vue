<template>
  <intro-question
    :question-id="questionId"
    :next-location="nextLocation"
    :has-selection="hasSelection"
  >
    <div class="flex flex-col gap-2">
      <bmfsfj-toggle-button
        v-for="type in types"
        :key="type"
        class="w-full"
        :value="isSelected(type)"
        :multi="multi"
        @input="$emit('input', type)"
        >{{ $t(`${questionId}.${type}`) }}</bmfsfj-toggle-button
      >
    </div>
  </intro-question>
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
