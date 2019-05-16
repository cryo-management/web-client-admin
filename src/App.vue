<template>
  <div id="app">
    <template v-if="currentUser">
      <Header />
    </template>
    <div class="columns">
      <template v-if="currentUser">
        <aside class="column is-2 aside hero is-fullheight">
          <Menu />
        </aside>
      </template>
      <div class="column hero is-fullheight has-background-light">
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
  padding: 0 !important;
}
.main-content {
  padding-right: 0.75rem;
}
</style>
