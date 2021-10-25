<template>
  <bmfsfj-intro-question
    :next-location="nextLocation"
    question-id="namePartner"
    :has-selection="hasSelection"
  >
    <input
      class="w-full border-primary-500 p-2 border-2 rounded-lg"
      :placeholder="$t(`intro.namePartner.placeholder`)"
      autocomplete="nickname"
      type="text"
      :value="name"
      @change="updateUserName"
    />
  </bmfsfj-intro-question>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from '@nuxtjs/composition-api'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useUsersStore } from '~/store/users'
import { useUserStore } from '~/store/user'

export default defineComponent({
  layout: 'intro',
  setup() {
    const nextLocation = 'intro-8-married'


    const usersStore = useUsersStore()
    const userStore = useUserStore()

    const userId = computed(() => userStore.secondUser ?? '')

    async function updateUserName(name: string) {
      if (unref(userId).length === 0) {
        const newUserId = await usersStore.createUser({ name })
        userStore.setSecondUser(newUserId);
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
