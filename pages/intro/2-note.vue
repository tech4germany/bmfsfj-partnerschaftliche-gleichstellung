<template>
  <div class="flex flex-col text-center h-full">
    <h2 class="text-2xl mt-24">Hinweis</h2>

    <div class="flex-grow mt-24 text-lg text-left">
      <span>
        Um die Inhalte dieser App genau an deine Bedürfnisse anpassen zu können,
        möchten wir dir gerne zu Beginn wenige, einfache Fragen stellen. Über
        <font-awesome-icon :icon="faInfoCircle" /> kannst Du jederzeit erfahren,
        warum wir genau diese Information von dir erfragen.
      </span>
    </div>

    <nuxt-link class="mb-10" to="/intro/3-name">
      <font-awesome-icon class="fa-2x" :icon="faArrowRight" />
    </nuxt-link>

    <nuxt-link class="mb-12" to="/todos">
      Ohne Personalisierung fortfahren
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  layout: 'intro',
  setup() {
    return {
      faArrowRight,
      faInfoCircle,
    }
  },
})
</script>
