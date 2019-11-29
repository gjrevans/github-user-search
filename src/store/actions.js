import axios from 'axios'
import utilities from '@/helpers/utilities.js'
import router from '@/router'

export default {
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
