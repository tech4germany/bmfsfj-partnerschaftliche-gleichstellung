import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'teststore' // MUST be the path starting in the `store` folder
})
export default class Test extends VuexModule {
  checkbox = true

  @Mutation
  updateCheckbox(newValue: boolean) {
    this.checkbox = newValue
  }

  // action 'reject' commits mutation 'updateCheckbox' when done with return value as payload
  @Action({ commit: 'updateCheckbox' })
  reject() {
    return false
  }

  @Action({ commit: 'updateCheckbox' })
  accept() {
    return true
  }
}

export const useTestStore = () => getModule(Test, useStore())
