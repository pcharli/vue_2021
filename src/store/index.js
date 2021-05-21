import Vue from 'vue'
import Vuex from 'vuex'
import services from '@/services/beers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    setAllBeers(state, beers) {
      state.beers = beers
    }
  },
  getters: {
    getAllBeers(state) {
      return state.beers
    }
  },
  actions: {
    getBeers(context) {
      services.getAllBeers()
      .then(resp => context.commit('setAllBeers',resp))
      .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
