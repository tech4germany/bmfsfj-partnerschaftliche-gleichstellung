<template>
  <intro-question :question-id="questionId" :next-location="nextLocation">
    <bmfsfj-toggle-button v-for="type in types" :key="type" class="w-full my-1" :value="isSelected(type)" @input="select(type)">{{ $t(`${questionId}.${type}`) }}</bmfsfj-toggle-button>
  </intro-question>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { HealthInsurance, useUserStore } from '~/store/user';
import { useNextQuestion } from '~/utils/useIntro';

export default defineComponent({
  setup() {
    const questionId = 'healthInsurance';
    const nextLocation = 'tasks'

    const userStore = useUserStore()
    const { goToNextQuestion } = useNextQuestion(nextLocation)

    return {
      nextLocation,
      questionId,
      types: HealthInsurance,
      select: (type: HealthInsurance) => {
        userStore.setHealthInsurance(type);
        goToNextQuestion();
      },
      isSelected: (type: HealthInsurance) => {
        return userStore.healthInsurance === type;
      }
    }
  }
})
</script>
