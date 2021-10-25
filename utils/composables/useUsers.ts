import { computed, unref } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'
import { User, useUsersStore } from '~/store/users'

export function useUsers(): Ref<User[]> {
  const store = useUsersStore()

  return computed(() => Object.values(store.users))
}

export function useUser(
  id: string | null | Ref<string | null>
): Ref<User | null> {
  const store = useUsersStore()

  return computed(() => (unref(id) != null ? store.users[unref(id)!] : null))
}
