<template>
  <div id="app">
    <template v-if="currentUser">
      <Header />
    </template>
    <div class="columns">
      <aside class="column is-2 aside hero is-fullheight">
        <Menu />
      </aside>
      <div class="column is-10 hero is-fullheight has-background-light">
        <router-view class="main-content" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Menu from '@/components/layout/Menu.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Menu,
  },
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser']
    },
  },
}
</script>

<style>
html,
body {
  height: 100%;
  background-color: #fff;
}
.tab-content {
  padding-top: 0 !important;
}
.main-content {
  padding-right: 0.75rem;
}
</style>
