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
            <a href="#" aria-current="page">Edit Field</a>
          </li>
        </ul>
      </nav>
    </div>
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Field">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <FieldForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Validations">
        <FieldValidation></FieldValidation>
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
import FieldForm from '@/components/field/Form.vue'
import FieldValidation from '@/views/fieldValidation/List.vue'

export default {
  name: 'FieldEdit',
  components: {
    FieldForm,
    FieldValidation,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      fieldID: this.$route.params.field_id,
      form: {
        name: '',
        code: '',
        description: '',
        schema_id: '',
        field_type: '',
        lookup_id: '',
        multivalue: false,
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
      return this.$store.getters['field/field']
    },
  },
  watch: {
    formStore() {
      const field = this.$store.getters['field/field']
      if (field) {
        this.form.id = field.id
        this.form.name = field.name
        this.form.code = field.code
        this.form.description = field.description
        this.form.schema_id = field.schema_id
        this.form.field_type = field.field_type
        this.form.lookup_id = field.lookup_id
        this.form.multivalue = field.multivalue
        this.form.active = field.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('field/getField', {
        schema_id: this.schemaID,
        field_id: this.fieldID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('field/updateField', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
