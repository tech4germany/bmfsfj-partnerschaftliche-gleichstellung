<template>
  <div class="flex flex-col text-center h-screen">
    <h1 class="text-4xl text-primary-500 mt-24">{{$t(`intro.welcome`)}}</h1>

    <span class="flex-grow mt-24 text-xl"
      >{{$t(`intro.introduction`)}}</span
    >

    <div class="flex mb-24">
      <div class="flex-grow">
        <a href="https://tech.4germany.org">
          <img class="w-32 mx-auto" src="~/assets/tech4germany.png" />
        </a>
      </div>
      <div class="flex-grow">
        <img class="w-32 mx-auto" src="~/assets/tech4germany.png" />
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

export default defineComponent({
  layout: 'none',
  setup() {
    return {
      faArrowRight,
    }
  },
})
</script>
