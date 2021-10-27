import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

export enum HealthInsurance {
  GESETZLICH = 'GESETZLICH',
  PRIVAT = 'PRIVAT',
}

export enum WorkSituation {
  ANGESTELLT = 'ANGESTELLT',
  SELBSTSTÄNDIG = 'SELBSTSTÄNDIG',
  ARBEITSSUCHEND = 'ARBEITSSUCHEND',
  IN_AUSBILDUNG = 'IN_AUSBILDUNG',
}

export enum BabySituation {
  EXPECTED = 'EXPECTED',
  NOT_PLANED = 'NOT_PLANED',
  WISH = 'WISH',
}

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'user', // MUST be the path of this file starting in the `store` folder
})
export default class User extends VuexModule {
  introFinished: boolean = false
  married: boolean | null = null
  relationship: boolean | null = null
  babySituation: BabySituation | null = null
  healthInsurance: HealthInsurance | null = null
  workSituation: WorkSituation | null = null
  expectedBirthday: number | null = null // in ms since 1.1.1970
  firstUser: string | null = null
  secondUser: string | null = null

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
  setExpectedBirthday(expectedBirthday: number) {
    this.expectedBirthday = expectedBirthday
  }

  @Mutation
  setIntroFinished(introFinished: boolean) {
    this.introFinished = introFinished
  }

  @Mutation
  setFirstUser(firstUser: string) {
    this.firstUser = firstUser
  }

  @Mutation
  setSecondUser(secondUser: string) {
    this.secondUser = secondUser
  }

  @Mutation
  reset() {
    this.introFinished = false
    this.married = null
    this.relationship = null
    this.babySituation = null
    this.healthInsurance = null
    this.workSituation = null
    this.expectedBirthday = null
    this.firstUser = null
    this.secondUser = null
  }

  get privateHealthInsurance(): boolean | null {
    if (this.healthInsurance == null) return null

    return this.healthInsurance === HealthInsurance.PRIVAT
  }
}

export const useUserStore = () => getModule(User, useStore())
