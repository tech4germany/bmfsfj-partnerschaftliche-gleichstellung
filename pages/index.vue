<template>
  <div>
    <NuxtLogo/>
    <div>TEST</div>
    <CategoryCard name="hello world"/>

    <h2> {{content != null ? content.title : ''}} </h2>
    <div class="mx-2">
      <bmfsfj-checkbox label="TEST 1" :value="false"></bmfsfj-checkbox>
      <nuxt-content
        :document="content" />
      </div>

      <input v-model="task" type="text" />

      <bmfsfj-task :task="task"></bmfsfj-task>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { usePageContent } from '~/utils/composables/useContent';

export default defineComponent({
  setup(_props) {
    const content = usePageContent('hello')
    const task = ref('mutterschaftsgeld')

    return {
      content,
      task
    }
  }
})
</script>
