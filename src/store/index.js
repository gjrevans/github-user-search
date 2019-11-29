import Vue from 'vue'
import Vuex from 'vuex'

import initialState from "./initial_state"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state: initialState.get(),
  getters: getters,
  mutations: mutations,
  actions: actions
})
