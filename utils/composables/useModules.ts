import { computed, unref } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'
import { Task, tasksFinishedPercent } from '../Task'
import { useTasks } from './useTasks'
import { getModules, Module } from '~/utils/Module'
import { useContent } from '~/utils/composables/useContent'
import { useAsnycArrayResult } from '~/utils/composables/useAsnycResult'

export function useModules(): Ref<Module[]> {
  const $content = useContent()
  return useAsnycArrayResult(() => getModules($content))
}

export function useModuleIds(): Ref<string[]> {
  const modules = useModules()
  return computed(() => modules.value.map((modul) => modul.id))
}

export function useModule(
  moduleId: string | Ref<string>
): Ref<Module | undefined> {
  const modules = useModules()

  return computed(() =>
    unref(modules).find((module) => module.id === unref(moduleId))
  )
}

export function useModuleTasks(moduleId: string | Ref<string>): Ref<Task[]> {
  return useTasks({
    modules: {
      $contains: unref(moduleId),
    },
  })
}

export function useModuleFinishedPercent(
  moduleId: string | Ref<string>
): Ref<number> {
  const tasks = useModuleTasks(moduleId)

  return computed(() => tasksFinishedPercent(unref(tasks)))
}
