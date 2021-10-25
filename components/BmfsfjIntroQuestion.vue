<template>
  <div class="flex flex-col h-full">
    <h2 class="text-xl mt-2 mx-1 font-bold">
      <slot name="header">{{ $t(`intro.${questionId}.question`) }}</slot>
    </h2>

    <div class="flex-grow flex flex-shrink overflow-auto mt-3">
      <div class="my-auto w-full">
        <slot></slot>
      </div>
    </div>

    <div class="gap-4 flex flex-col my-2">
      <button @click="toggleMoreInfos">
        <font-awesome-icon class="fa-lg" :icon="faInfoCircle" />
      </button>
      <nuxt-link
        v-if="!hasSelection"
        class="text-primary-500 self-center text-center text-xl"
        :to="localeRoute(nextLocation)"
        >{{ $t(`intro.skip-question`) }}</nuxt-link
      >
    </div>

    <bmfsfj-overlay :open="moreInfosVisible" @close="toggleMoreInfos">
      <div class="flex flex-col h-full ml-3">
        <header class="flex flex-row">
          <h1 class="text-3xl text-primary-500 mt-20 flex-grow flex-shrink font-bold">{{ $t(`intro.${questionId}.question`) }}</h1>

          <button class="w-10 h-10 rounded-full m-1 text-primary-500 border-2 border-primary-500" style="min-width: 2.5rem;">
            <font-awesome-icon class="fa-lg" fixed-width :icon="faTimes" />
          </button>
        </header>

        <div class="flex-grow flex mt-3 mb-2">
          <bmfsfj-content-area class="w-full">
            <nuxt-content :document="moreInfos" />
          </bmfsfj-content-area>
        </div>
      </div>
    </bmfsfj-overlay>

    <div v-if="hasSelection" class="mb-2 flex flex-row-reverse mr-2 mt-2">
      <nuxt-link :to="localeRoute(nextLocation)">
        <font-awesome-icon
          class="fa-3x text-primary-500"
          :icon="faArrowRight"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  Ref,
  ref,
  toRefs,
  unref,
} from '@nuxtjs/composition-api'
import {
  faArrowRight,
  faInfoCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { usePageContent } from '~/utils/composables/useContent'
import { useLocalRoute } from '~/utils/composables/useLocalRoute'

function useMoreQuestionInfos(questionId: Ref<string> | string) {
  const moreInfosVisible = ref(false)
  const moreInfos = usePageContent(
    computed(() => `questions/${unref(questionId)}`)
  )

  function toggleMoreInfos() {
    moreInfosVisible.value = !moreInfosVisible.value
  }

  return {
    toggleMoreInfos,
    moreInfosVisible,
    moreInfos,
  }
}

export default defineComponent({
  props: {
    questionId: {
      type: String,
      required: true,
    },
    nextLocation: {
      type: String,
      required: true,
    },
    hasSelection: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { nextLocation, questionId } = toRefs(props)

    const { moreInfosVisible, moreInfos, toggleMoreInfos } =
      useMoreQuestionInfos(questionId)
    const localeRoute = useLocalRoute()

    return {
      nextQuestion: computed(() => localeRoute(unref(nextLocation))),
      toggleMoreInfos,
      moreInfosVisible,
      moreInfos,
      faArrowRight,
      faInfoCircle,
      faTimes,
    }
  },
})
</script>
