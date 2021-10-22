<template>
  <bmfsfj-select-chip class="w-1/3 rounded-xl" :items="users" :value="value" @input="selectUser" v-bind="attrs">
    <template #option="{ label }">{{label}}</template>
    <template #selected-option="{ label }"><bmfsfj-user-icon class="w-6 h-6 text-xs" :user-id="label"></bmfsfj-user-icon></template>
  </bmfsfj-select-chip>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, unref } from '@nuxtjs/composition-api'
import BmfsfjUserIcon from './BmfsfjUserIcon.vue';
import { User } from '~/store/users';
import { useUser, useUsers } from '~/utils/composables/useUsers';

export default defineComponent({
  components: { BmfsfjUserIcon },
  props: {
    value: {
      type: String,
      default: null
    }
  },
  setup(_props, { emit, attrs }) {
    const users: Ref<User[]> = useUsers()

    function selectUser(user: {value: User['id']} | null) {
      emit('input', user?.value)
    }

    function userName(id: string) {
      const user = useUser(id);

      return computed(() => unref(user)?.name ?? '')
    }

    return {
      attrs,
      selectUser,
      userName,
      users: computed(() => unref(users).map(user => ({value: user.id, label: user.name})))
    }
  }
})
</script>
