<template>
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
</template>

<script>
export default {
  name: "SearchForm",
  computed: {
    username: {
      get() {
        return this.$store.getters['username']
      },
      set(value) {
        this.$store.commit('setUsername', value)
      }
    },
    hasFormContent() {
      return this.username.length > 0
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
}
</script>
