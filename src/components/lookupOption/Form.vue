<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field label="Code:" :type="codeType" :message="codeFeedback">
        <b-input v-model="form.code" />
      </b-field>

      <b-field label="Value:" :type="valueType" :message="valueFeedback">
        <b-input v-model="form.value" />
      </b-field>

      <b-field label="Label:" :type="labelType" :message="labelFeedback">
        <b-input v-model="form.label" />
      </b-field>

      <b-field label="Active" type="is-success">
        <b-select v-model="form.active" expanded>
          <option :value="true">Sim</option>
          <option :value="false">Não</option>
        </b-select>
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
  name: 'LookupOptionForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          code: '',
          lookup_id: this.$route.params.lookup_id,
          value: '',
          label: '',
          active: false,
        }
      },
    },
  },
  computed: {
    codeType() {
      if (this.form.code.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    codeFeedback() {
      if (this.form.code.length === 0) {
        return 'Code is required'
      } else {
        return ''
      }
    },
    valueType() {
      if (this.form.value.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    valueFeedback() {
      if (this.form.value.length === 0) {
        return 'Value is required'
      } else {
        return ''
      }
    },
    labelType() {
      if (this.form.label.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    labelFeedback() {
      if (this.form.label.length === 0) {
        return 'Label is required'
      } else {
        return ''
      }
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
