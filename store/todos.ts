import { useStore, computed, reactive, unref } from '@nuxtjs/composition-api'
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from 'vuex-module-decorators'

export type Todo = {
  finished: boolean
  assignees: { [key: string]: boolean }
}

const DEFAULT_TODO: Todo = {
  finished: false,
  assignees: {},
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todos', // MUST be the path of this file starting in the `store` folder
})
export default class Todos extends VuexModule {
  todos: { [key: string]: Todo } = {}

  @Mutation
  updateTodo({ todoId, todo }: { todoId: string; todo: Partial<Todo> }) {
    this.todos = {
      ...this.todos,
      [todoId]: {
        ...DEFAULT_TODO,
        ...this.todos[todoId],
        ...todo,
      },
    }
  }

  @Action
  updateTodoFinished({
    todoId,
    finished,
  }: {
    todoId: string
    finished: boolean
  }) {
    this.context.commit('updateTodo', {
      todoId,
      todo: {
        finished,
      },
    })
  }

  @Action
  toggleTodoAssignee({ todoId, userId }: { todoId: string; userId: string }) {
    this.context.commit('updateTodo', {
      todoId,
      todo: {
        assignees: {
          ...this.todos[todoId].assignees,
          [userId]: !(this.todos[todoId].assignees[userId] ?? false),
        },
      },
    })
  }
}

export const useTodosStore = () => getModule(Todos, useStore())

export function getTodo(store: Todos, todoId: string): Todo {
  const todo = computed(() => store.todos[todoId] ?? DEFAULT_TODO)

  return reactive({
    finished: computed(() => unref(todo).finished),
    assignees: computed(() => unref(todo).assignees),
  })
}
