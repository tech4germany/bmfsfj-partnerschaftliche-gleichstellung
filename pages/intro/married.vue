<template>
  <intro-question :question-id="questionId" :next-location="nextLocation">
    <button @click="yes">{{ $t('yes') }}</button>
    <button @click="no">{{ $t('no') }}</button>
  </intro-question>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useUserStore } from '~/store/user';
import { useNextQuestion } from '~/utils/useIntro';

export default defineComponent({
  setup() {
    const questionId = 'married';
    const nextLocation = 'intro-healthInsurance';

    const userStore = useUserStore()
    const { goToNextQuestion } = useNextQuestion(nextLocation)

    return {
      questionId,
      nextLocation,
      yes: () => {
        userStore.setMarried(true);
        goToNextQuestion();
      },
      no: () => {
        userStore.setMarried(false);
        goToNextQuestion();
      }
    }
  }
})
</script>
