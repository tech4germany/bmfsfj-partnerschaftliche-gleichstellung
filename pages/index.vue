<template>
  <div>
    <NuxtLogo/>
    <div>TEST</div>
    <CategoryCard name="hello world"/>


    <h2> {{content != null ? content.title : ''}} </h2>
    <div class="mx-2">
      <div class="text-blue-500 flex flex-row items-center space-x-1">
        <input type="checkbox" id="scales" v-model="checkbox" name="scales" checked class="w-4 h-4 border-blue-500 border-2 rounded appearance-none relative text-white checked:bg-blue-500 checked:after:top-0 checked:after:leading-3 checked:after:absolute checked:after:content-['\2713']">
        <label for="scales">Scales</label>
      </div>
      <bmfsfj-checkbox label="TEST" :checked="false"></bmfsfj-checkbox>
      <bmfsfj-checkbox label="TEST" v-model="checkbox"></bmfsfj-checkbox>
      <div class="text-blue-500 ">
        <input type="checkbox" id="scales2" name="scales2"  v-model="checkbox" >
        <label for="scales2">Scales2 {{checkbox}}</label>
      </div>
      <input class="text-blue-500" @input="hello" type="checkbox" label="Verheiratet" />
      <nuxt-content
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        :document="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import BmfsfjCheckbox from '~/components/BmfsfjCheckbox.vue';
import { usePageContent } from '~/utils/useContent';

export default defineComponent({
  components: { BmfsfjCheckbox },
  setup(_props) {
    const content = usePageContent('hello')
    const checkbox = ref(false);

    return { content, checkbox, hello: (e) => console.log("ASD") }
  }
})
</script>
