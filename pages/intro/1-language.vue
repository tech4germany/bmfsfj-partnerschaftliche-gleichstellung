<template>
  <bmfsfj-intro-question
    :next-location="nextLocation"
    question-id="language"
    has-selection
  >
    <template #header>
      <span class="block ">{{ $t(`intro.language.question`) }}</span>
      <span class="block text-gray-600 text-lg">
        {{
          $t(`intro.language.question`, currentLocale === 'en' ? 'de' : 'en')
        }}
      </span>
    </template>

    <div class="flex flex-col gap-2 w-full">
      <bmfsfj-intro-toggle-button
        v-for="locale in availableLocales"
        :key="locale.value"
        class="w-full"
        :value="isSelected(locale.code)"
        @input="select(locale.code)"
      >
        {{ locale.name }}
      </bmfsfj-intro-toggle-button>
    </div>
  </bmfsfj-intro-question>
</template>

<script lang="ts">
import { computed, defineComponent, useRouter } from '@nuxtjs/composition-api'
import type { LocaleObject } from '@nuxtjs/i18n'
import {
  useI18n,
  useSwitchLocalePath,
} from '~/utils/composables/useI18n'

export default defineComponent({
  layout: 'intro',
  setup() {
    const nextLocation = 'intro-2-note'

    const $i18n = useI18n()
    const $router = useRouter()
    const switchLocalePath = useSwitchLocalePath()

    return {
      nextLocation,
      currentLocale: computed(() => $i18n.locale),
      availableLocales: computed(() => $i18n.locales as LocaleObject[]),
      isSelected: (locale: string) => locale === $i18n.locale,
      select: (locale: string) => $router.push(switchLocalePath(locale)),
    }
  },
})
</script>
