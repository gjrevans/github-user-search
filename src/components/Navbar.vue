<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand href="#" class="text-white">
          <i class="fab fa-github mr-2"></i>
          <span>GitHub</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Search</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- Right Side Items -->
          </b-navbar-nav>
        </b-collapse>
      </div>
  </b-navbar>
  </div>

</template>

<script>
export default {
}
</script>
