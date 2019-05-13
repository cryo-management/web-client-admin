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
            <a href="#" aria-current="page">Edit Field Validation</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <FieldValidationForm :form="form" @formToParent="submit" />
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
  name: 'FieldValidationEdit',
  components: {
    FieldValidationForm,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      fieldID: this.$route.params.field_id,
      fieldValidationID: this.$route.params.field_validation_id,
      form: {
        schema_id: '',
        field_id: '',
        validation: '',
        valid_when: '',
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
      return this.$store.getters['fieldValidation/fieldValidation']
    },
  },
  watch: {
    formStore() {
      const fieldValidation = this.$store.getters[
        'fieldValidation/fieldValidation'
      ]
      if (fieldValidation) {
        this.form.id = fieldValidation.id
        this.form.schema_id = fieldValidation.schema_id
        this.form.field_id = fieldValidation.field_id
        this.form.validation = fieldValidation.validation
        this.form.valid_when = fieldValidation.valid_when
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('fieldValidation/getFieldValidation', {
        schema_id: this.schemaID,
        field_id: this.fieldID,
        field_validation_id: this.fieldValidationID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch(
            'fieldValidation/updateFieldValidation',
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
