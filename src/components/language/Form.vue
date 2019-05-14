<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field label="Name:" :type="nameType" :message="nameFeedback">
        <b-input v-model="form.name" />
      </b-field>

      <b-field label="Code:" :type="codeType" :message="codeFeedback">
        <b-input v-model="form.code" />
      </b-field>

      <template v-if="form.id">
        <b-field label="Active" type="is-success">
          <b-select v-model="form.active" expanded>
            <option :value="true">Sim</option>
            <option :value="false">Não</option>
          </b-select>
        </b-field>
      </template>

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
  name: 'LanguageForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: '',
          code: '',
          active: false,
        }
      },
    },
  },
  computed: {
    nameState() {
      return this.form.name.length > 0
    },
    nameType() {
      if (this.form.name.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    nameFeedback() {
      if (this.form.name.length === 0) {
        return 'Name is required'
      } else {
        return ''
      }
    },
    codeState() {
      return this.form.code.length > 0
    },
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
    formState() {
      return this.nameState && this.codeState
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
