import { ref, watchEffect } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'

/**
 * Get a reference to the result of `f`. `f` is run whenever a refence it uses is updated (see `watchEffect`).
 */
export function useAsnycResult<T>(f: () => Promise<T>): Ref<T | null> {
  const result: Ref<T | null> = ref(null)

  watchEffect(async () => {
    result.value = await f()
  })

  return result
}

/**
 * Get a reference to the result of `f`. `f` is run whenever a refence it uses is updated (see `watchEffect`).
 */
export function useAsnycArrayResult<T>(f: () => Promise<T[]>): Ref<T[]> {
  const result: Ref<T[]> = ref([])

  watchEffect(async () => {
    result.value = await f()
  })

  return result
}
