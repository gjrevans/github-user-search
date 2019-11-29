export default {
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
}
