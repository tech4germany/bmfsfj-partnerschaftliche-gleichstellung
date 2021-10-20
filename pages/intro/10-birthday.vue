<template>
  <intro-question
    :next-location="nextLocation"
    question-id="birthday"
    :has-selection="birthday != null"
  >
    <input
      class="w-full border-primary-500 p-2 border-2 rounded"
      placeholder="Geburtstag"
      type="date"
      :value="birthday"
      @change="updateBirthday"
    />
  </intro-question>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const nextLocation = 'intro-11-finished'

    const store = useUserStore()

    function updateBirthday(birthday: string) {
      store.setExpectedBirthday(birthday)
    }

    return {
      nextLocation,
      faArrowRight,
      birthday: computed(() => store.expectedBirthday),
      updateBirthday: (e: InputEvent) =>
        updateBirthday((e.target! as HTMLInputElement).value),
    }
  },
})
</script>
