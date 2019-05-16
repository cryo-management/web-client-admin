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
          <li class="is-active">
            <a href="#" aria-current="page">Edit Tree</a>
          </li>
        </ul>
      </nav>
    </div>
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Tree">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <TreeForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Units">
        <TreeUnitList></TreeUnitList>
      </b-tab-item>
      <b-tab-item class="card hero" label="Levels">
        <TreeLevelList></TreeLevelList>
      </b-tab-item>
    </b-tabs>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import TreeForm from '@/components/tree/Form.vue'
import TreeUnitList from '@/views/treeUnit/List.vue'
import TreeLevelList from '@/views/treeLevel/List.vue'

export default {
  name: 'TreeEdit',
  components: {
    TreeForm,
    TreeUnitList,
    TreeLevelList,
  },
  data() {
    return {
      id: this.$route.params.tree_id,
      form: {
        name: '',
        code: '',
        description: '',
        active: false,
      },
      activeTab: 0,
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
      return this.$store.getters['tree/tree']
    },
  },
  watch: {
    formStore() {
      const tree = this.$store.getters['tree/tree']
      if (tree) {
        this.form.id = tree.id
        this.form.name = tree.name
        this.form.code = tree.code
        this.form.description = tree.description
        this.form.active = tree.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('tree/getTree', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('tree/updateTree', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
