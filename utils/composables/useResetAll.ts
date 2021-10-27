import { useRouter } from '@nuxtjs/composition-api'
import { useT4gBannerStore } from '~/store/t4gBanner'
import { useTodosStore } from '~/store/todos'
import { useUserStore } from '~/store/user'
import { useUsersStore } from '~/store/users'

function useResetAllStores() {
  const userStore = useUserStore()
  const usersStore = useUsersStore()
  const todosStore = useTodosStore()
  const t4gBannerStore = useT4gBannerStore()

  return () => {
    userStore.reset()
    usersStore.reset()
    todosStore.reset()
    t4gBannerStore.reset()
  }
}

export function useResetAll() {
  const resetAllStores = useResetAllStores()
  const $router = useRouter()

  return () => {
    resetAllStores()
    $router.push('/')
  }
}
