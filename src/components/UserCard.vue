<template>
  <div class="p-4 bg-white rounded d-flex align-items-center mb-3">
    <img :src="this.user.avatar_url" :alt="this.user.name" class="rounded-circle mr-3 w--4">
    <div>
      <h4 class="mb-0">{{ availableName }}</h4>
      <a :href="this.user.html_url" target="_blank">View Profile</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserCard',
    props: ['user'],
    computed: {
      availableName() {
        return this.user.name || this.user.login
      }
    }
  }
</script>
