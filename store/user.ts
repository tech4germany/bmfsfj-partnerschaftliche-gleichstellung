import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

export enum HealthInsurance {
  GESETZLICH = 'GESETZLICH',
  GESETZLICH_FAMILIENVERSICHERT = 'GESETZLICH_FAMILIENVERSICHERT',
  PRIVAT = 'PRIVAT'
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'user' // MUST be the path of this file starting in the `store` folder
})
export default class User extends VuexModule {
  married: boolean | null = null;
  healthInsurance: HealthInsurance | null = null

  @Mutation
  setMarried(married: boolean) {
    this.married = married;
  }

  @Mutation
  setHealthInsurance(healthInsurance: HealthInsurance) {
    this.healthInsurance = healthInsurance;
  }

  get privateHealthInsurance(): boolean | null {
    if (this.healthInsurance == null) return null;

    return this.healthInsurance === HealthInsurance.PRIVAT;
  }
}

export const useUserStore = () => getModule(User, useStore())
