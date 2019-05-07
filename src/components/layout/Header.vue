<template>
  <nav
    class="navbar is-dark is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <strong>Cryo</strong>
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/admin/languages">
          Languages
        </router-link>
        <router-link class="navbar-item" to="/admin/users">
          Users
        </router-link>
        <router-link class="navbar-item" to="/admin/groups">
          Groups
        </router-link>
        <router-link class="navbar-item" to="/admin/schemas">
          Schemas
        </router-link>
        <router-link class="navbar-item" to="/admin/currencies">
          Currencies
        </router-link>
        <router-link class="navbar-item" to="/admin/lookups">
          Lookups
        </router-link>
        <router-link class="navbar-item" to="/admin/jobs">
          Jobs
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"
            >{{ currentUser.first_name }} {{ currentUser.last_name }}</a
          >
          <!-- <a class="navbar-link"></a> -->
          <div class="navbar-dropdown">
            <a class="navbar-item" @click.prevent="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser']
    },
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      )

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target
            const $target = document.getElementById(target)

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style scoped></style>
