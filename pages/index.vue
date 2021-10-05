<template>
  <div>
    <NuxtLogo/>
    <div>TEST</div>
    <CategoryCard name="hello world"/>

    <h2> {{content != null ? content.title : ''}} </h2>
    <div>
      <nuxt-content :document="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { usePageContent } from '~/utils/useContent';

export default defineComponent({
  setup(props) {
    const content = usePageContent('hello')

    return { content }
  }
})
</script>
