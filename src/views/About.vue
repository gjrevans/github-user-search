<template>
  <div class="text-white">
    <h1>Installed Components</h1>
    <InstalledComponents/>
  </div>
</template>

<script>
// @ is an alias to /src
import InstalledComponents from '@/components/InstalledComponents.vue'

export default {
  name: "About",
  components: {
    InstalledComponents
  }
}
</script>
