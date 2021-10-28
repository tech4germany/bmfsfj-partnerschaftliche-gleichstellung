<template>
  <div>
    <div class="flex w-full" @click="toggle">
      <div class="flex-grow">
        <slot name="title">
          <div class="flex">
            <div class="w-4">
              <font-awesome-icon
                class="self-center mx-auto text-primary-500"
                fixed-width
                :icon="icon"
              />
            </div>
            <h3 class="font-bold">{{ title }}</h3>
          </div>
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

    <div class="extension mt-1 mb-1 ml-4" :hidden="!extended">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from '@nuxtjs/composition-api'
import type { Ref } from '@nuxtjs/composition-api'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      required: true
    },
  },
  setup({ open }) {
    const extended: Ref<boolean> = ref(open)

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
