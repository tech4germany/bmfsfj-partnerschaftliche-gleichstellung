<template>
  <bmfsfj-intro-question
    :next-location="nextLocation"
    question-id="name"
    :has-selection="hasSelection"
  >
    <input
      class="w-full border-primary-500 p-2 border-2 rounded-lg"
      :placeholder="$t(`intro.name.placeholder`)"
      autocomplete="nickname"
      type="text"
      :value="name"
      @input="updateUserName"
    />
  </bmfsfj-intro-question>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  unref,
} from '@nuxtjs/composition-api'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useUsersStore } from '~/store/users'
import { useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const nextLocation = 'intro-4-work'

    const usersStore = useUsersStore()
    const userStore = useUserStore()

    const userId = computed(() => userStore.firstUser ?? '')

    async function updateUserName(name: string) {
      if (unref(userId).length === 0) {
        const newUserId = await usersStore.createUser({ name })
        userStore.setFirstUser(newUserId);
      } else {
        usersStore.updateUser({ id: unref(userId), name })
      }
    }

    const user = computed(() => usersStore.users[unref(userId)])

    return {
      nextLocation,
      faArrowRight,
      hasSelection: computed(() => userId.value != null && userId.value !== ''),
      name: computed(() =>
        unref(userId).length !== 0 ? unref(user)?.name ?? '' : ''
      ),
      updateUserName: (e: InputEvent) =>
        updateUserName((e.target! as HTMLInputElement).value),
    }
  },
})
</script>
