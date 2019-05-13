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
            <a href="#" aria-current="page">Edit Tree Level</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <TreeLevelForm :form="form" @formToParent="submit" />
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
  name: 'TreeLevelEdit',
  components: {
    TreeLevelForm,
  },
  data() {
    return {
      treeID: this.$route.params.tree_id,
      treeLevelID: this.$route.params.tree_level_id,
      form: {
        name: '',
        code: '',
        description: '',
        tree_id: '',
      },
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
    },
    formStore() {
      return this.$store.getters['treeLevel/treeLevel']
    },
  },
  watch: {
    formStore() {
      const treeLevel = this.$store.getters['treeLevel/treeLevel']
      if (treeLevel) {
        this.form.id = treeLevel.id
        this.form.name = treeLevel.name
        this.form.code = treeLevel.code
        this.form.description = treeLevel.description
        this.form.tree_id = treeLevel.tree_id
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('treeLevel/getTreeLevel', {
        tree_id: this.treeID,
        tree_level_id: this.treeLevelID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('treeLevel/updateTreeLevel', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
