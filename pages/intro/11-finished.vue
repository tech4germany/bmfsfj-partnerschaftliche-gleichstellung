<template>
  <div class="h-full flex flex-col mx-3">
    <header class="">
      <h1 class="text-3xl font-bold text-primary-500 mt-20">
        {{ $t(`intro.finished.title`) }}
      </h1>
    </header>
    <div class="mt-3 flex-grow flex flex-col h-full">
      <div class="text-xl w-full flex-grow font-bold">
        <bmfsfj-content-area class="w-full">
          <nuxt-content :document="content" />
        </bmfsfj-content-area>
      </div>
      <div class="m-auto my-4" @click="toggleEasterEgg">
        <font-awesome-icon size="lg" :icon="faGhost" />
        <font-awesome-icon size="sm" :icon="faHeart" v-if="easterEgg" />
        <font-awesome-icon size="lg" :icon="faGhost" />
      </div>
      <div class="mb-4 flex flex-row-reverse mr-1">
        <nuxt-link :to="localeRoute(`/modules`)">
          <font-awesome-icon
            class="fa-3x text-primary-500"
            :icon="faArrowRight"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import {
  faArrowRight,
  faGhost,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { usePageContent } from '~/utils/composables/useContent'

export default defineComponent({
  layout: 'none',
  setup() {
    const content = usePageContent('intro/finished')
    const easterEgg = ref(false)

    return {
      faArrowRight,
      faGhost,
      faHeart,
      content,
      easterEgg,
      toggleEasterEgg: () => (easterEgg.value = !easterEgg.value),
    }
  },
})
</script>
