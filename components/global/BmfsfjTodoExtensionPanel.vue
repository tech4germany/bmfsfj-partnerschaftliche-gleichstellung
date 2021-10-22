<template>
  <div>
    <div class="text-lg flex w-full" @click="toggle">
      <div class="flex-grow">
        <slot name="title">
          <font-awesome-icon
            class="self-center mr-1 text-primary-500"
            fixed-width
            :icon="icon"
          />
          <span>{{ title }}</span>
      </slot>
      </div>

      <button>
        <font-awesome-icon
          class="self-center mr-1 text-primary-500"
          fixed-width
          :icon="toggleIcon"
        />
      </button>
    </div>

    <div class="extension mt-1" :hidden="!extended">
      <slot></slot>
      <hr class="my-1" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from '@nuxtjs/composition-api'
import type { Ref } from '@nuxtjs/composition-api'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  props: {
    initalValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup({ initalValue }) {
    const extended: Ref<boolean> = ref(initalValue)

    function toggle() {
      extended.value = !unref(extended)
    }

    return {
      extended,
      toggle,
      toggleIcon: computed(() => unref(extended) ? faChevronUp : faChevronDown)
    }
  },
})
</script>
