<template>
  <intro-question :question-id="questionId" :next-location="nextLocation" :has-selection="hasSelection">
    <bmfsfj-toggle-button v-for="type in types" :key="type" class="w-full my-1" :value="isSelected(type)" @input="select(type)">{{ $t(`${questionId}.${type}`) }}</bmfsfj-toggle-button>
  </intro-question>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { HealthInsurance, useUserStore } from '~/store/user';

export default defineComponent({
  layout: 'intro',
  setup() {
    const questionId = 'healthInsurance';
    const nextLocation = 'tasks'

    const userStore = useUserStore()

    return {
      nextLocation,
      questionId,
      types: HealthInsurance,
      select: (type: HealthInsurance) => {
        userStore.setHealthInsurance(type);
      },
      isSelected: (type: HealthInsurance) => {
        return userStore.healthInsurance === type;
      },
      hasSelection: computed(() => userStore.healthInsurance != null)
    }
  }
})
</script>
