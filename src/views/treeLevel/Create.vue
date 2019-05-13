<template>
  <section>
    <div class="column">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/admin/trees">
              Tree List
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/trees/${treeID}`">
              Edit Tree
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Create Tree Level</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <TreeLevelForm @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import TreeLevelForm from '@/components/treeLevel/Form.vue'

export default {
  name: 'TreeLevelCreate',
  components: {
    TreeLevelForm,
  },
  data() {
    return {
      treeID: this.$route.params.tree_id,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('treeLevel/createTreeLevel', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
