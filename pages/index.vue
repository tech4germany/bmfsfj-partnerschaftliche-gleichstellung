<template>
  <div>
    <NuxtLogo/>
    <div>TEST</div>
    <CategoryCard name="hello world"/>

    <h2> {{content != null ? content.title : ''}} </h2>
    <div class="mx-2">
      <bmfsfj-checkbox label="TEST 1" :checked="false"></bmfsfj-checkbox>
      <bmfsfj-checkbox v-model="checkbox" label="TEST 2"></bmfsfj-checkbox>
      <bmfsfj-checkbox v-model="checkbox" label="TEST 3"></bmfsfj-checkbox>
      <nuxt-content
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        :document="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { usePageContent } from '~/utils/useContent';

export default defineComponent({
  setup(_props) {
    const content = usePageContent('hello')
    const checkbox = ref(false);

    return { content, checkbox }
  }
})
</script>
