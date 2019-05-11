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
            <router-link to="/admin/lookups">
              Lookup List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Lookup</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column is-4 is-offset-4">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <LookupForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import LookupForm from '@/components/lookup/Form.vue'

export default {
  name: 'LookupEdit',
  components: {
    LookupForm,
  },
  data() {
    return {
      id: this.$route.params.lookup_id,
      form: {
        name: '',
        code: '',
        description: '',
        type: '',
        query: '',
        value: '',
        label: '',
        autocomplete: '',
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
      return this.$store.getters['lookup/lookup']
    },
  },
  watch: {
    formStore() {
      const lookup = this.$store.getters['lookup/lookup']
      if (lookup) {
        this.form.id = lookup.id
        this.form.name = lookup.name
        this.form.code = lookup.code
        this.form.description = lookup.description
        this.form.type = lookup.type
        this.form.query = lookup.query
        this.form.value = lookup.value
        this.form.label = lookup.label
        this.form.autocomplete = lookup.autocomplete
        this.form.active = lookup.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('lookup/getLookup', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('lookup/updateLookup', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
