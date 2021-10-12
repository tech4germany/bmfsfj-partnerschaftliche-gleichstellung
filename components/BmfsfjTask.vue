<template>
  <bmfsfj-card>
    <template #header> {{content != null ? content.title : ''}} </template>
    <div>
      <nuxt-content
      class="mx-auto"
      :document="content != null ? content.document : null" />

    </div>
  </bmfsfj-card>
</template>

<script lang="ts">
import { defineComponent, toRef } from '@nuxtjs/composition-api'
import { useTask } from '~/utils/useTask';

export default defineComponent({
  props: {
    done: {
      type: Boolean,
      default: false
    },
    taskName: {
      default: 'mutterschaftsgeld-beantragen',
      type: String,
      required: true
    }
  },
  setup(props) {
    const task = useTask(toRef(props, 'taskName'))

    return {
      content: task
    }
  }
})
</script>

<style>
</style>
