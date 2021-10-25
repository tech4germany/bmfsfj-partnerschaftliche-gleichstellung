<template><div>index</div></template>

<script lang="ts">
import { defineComponent, useRouter, watchEffect } from '@nuxtjs/composition-api'
import { useUserStore } from '~/store/user';
import { useLocalLocation } from '~/utils/composables/useIntro';

export default defineComponent({
  setup(_props) {
    const $router = useRouter()
    const localLocation = useLocalLocation()
    const userStore = useUserStore();

    watchEffect( () => {
      if (userStore.introFinished !== true) {
        $router.push(localLocation(`/intro/0-willkommen`)!)
      } else {
        $router.push(localLocation(`/modules`)!)
      }
    });
    return {}
  }
})
</script>
