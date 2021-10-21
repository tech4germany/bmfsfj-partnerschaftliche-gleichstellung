import { useStore, computed, reactive, unref } from '@nuxtjs/composition-api'
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from 'vuex-module-decorators'

export type User = {
  name: string
}

export type Task = {
  finished: boolean
  assignees: User[]
}

const DEFAULT_TASK: Task = {
  finished: false,
  assignees: [],
}

/**
 * Get the todo of the id from the store, also adds it to the store if it is still missing.
 *
 * MUST be rebinded to `this` inside a `@Mutation` to work.
 */
function getTodo(this: Todos, todoId: string) {
  if (this.todos[todoId] == null) {
    this.todos[todoId] = DEFAULT_TASK
  }

  return this.todos[todoId]
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
    console.log(todoId, finished)
    this.context.commit('updateTodo', {
      taskId: todoId,
      todo: {
        finished,
      },
    })
  }

  @Mutation
  addAssigneeToTodo({ todoId, assignee }: { todoId: string; assignee: User }) {
    const todo = getTodo.bind(this)(todoId)

    if (todo.assignees == null) {
      todo.assignees = []
    }

    todo.assignees.push(assignee)
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
