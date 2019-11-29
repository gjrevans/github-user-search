<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <SearchForm />
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
import SearchForm from '@/components/SearchForm.vue'
import SearchResultCard from '@/components/SearchResultCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'
import NoResultsCard from '@/components/NoResultsCard.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'search',
  computed: {
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
    hasSearchResults() {
      return this.searchResults.length > 0
    },
    hasUserResult() {
      return this.user.constructor === Object && Object.entries(this.user).length > 0
    },
  },
  created() {
    if (this.$route.query.term) {
      this.$store.commit('setUsername', this.$route.query.term)
      this.$store.dispatch('getSearchResults')
    }
  },
  components: {
    SearchForm,
    SearchResultCard,
    LoadingCard,
    NoResultsCard,
    UserCard
  },
}
</script>
