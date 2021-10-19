import { useStore } from '@nuxtjs/composition-api'
import { v4 as uuidv4 } from 'uuid'
import {
  Module,
  VuexModule,
  Mutation,
  getModule,
  Action,
} from 'vuex-module-decorators'

export type User = {
  id: string
  name: string
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'users', // MUST be the path of this file starting in the `store` folder
})
export default class Users extends VuexModule {
  users: { [key: string]: User } = {}

  @Mutation
  setUser(user: User) {
    this.users = {
      ...this.users,
      [user.id]: user,
    }
  }

  @Action
  createUser(user: Pick<User, 'name'>) {
    const id = uuidv4()

    this.context.commit('setUser', {
      id,
      ...user,
    })

    return id
  }

  @Action
  updateUser(user: Partial<User> & Pick<User, 'id'>) {
    if (!this.users[user.id] == null) {
      throw new Error(
        `Unknown user with id ${user.id}. Please first create the user using createUser().`
      )
    }

    this.context.commit('setUser', {
      ...this.users[user.id],
      ...user,
    })
  }
}

export const useUsersStore = () => getModule(Users, useStore())
