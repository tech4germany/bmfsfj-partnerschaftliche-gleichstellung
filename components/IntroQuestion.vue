<template>
  <div class="text-center flex flex-col h-full">
    <h2 class="text-2xl mt-12"><slot name="header">{{ $t(`intro.${questionId}.question`) }}</slot></h2>

    <div class="flex-grow mt-12">
      <slot></slot>
    </div>

    <div v-if="!hasSelection" class="mb-12 gap-2 flex flex-col" >
      <button @click="toggleMoreInfos">
        <font-awesome-icon class="fa-lg" :icon="faInfoCircle" />
      </button>
      <nuxt-link :to="localeRoute(nextLocation)">Überspringen</nuxt-link>
    </div>

    <nuxt-content
      v-if="moreInfosVisible"
      :document="moreInfos" />

      <div ></div>

    <nuxt-link v-if="hasSelection" class="mb-12" :to="localeRoute(nextLocation)">
      <font-awesome-icon class="fa-2x" :icon="faArrowRight" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, toRefs, unref } from '@nuxtjs/composition-api';
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { usePageContent } from '~/utils/composables/useContent';
import { useLocalRoute } from '~/utils/composables/useLocalRoute';

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

    const { moreInfosVisible, moreInfos, toggleMoreInfos } = useMoreQuestionInfos(questionId)
    const localeRoute = useLocalRoute()

    return {
      nextQuestion: computed(() => localeRoute(unref(nextLocation))),
      toggleMoreInfos,
      moreInfosVisible,
      moreInfos,
      faArrowRight,
      faInfoCircle
    }
  }
})
</script>
