<template>
  <div>
    <div>TEST</div>

    <h2> {{content != null ? content.title : ''}} </h2>
    <div class="mx-2">
      <bmfsfj-checkbox label="TEST 1" :value="false"></bmfsfj-checkbox>
      <nuxt-content
        :document="content" />
      </div>

      <input v-model="todo" type="text" />

      <bmfsfj-todo :todo-id="todo"></bmfsfj-todo>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { usePageContent } from '~/utils/composables/useContent';

export default defineComponent({
  setup(_props) {
    const content = usePageContent('hello')
    const todo = ref('mutterschaftsgeld')

    return {
      content,
      todo
    }
  }
})
</script>
