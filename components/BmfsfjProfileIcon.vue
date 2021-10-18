<template>
  <div class="profile-icon">
    <nuxt-link :to="localeRoute('/profile')" class="w-10 h-10 my-3 mr-2 p-2 rounded-full bg-white text-primary-500 flex">
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
    @apply border-2 border-white bg-primary-500 text-white;
  }
</style>
