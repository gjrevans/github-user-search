<template>
  <div id="app">
    <Navbar />
    <!-- Main Content -->
    <div class="l-main pt-4">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>
