<template>
  <div
    class="
      bg-primary-500
      flex
      text-white
      border-2 border-primary-500
      w-8
      h-8
      rounded-full
    "
  >
    <span class="m-auto">{{ name.toUpperCase().substring(0, 2) }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, unref } from '@vue/composition-api'
import { useUser } from '~/utils/composables/useUsers'

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { userId } = toRefs(props)
    const user = useUser(userId)

    return {
      name: computed(() => unref(user)?.name ?? ''),
    }
  },
})
</script>
