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
            <router-link to="/admin/schemas">
              Schema List
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/schemas/${schemaID}`">
              Edit Schema
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit View</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <ViewForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import ViewForm from '@/components/view/Form.vue'

export default {
  name: 'ViewEdit',
  components: {
    ViewForm,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      viewID: this.$route.params.view_id,
      form: {
        name: '',
        code: '',
        description: '',
        schema_id: '',
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
      return this.$store.getters['view/view']
    },
  },
  watch: {
    formStore() {
      const view = this.$store.getters['view/view']
      if (view) {
        this.form.id = view.id
        this.form.name = view.name
        this.form.code = view.code
        this.form.description = view.description
        this.form.schema_id = view.schema_id
        this.form.active = view.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('view/getView', {
        schema_id: this.schemaID,
        view_id: this.viewID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('view/updateView', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
