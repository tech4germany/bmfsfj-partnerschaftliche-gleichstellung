<template>
  <bmfsfj-card>
    <template #header>
      <h1 class="text-2xl font-bold text-primary-500 ml-2 pt-1">{{ name }}</h1>
    </template>
    <div>
      <h2 class="font-bold text-lg mt-1 mb-1">Meine Informationen</h2>
      <div class="my-infos">
        <p>
          Ich bin
          <span class="info">{{ $t(`work.${workSituation}`) }}</span> und
          <span class="info"
            >{{
              $t(`healthInsurance.${healthInsurance}`).toLowerCase()
            }}
            Krankenversichert</span
          >.
        </p>
        <p>
          Ich lebe
          <span class="info">{{
            relationship ? 'in einer Partnerschaft' : 'alleine'
          }}</span>
          und bin
          <span class="info">{{ married ? '' : 'nicht' }} verheiratet</span>.
        </p>
        <p v-if="relationship"></p>
        <p v-if="babySituation === 'EXPECTED'">
          {{ relationship ? 'Wir' : 'Ich' }} erwarte{{
            relationship ? 'n' : ''
          }}
          ein Kind am <span class="info">{{ expectedBirthday }}</span>
        </p>
      </div>
      <NuxtLink
        :to="localeRoute('/intro/0-willkommen')"
        class="text-primary-500 font-bold mt-1 block w-full text-right"
        >Intro nochmal machen</NuxtLink
      >
      <button
        class="text-primary-500 font-bold mt-1 block w-full text-right"
        @click="resetAll()"
      >
        Alles zurücksetzen
      </button>
    </div>
    <div class="flex flex-col">
      <h2 class="font-bold text-lg mt-1 mb-1">Teilen</h2>
      <div>
        Teile Deine Inhalte und To-dos, indem Du eine andere Person mit diesem
        Link einlädst. Gemeinsam könnt Ihr To-dos einteilen und mehr schaffen!
      </div>

      <button
        class="
          mx-auto
          border-2 border-primary-500
          rounded-lg
          px-3
          py-1
          text-lg text-primary-500
          font-bold
          my-2
        "
        @click="notImplemented"
      >
        Einladung teilen
      </button>
    </div>
  </bmfsfj-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { useUserStore } from '~/store/user'
import { useDateFormat } from '~/utils/composables/useI18n'
import { useUser } from '~/utils/composables/useUsers'
import { useResetAll } from '~/utils/composables/useResetAll'

export default defineComponent({
  setup(_props) {
    const store = useUserStore()
    const resetAll = useResetAll()

    const user = useUser(store.firstUser)
    const formatDate = useDateFormat()

    return {
      workSituation: computed(() => store.workSituation),
      married: computed(() => store.married),
      relationship: computed(() => store.relationship),
      babySituation: computed(() => store.babySituation),
      expectedBirthday: computed(() => {
        if (store.expectedBirthday && new Date(store.expectedBirthday)) {
          return formatDate(new Date(store.expectedBirthday))
        }
        return ''
      }),
      healthInsurance: computed(() => store.healthInsurance),
      name: computed(() => user.value?.name),
      resetAll,
      notImplemented: () =>
        alert(
          'Diese funktion hat es leider nicht in den Prototypen geschafft :('
        ),
    }
  },
})
</script>

<style scoped>
.info {
  @apply text-primary-500 font-bold;
}
</style>
