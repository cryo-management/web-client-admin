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
            <a href="#" aria-current="page">Edit Tree Unit</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <TreeUnitForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import TreeUnitForm from '@/components/treeUnit/Form.vue'

export default {
  name: 'TreeUnitEdit',
  components: {
    TreeUnitForm,
  },
  data() {
    return {
      treeID: this.$route.params.tree_id,
      treeUnitID: this.$route.params.tree_unit_id,
      form: {
        name: '',
        code: '',
        description: '',
        tree_id: '',
        parent_id: '',
        active: false,
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
      return this.$store.getters['treeUnit/treeUnit']
    },
  },
  watch: {
    formStore() {
      const treeUnit = this.$store.getters['treeUnit/treeUnit']
      if (treeUnit) {
        this.form.id = treeUnit.id
        this.form.name = treeUnit.name
        this.form.code = treeUnit.code
        this.form.description = treeUnit.description
        this.form.tree_id = treeUnit.tree_id
        this.form.parent_id = treeUnit.parent_id
        this.form.active = treeUnit.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('treeUnit/getTreeUnit', {
        tree_id: this.treeID,
        tree_unit_id: this.treeUnitID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('treeUnit/updateTreeUnit', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
