<template>
  <div class="module-icon flex" :style="`--color: ${color}`">
    <font-awesome-icon style="margin: auto" fixed-width :icon="icon"></font-awesome-icon>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, unref } from '@vue/composition-api'
import { useModule } from '~/utils/composables/useModules'

export default defineComponent({
  props: {
    moduleId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { moduleId } = toRefs(props)
    const module = useModule(moduleId)

    return {
      icon: computed(() => unref(module)?.icon ?? 'question'),
      color: computed(() => unref(module)?.color2 ?? ''),
    }
  },
})
</script>

<style scoped>
.module-icon {
  @apply text-white;
  background-color: var(--color);
}

</style>
