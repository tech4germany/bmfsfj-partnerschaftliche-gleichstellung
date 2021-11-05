<template>
  <div v-if="!hidden" class="bg-rot-500 text-gray-50 p-2 flex">
    <div class="flex-grow self-center">
      <slot>
        <span>Dies ist ein Prototyp ohne Anspruch auf Vollständigkeit, der im Rahmen des Tech4Germany Fellowships 2021 entstand.</span>
        <span>Für die Aktualität und Korrektheit der Informationen übernehmen wir keine Gewähr.</span>
        <br>
        <a href="https://tech.4germany.org/project/partnerschaftliche-gleichstellung-bmfsfj" class="underline">Projektdokumentation       <font-awesome-icon fixed-width :icon="faExternalLinkAlt" />
</a>
      </slot>
    </div>

    <button class="w-10 h-10 rounded-full m-1 border-2 " style="min-width: 2.5rem;" @click="hide">
      <font-awesome-icon class="fa-lg" fixed-width :icon="faTimes" />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { faTimes,faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useT4gBannerStore } from '~/store/t4gBanner';

export default defineComponent({
  setup() {
    const store = useT4gBannerStore();

    return {
      hidden: computed(() => store.hidden || false),
      hide: store.hide,
      faTimes,
      faExternalLinkAlt
    }
  }
})
</script>
