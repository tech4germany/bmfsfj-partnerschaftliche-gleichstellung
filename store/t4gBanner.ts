import { useStore } from '@nuxtjs/composition-api'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 't4gBanner' // MUST be the path of this file starting in the `store` folder
})
export default class T4gBanner extends VuexModule {
  hidden: boolean | null = null;

  @Mutation
  hide() {
    this.hidden = true;
  }
}

export const useT4gBannerStore = () => getModule(T4gBanner, useStore())
