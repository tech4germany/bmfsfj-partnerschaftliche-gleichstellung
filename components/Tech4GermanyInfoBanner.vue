<template>
  <div v-if="!hidden" class="bg-rot-500 text-gray-50 p-4 flex">
    <div class="flex-grow self-center">
      <slot>
        <span>Diese Seite ist ein Prototyp der im Rahmen des Tech4Germany Fellowship 2021 entsteht.</span>
        <br>
        <span>Für die Richtigkeit der Informationen übernehmen wir keine Gewähr.</span>
      </slot>
    </div>

    <button class="block rounded border-2 p-2" @click="hide">Ausblenden</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { useT4gBannerStore } from '~/store/t4gBanner';


export default defineComponent({
  setup() {
    const store = useT4gBannerStore();

    return {
      hidden: computed(() => store.hidden || false),
      hide: store.hide
    }
  }
})
</script>
