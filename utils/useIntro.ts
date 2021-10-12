import { useRouter, wrapProperty, unref, Ref, computed } from "@nuxtjs/composition-api";

export const useLocalLocation = wrapProperty('localeLocation', false)

export function useNextQuestion(nextLocation: Ref<string> | string) {
  const $router = useRouter()
  const localeLocation = useLocalLocation();
  const location = computed(() => localeLocation(unref(nextLocation)));

  return {
    goToNextQuestion() {
      if (!location.value) throw new Error(`Unknown location '${unref(nextLocation)}'`)
      $router.push(location.value)
    }
  }
}
