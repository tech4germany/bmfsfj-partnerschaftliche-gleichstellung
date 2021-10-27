<template>
  <div class="flex flex-col text-center h-screen">

    <div class="flex-grow"></div>

    <h1 class="text-2xl text-primary-500 mt-2 font-bold mx-3">{{$t(`intro.welcome`)}}</h1>

    <div class="w-full my-1">
      <img class="w-36 inline" src="~/assets/logotransparent.png" />
    </div>

    <h1 class="text-2xl text-primary-500 font-bold mx-3">{{$t(`toolName`)}}</h1>

    <span class="mt-3 text-xl font-bold  mx-3">
      <bmfsfj-content-area class="w-full">
        <nuxt-content :document="content" />
      </bmfsfj-content-area>
    </span>

    <div class="flex-grow"></div>
    <div class="flex mb-1">
      <div class="w-1/2 align-middle">
        <a href="https://bmfsfj.de">
          <img class="w-full mx-auto" src="~/assets/BMFSFJ.svg" />
        </a>
      </div>
      <div class="w-1/2 align-middle p-2">
        <a href="https://tech.4germany.org">
          <img class="w-full" src="~/assets/tech4germany.png" />
        </a>
      </div>
    </div>

    <nuxt-link class="mb-12" :to="localeRoute(`/intro/1-language`)">
      <font-awesome-icon class="fa-3x text-primary-500" :icon="faArrowRight" />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { usePageContent } from '~/utils/composables/useContent'

export default defineComponent({
  layout: 'none',
  setup() {
    const content = usePageContent(`intro/welcome`);

    return {
      content,
      faArrowRight,
    }
  },
})
</script>
