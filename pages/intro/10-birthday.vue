<template>
  <bmfsfj-intro-question
    :next-location="nextLocation"
    question-id="birthday"
    :has-selection="birthday != ''"
  >
    <input
      class="w-full border-primary-500 p-2 border-2 rounded"
      :placeholder="$t(`intro.birthday.placeholder`)"
      type="date"
      :value="birthday"
      @change="updateBirthday"
    />
  </bmfsfj-intro-question>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { format, parse } from 'date-fns/fp'
import { useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const nextLocation = 'intro-11-finished'

    const store = useUserStore()

    const parseHTMLDateInput = parse(new Date())('yyyy-MM-dd')

    function updateBirthday(birthday: string) {
      store.setExpectedBirthday(parseHTMLDateInput(birthday).getTime())
    }

    return {
      nextLocation,
      faArrowRight,
      birthday: computed(() => {
        if (store.expectedBirthday && new Date(store.expectedBirthday)) {
          return format('yyyy-MM-dd')(new Date(store.expectedBirthday))
        }
        return ''
      }),
      updateBirthday: (e: InputEvent) => updateBirthday((e.target! as HTMLInputElement).value),
    }
  },
})
</script>
