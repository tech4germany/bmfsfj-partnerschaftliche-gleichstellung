<template>
  <div>
    <NuxtLink :to="localeRoute('/intro/married')" class="block w-full">Restart Intro</NuxtLink>


    <bmfsfj-language-select></bmfsfj-language-select>

    <bmfsfj-checkbox label="Verheiratet" :value="married" @input="setMarried"></bmfsfj-checkbox>

    <h4>Krankenversicherung</h4>
    <bmfsfj-select class="border-primary-500 border-2 rounded" :items="healthInsurances" :value="healthInsurance"  @input="setHealthInsurance">
      <template #default={item}>
        {{ $t(`healthInsurance.${item}`) }}
      </template>
    </bmfsfj-select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { HealthInsurance, useUserStore } from '~/store/user';

export default defineComponent({
  setup(_props) {
    const store = useUserStore()

    return {
      married: computed(() => store.married),
      setMarried: store.setMarried,
      healthInsurances: Object.keys(HealthInsurance),
      healthInsurance: computed(() => store.healthInsurance),
      setHealthInsurance: store.setHealthInsurance,
    }
  }
})
</script>
