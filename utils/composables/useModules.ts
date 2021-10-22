import { computed, unref } from '@vue/composition-api'
import type { Ref } from '@vue/composition-api'
import { Todo, todosFinishedPercent } from '../Todo'
import { useTodos } from './useTodos'
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

export function useModuleTodos(moduleId: string | Ref<string>): Ref<Todo[]> {
  return useTodos(unref(moduleId))
}

export function useModuleFinishedPercent(
  moduleId: string | Ref<string>
): Ref<number> {
  const todos = useModuleTodos(moduleId)

  return computed(() => todosFinishedPercent(unref(todos)))
}

export function useTodoModules(todo: Ref<Todo | null>): Ref<Module[]> {
  const modules = useModules()

  return computed(() => {
    if (todo.value === null) return []

    const todoModules = todo.value.modules

    return modules.value.filter(
      (module) => todoModules.find((id) => id === module.id) != null
    )
  })
}
