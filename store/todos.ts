import { useStore, computed, reactive, unref } from '@nuxtjs/composition-api'
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from 'vuex-module-decorators'

export type Task = {
  finished: boolean
  assignees: { [key: string]: boolean }
}

const DEFAULT_TASK: Task = {
  finished: false,
  assignees: {},
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todos', // MUST be the path of this file starting in the `store` folder
})
export default class Todos extends VuexModule {
  todos: { [key: string]: Task } = {}

  @Mutation
  updateTodo({ taskId, todo }: { taskId: string; todo: Partial<Task> }) {
    this.todos = {
      ...this.todos,
      [taskId]: {
        ...DEFAULT_TASK,
        ...this.todos[taskId],
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
      taskId: todoId,
      todo: {
        finished,
      },
    })
  }

  @Action
  toggleTodoAssignee({ todoId, userId }: { todoId: string; userId: string }) {
    this.context.commit('updateTodo', {
      taskId: todoId,
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

export function getTask(store: Todos, taskId: string): Task {
  const task = computed(() => store.todos[taskId] ?? DEFAULT_TASK)

  return reactive({
    finished: computed(() => unref(task).finished),
    assignees: computed(() => unref(task).assignees),
  })
}
