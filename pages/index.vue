<template>
  <div>
    <NuxtLogo/>
    <div>TEST</div>
    <CategoryCard name="hello world"/>

    <h2> {{content != null ? content.title : ''}} </h2>
    <div class="mx-2">
      <bmfsfj-checkbox label="TEST 1" :checked="false"></bmfsfj-checkbox>
      <bmfsfj-checkbox :value="checkbox" label="TEST 2" @input="updateCheckbox"></bmfsfj-checkbox>
      <bmfsfj-checkbox :value="checkbox" label="TEST 3" @input="updateCheckbox"></bmfsfj-checkbox>
      <nuxt-content
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        :document="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { usePageContent } from '~/utils/useContent';
import { useTestStore } from '~/store/teststore';

export default defineComponent({
  setup(_props) {
    const store = useTestStore();
    const content = usePageContent('hello')

    return {
      content,
      checkbox: computed(() => store.checkbox),
      updateCheckbox: store.updateCheckbox }
  }
})
</script>
