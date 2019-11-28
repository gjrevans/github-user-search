<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <!-- Search Box -->
        <div class="m-search mb-3">
          <div class="m-search__body">
            <div class="m-search__box">
              <div class="m-search__box__body">
                <b-form @submit="formSubmit" @reset="formReset" class="w-100">
                  <b-form-group
                    id="username"
                    label="Search GitHub"
                    class="text-white"
                  >
                    <b-form-input
                      id="userNameInput"
                      v-model="username"
                      type="text"
                      required
                      placeholder="Enter a GitHub user or Org..."
                    ></b-form-input>
                  </b-form-group>
                  <div class="row">
                    <div class="col-md-6 mb-3 mb-md-0">
                      <b-button type="reset" variant="danger" class="btn-block" :disabled="!hasFormContent">Reset</b-button>
                    </div>
                    <div class="col-md-6">
                      <b-button type="submit" variant="primary" class="btn-block">Submit</b-button>
                    </div>
                  </div>
                </b-form>
              </div>
            </div>
          </div>
        </div>

        <!-- Results -->
        <UserCard v-if="hasUserResult" :user="this.user" />
        <LoadingCard v-if="isLoading" />
        <NoResultsCard v-if="noResultsFound" />

        <div v-if="hasSearchResults">
          <SearchResultCard v-for="(result, index) in this.searchResults" :key="index" :result="result" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SearchResultCard from '@/components/SearchResultCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import NoResultsCard from '@/components/NoResultsCard.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'search',
  computed: {
    username: {
      get() {
        return this.$store.getters['username']
      },
      set(value) {
        this.$store.commit('setUsername', value)
      }
    },
    user() {
      return this.$store.getters['user']
    },
    isLoading () {
      return this.$store.getters['isLoading']
    },
    searchResults() {
      return this.$store.getters['searchResults']
    },
    noResultsFound() {
      return this.$store.getters['noResultsFound']
    },
    hasFormContent() {
      return this.username.length > 0
    },
    hasSearchResults() {
      return this.searchResults.length > 0
    },
    hasUserResult() {
      return this.user.constructor === Object && Object.entries(this.user).length > 0
    },
  },
  methods: {
    formSubmit(evt) {
      evt.preventDefault()
      this.$store.dispatch('getSearchResults')
    },
    formReset(evt) {
      evt.preventDefault()
      this.$store.dispatch('resetSearch')
    },
  },
  created() {
    if (this.$route.query.term) {
      this.$store.commit('setUsername', this.$route.query.term)
      this.$store.dispatch('getSearchResults')
    }
  },
  components: {
    SearchResultCard,
    LoadingCard,
    NoResultsCard,
    UserCard
  },
}
</script>
