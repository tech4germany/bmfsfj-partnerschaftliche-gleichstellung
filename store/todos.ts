import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import { User, UserTask } from '~/utils/Task'

/**
 * Get the todo of the id from the store, also adds it to the store if it is still missing.
 *
 * MUST be rebinded to `this` inside a `@Mutation` to work.
 */
function getTodo(this: Todos, todoId: string) {
  if (this.todos[todoId] == null) {
    this.todos[todoId] = {}
  }

  return this.todos[todoId];
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todos' // MUST be the path of this file starting in the `store` folder
})
export default class Todos extends VuexModule {
  todos: {[key: string]: Partial<UserTask>} = {}

  @Mutation
  updateTodoFinished({todoId, finished}: { todoId: string, finished: boolean }) {
    const todo = getTodo.bind(this)(todoId);
    todo.finished = finished;
  }

  @Mutation
  addAssigneeToTodo({todoId, assignee}: { todoId: string, assignee: User }) {
    const todo = getTodo.bind(this)(todoId);

    if (todo.assignees == null) {
      todo.assignees = [];
    }

    todo.assignees.push(assignee);
  }
}

export const useTodosStore = () => getModule(Todos, useStore())
