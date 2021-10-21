<template>
  <div class="flex flex-col h-full">
    <h2 class="text-xl mt-12 mx-1"><slot name="header">{{ $t(`intro.${questionId}.question`) }}</slot></h2>

    <div class="flex-grow flex">
      <div class="my-auto w-full">
      <slot></slot>
      </div>
    </div>

    <div class="gap-4 flex flex-col mb-2" >
      <button @click="toggleMoreInfos">
        <font-awesome-icon class="fa-lg" :icon="faInfoCircle" />
      </button>
      <nuxt-link  v-if="!hasSelection" class="text-primary-500 self-center text-center text-xl" :to="localeRoute(nextLocation)">{{$t(`intro.skip-question`)}}</nuxt-link>
    </div>

    <nuxt-content
      v-if="moreInfosVisible"
      :document="moreInfos" />

    <div v-if="hasSelection" class="mb-2 flex flex-row-reverse mr-2 mt-2">
      <nuxt-link :to="localeRoute(nextLocation)">
        <font-awesome-icon class="fa-3x text-primary-500" :icon="faArrowRight" />
      </nuxt-link>
    </div>
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
