<template>
  <a :href="result.html_url" target="blank" class="p-4 bg-white rounded mb-3 d-block no-underline">
    <div class="d-flex align-items-center justify-content-between">
      <h5 class="mb-1">{{ result.name }}</h5>
      <div class="d-flex align-items-center">
        <div class="mr-2">
          <i class="fas fa-eye text-secondary"></i>
          ({{ result.watchers_count }})
        </div>
        <div>
          <i class="fas fa-star text-warning"></i>
          ({{ result.stargazers_count }})
        </div>
      </div>
    </div>
    <p class="text-muted mb-1">{{ result.owner.login }}</p>
    <p class="text-dark mb-1">{{result.description}}</p>

    <div v-if="result.language" class="badge badge-pill badge-primary">
      {{ result.language }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'SearchResultCard',
  props: ['result']
}
</script>
