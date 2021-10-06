import VuexPersistence from 'vuex-persist' // eslint-disable-line import/no-named-as-default

export default ({ store }: any) => {
  new VuexPersistence({
    storage: window.localStorage
  }).plugin(store);
}
