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
          <li>
            <router-link :to="`/admin/schemas/${schemaID}/fields/${fieldID}`">
              Edit Field
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Create Field Validation</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column is-4 is-offset-4">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <FieldValidationForm @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import FieldValidationForm from '@/components/fieldValidation/Form.vue'

export default {
  name: 'FieldCreate',
  components: {
    FieldValidationForm,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      fieldID: this.$route.params.field_id,
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
          await this.$store.dispatch(
            'fieldValidation/createFieldValidation',
            data
          )
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
