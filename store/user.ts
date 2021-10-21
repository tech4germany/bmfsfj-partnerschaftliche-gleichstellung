import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

export enum HealthInsurance {
  GESETZLICH = 'GESETZLICH',
  GESETZLICH_FAMILIENVERSICHERT = 'GESETZLICH_FAMILIENVERSICHERT',
  PRIVAT = 'PRIVAT'
}

export enum WorkSituation {
  ANGESTELLT = 'ANGESTELLT',
  SELBSTSTÄNDIG = 'SELBSTSTÄNDIG',
  ARBEITSSUCHEND = 'ARBEITSSUCHEND',
  IN_AUSBILDUNG = 'IN_AUSBILDUNG',
}

export enum BabySituation {
  NOT_PLANED = 'NOT_PLANED',
  WISH = 'WISH',
  EXPECTED = 'EXPECTED',
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'user', // MUST be the path of this file starting in the `store` folder
})
export default class User extends VuexModule {
  married: boolean | null = null
  relationship: boolean | null = null
  babySituation: BabySituation | null = null
  healthInsurance: HealthInsurance | null = null
  workSituation: WorkSituation | null = null
  // TODO: store as a date or so (and use a moment.js alternative for handling of the date)
  expectedBirthday: string | null = null

  @Mutation
  setMarried(married: boolean) {
    this.married = married
  }

  @Mutation
  setRelationship(relationship: boolean) {
    this.relationship = relationship
  }

  @Mutation
  setBabySituation(babySituation: BabySituation) {
    this.babySituation = babySituation
  }

  @Mutation
  setHealthInsurance(healthInsurance: HealthInsurance) {
    this.healthInsurance = healthInsurance
  }

  @Mutation
  setWorkSituation(workSituation: WorkSituation) {
    this.workSituation = workSituation
  }

  @Mutation
  setExpectedBirthday(expectedBirthday: string) {
    this.expectedBirthday = expectedBirthday
  }

  get privateHealthInsurance(): boolean | null {
    if (this.healthInsurance == null) return null

    return this.healthInsurance === HealthInsurance.PRIVAT
  }
}

export const useUserStore = () => getModule(User, useStore())