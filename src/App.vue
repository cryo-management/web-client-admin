<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <template v-if="currentUser">
      <Header />
    </template>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser']
    },
  },
}
</script>

<style>
html {
  overflow-y: auto !important;
}
</style>
