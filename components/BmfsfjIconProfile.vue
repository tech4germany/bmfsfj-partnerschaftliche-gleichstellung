<template>
  <div class="profile-icon flex">
    <nuxt-link :to="localeRoute('/profile')" class="my-auto w-12 h-12 p-1 rounded-full border-primary-500 border-2 bg-white text-primary-500 flex">
      <font-awesome-icon class="flex-grow m-auto" :icon="faUser" fixed-width/>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  setup() {
    return {
      faUser
    }
  },
})
</script>

<style scoped>
  .profile-icon >>> .nuxt-link-active {
    @apply bg-primary-500 text-white;
  }
</style>
