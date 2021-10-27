<template>
  <div v-if="!hidden" class="bg-rot-500 text-gray-50 p-2 flex">
    <div class="flex-grow self-center">
      <slot>
        <span>Diese Seite ist ein Prototyp, der im Rahmen des Tech4Germany Fellowships 2021 entsteht.</span>
        <span>Für die Richtigkeit und Aktualität der Informationen übernehmen wir keine Gewähr.</span>
      </slot>
    </div>

    <button class="w-10 h-10 rounded-full m-1 border-2 " style="min-width: 2.5rem;" @click="hide">
      <font-awesome-icon class="fa-lg" fixed-width :icon="faTimes" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useT4gBannerStore } from '~/store/t4gBanner';

export default defineComponent({
  setup() {
    const store = useT4gBannerStore();

    return {
      hidden: computed(() => store.hidden || false),
      hide: store.hide,
      faTimes
    }
  }
})
</script>
