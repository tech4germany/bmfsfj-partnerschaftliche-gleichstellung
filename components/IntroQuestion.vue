<template>
  <bmfsfj-card>
    <template #header>{{ $t(`intro.${questionId}.question`) }}</template>

    <slot></slot>

    <button @click="toggleMoreInfos">Mehr Infos</button>

    <nuxt-link v-if="!hasSelection" :to="localeRoute(nextLocation)">Überspringen</nuxt-link>
    <nuxt-link v-if="hasSelection" :to="localeRoute(nextLocation)">Weiter</nuxt-link>
    <nuxt-link v-if="!hasSelection" :to="localeRoute('tasks')">Alle Überspringen</nuxt-link>

    <nuxt-content
      v-if="moreInfosVisible"
      :document="moreInfos" />
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, toRefs, unref } from '@nuxtjs/composition-api';
import { usePageContent } from '~/utils/composables/useContent';
import { useNextQuestion } from '~/utils/composables/useIntro';

function useMoreQuestionInfos(questionId: Ref<string> | string) {
  const moreInfosVisible = ref(false);
  const moreInfos = usePageContent(computed(() => `questions/${unref(questionId)}`))

  function toggleMoreInfos() {
    moreInfosVisible.value = !moreInfosVisible.value
  }

  return {
    toggleMoreInfos,
    moreInfosVisible,
    moreInfos
  }
}

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
    }
  },
  setup(props) {
    const {
      nextLocation,
      questionId
    } = toRefs(props);

    const { goToNextQuestion } = useNextQuestion(nextLocation)
    const { moreInfosVisible, moreInfos, toggleMoreInfos }  = useMoreQuestionInfos(questionId)

    return {
      goToNextQuestion,
      toggleMoreInfos,
      moreInfosVisible,
      moreInfos
    }
  }
})
</script>
