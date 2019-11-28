import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import initialState from "./initial_state";
import utilities from '@/helpers/utilities.js'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: initialState.get(),
  getters: {
    user(state)           { return state.user },
    username(state)       { return state.username },
    searchResults(state)  { return state.searchResults },
    isLoading(state)      { return state.isLoading },
    noResultsFound(state) { return state.noResultsFound },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    },
    setUser(state, user) {
      state.user = user
    },
    setLoading(state, status){
      state.isLoading = status
    },
    setSearchResults(state, results) {
      if (results.length > 0) {
        state.searchResults = results
      } else {
        state.noResultsFound = true
      }
    },
    clearUserName(state) {
      state.username = ''
    },
    clearSearchResults(state) {
      const newState = {...state}
      newState.user = {}
      newState.searchResults = []
      newState.isLoading = false
      newState.noResultsFound = false
      Object.assign(state, newState)
    }
  },
  actions: {
    resetSearch({commit}) {
      commit('clearUserName')
      commit('clearSearchResults')
      router
      .replace({query: {}})
      .catch(() => {
        // Catch if user searches the same name twice
      })
    },
    getSearchResults({dispatch, commit, state}) {
      router
      .push({ query: { term: state.username }})
      .catch(() => {
        // Catch if user searches the same name twice
      })
      commit('clearSearchResults')
      commit('setLoading', true)

      axios.get(`https://api.github.com/users/${state.username}`)
      .then(response => {
        commit('setUser', response.data)
        if (response.data.repos_url && utilities.validURL(response.data.repos_url)) {
          dispatch('getRepositories', response.data.repos_url)
        }
      })
      .catch(() => {
        commit('setSearchResults', [])
        commit('setLoading', false)
      })
    },
    getRepositories({commit}, url) {
      axios.get(url)
      .then(response => {
        const searchResults = response.data;
        commit('setLoading', false)
        commit('setSearchResults', searchResults)
      })
      .catch(() => {
        commit('setSearchResults', [])
        commit('setLoading', false)
      })
    }
  }
})
