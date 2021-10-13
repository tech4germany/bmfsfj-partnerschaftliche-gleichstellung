<template>
  <intro-question :question-id="questionId" :next-location="nextLocation" :has-selection="hasSelection">
    <bmfsfj-toggle-button class="w-full my-1" :value="married === true" @input="yes">{{ $t('yes') }}</bmfsfj-toggle-button>
    <bmfsfj-toggle-button class="w-full my-1" :value="married === false" @input="no">{{ $t('no') }}</bmfsfj-toggle-button>
  </intro-question>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { useUserStore } from '~/store/user';

export default defineComponent({
  setup() {
    const questionId = 'married';
    const nextLocation = 'intro-healthInsurance';

    const userStore = useUserStore()

    return {
      questionId,
      nextLocation,
      yes: () => {
        userStore.setMarried(true);
      },
      no: () => {
        userStore.setMarried(false);
      },
      married: computed(() => userStore.married),
      hasSelection: computed(() => userStore.married != null)
    }
  }
})
</script>
