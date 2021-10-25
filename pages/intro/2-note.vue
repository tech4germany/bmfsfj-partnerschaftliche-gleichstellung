<template>
  <div class="h-full flex flex-col mx-3">
    <header class="">
      <h1 class="text-3xl font-bold text-primary-500 mt-20">
        {{ $t(`intro.note.title`) }}
      </h1>
    </header>
    <div class="mt-3 flex-grow flex flex-col h-full">
      <div class="text-lg w-full flex-grow font-bold">
        <bmfsfj-content-area class="w-full">
          <nuxt-content :document="content" />
        </bmfsfj-content-area>
      </div>

      <div class="mb-4 flex mr-2 mt-2 w-full flex-col gap-4">
        <nuxt-link class="mx-auto float-right rounded-lg border-2 border-primary-500 py-1 px-3 font-bold text-primary-500 text-xl" :to="localeRoute(`/intro/3-name`)">
          {{$t(`intro.note.start`)}}
        </nuxt-link>

        <nuxt-link class="mx-auto font-bold text-primary-500 text-xl" :to="localeRoute(`/todos`)">
          {{ $t(`intro.continue-without-personalization`) }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { usePageContent } from '~/utils/composables/useContent'

export default defineComponent({
  layout: 'none',
  setup() {
    const content = usePageContent('intro/note')

    return {
      content,
      faArrowRight,
      faInfoCircle,
    }
  },
})
</script>
