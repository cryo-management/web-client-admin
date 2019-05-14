<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field
        label="Validation:"
        :type="validationType"
        :message="validationFeedback"
      >
        <b-input v-model="form.validation" />
      </b-field>

      <b-field label="When:">
        <b-input v-model="form.valid_when" />
      </b-field>
      <div class="buttons">
        <button class="button is-success" @click.prevent="submit">
          Save
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'FieldValidationForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          schema_id: this.$route.params.schema_id,
          field_id: this.$route.params.field_id,
          validation: '',
          valid_when: '',
        }
      },
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    validationState() {
      return this.form.validation.length > 0
    },
    validationType() {
      if (this.form.validation.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    validationFeedback() {
      if (this.form.validation.length === 0) {
        return 'Validation is required'
      } else {
        return ''
      }
    },
    formState() {
      return this.validationState
    },
  },
  methods: {
    submit() {
      this.$emit('formToParent', this.form)
    },
  },
}
</script>

<style></style>
