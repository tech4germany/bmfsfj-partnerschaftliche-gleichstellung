import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todos' // MUST be the path of this file starting in the `store` folder
})
export default class Todos extends VuexModule {
  todos: {[key: string]: {finished: boolean}} = {}

  @Mutation
  updateTodoFinished({todo, finished}: { todo: string, finished: boolean }) {
    if (this.todos[todo] == null) {
      this.todos[todo] = {
        finished
      }
    }

    this.todos[todo].finished = finished
  }
}

export const useTodosStore = () => getModule(Todos, useStore())
