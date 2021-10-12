<template>
  <intro-question :question-id="questionId" :next-location="nextLocation">
    <bmfsfj-toggle-button class="w-full my-1" :value="married" @input="yes">{{ $t('yes') }}</bmfsfj-toggle-button>
    <bmfsfj-toggle-button class="w-full my-1" :value="!married" @input="no">{{ $t('no') }}</bmfsfj-toggle-button>
  </intro-question>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
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
      },
      married: computed(() => userStore.married)
    }
  }
})
</script>
