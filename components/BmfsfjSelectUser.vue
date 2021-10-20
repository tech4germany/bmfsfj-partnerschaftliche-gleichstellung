<template>
  <bmfjfs-chip-select class="w-1/3 rounded-xl" placeholder="Zuständig" :items="users" :value="value" @input="selectUser">
    <template #option="{ label }">{{label}}</template>
    <template #selected-option="{ label }">{{userName(label).value}}</template>
  </bmfjfs-chip-select>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, unref } from '@nuxtjs/composition-api'
import { User } from '~/store/users';
import { useUser, useUsers } from '~/utils/composables/useUsers';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null
    }
  },
  setup(_props, { emit }) {
    const users: Ref<User[]> = useUsers()

    function selectUser(user: {value: User['id']} | null) {
      emit('input', user?.value)
    }

    function userName(id: string) {
      const user = useUser(id);

      return computed(() => unref(user)?.name ?? '')
    }

    return {
      selectUser,
      userName,
      users: computed(() => unref(users).map(user => ({value: user.id, label: user.name})))
    }
  }
})
</script>
