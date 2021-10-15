<template>
  <div class="flex flex-col gap-2">
    <category-card v-for="modul in modules" :key="modul.id" :color="modul.color" :name="$t(`modules.${modul.id}`)" :percent-done="randomPercentage(modul.id)"></category-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { HealthInsurance, useUserStore } from '~/store/user';
import { useModules } from '~/utils/useModules';

export default defineComponent({
  setup(_props) {
    const store = useUserStore()
    const modules = useModules()

    return {
      modules,
      randomPercentage(_key: string) {
        return Math.floor(Math.random() * 100)
      },
      married: computed(() => store.married),
      setMarried: store.setMarried,
      healthInsurances: Object.keys(HealthInsurance),
      healthInsurance: computed(() => store.healthInsurance),
      setHealthInsurance: store.setHealthInsurance,
    }
  }
})
</script>
