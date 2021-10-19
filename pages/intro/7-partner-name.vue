<template>
  <intro-question
    :next-location="nextLocation"
    question-id="namePartner"
    :has-selection="hasSelection"
  >
    <input
      class="w-full border-primary-500 p-2 border-2 rounded"
      placeholder="Name"
      autocomplete="nickname"
      type="text"
      :value="name"
      @change="updateUserName"
    />
  </intro-question>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from '@nuxtjs/composition-api'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useUsersStore } from '~/store/users'

export default defineComponent({
  layout: 'intro',
  setup() {
    const nextLocation = 'intro-8-married'

    const userId = ref('')

    const store = useUsersStore()

    async function updateUserName(name: string) {
      if (unref(userId).length === 0) {
        userId.value = await store.createUser({ name })
      } else {
        store.updateUser({ id: unref(userId), name })
      }
    }

    const users = computed(() => store.users)
    const user = computed(() => store.users[unref(userId)])

    return {
      nextLocation,
      faArrowRight,
      hasSelection: computed(() => Object.keys(unref(users)).length >= 2),
      name: computed(() =>
        unref(userId).length !== 0 ? unref(user)?.name ?? '' : ''
      ),
      updateUserName: (e: InputEvent) =>
        updateUserName((e.target! as HTMLInputElement).value),
    }
  },
})
</script>
