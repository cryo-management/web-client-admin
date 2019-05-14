<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field label="Name:" :type="nameType" :message="nameFeedback">
        <b-input v-model="form.name" />
      </b-field>

      <b-field label="Code:" :type="codeType" :message="codeFeedback">
        <b-input v-model="form.code" />
      </b-field>

      <b-field
        label="Description:"
        :type="descriptionType"
        :message="descriptionFeedback"
      >
        <b-input v-model="form.description" type="textarea" />
      </b-field>

      <b-field label="Type" :type="typeType" :message="typeFeedback">
        <b-select v-model="form.type" expanded>
          <option value="static">Estático</option>
          <option value="dynamic">Dinâmico</option>
        </b-select>
      </b-field>

      <template v-if="showQuery">
        <b-field label="Query:" :type="queryType" :message="queryFeedback">
          <b-input v-model="form.query" type="textarea" />
        </b-field>
      </template>

      <b-field label="Value:" :type="valueType" :message="valueFeedback">
        <b-input v-model="form.value" />
      </b-field>

      <b-field label="Label:" :type="labelType" :message="labelFeedback">
        <b-input v-model="form.label" />
      </b-field>

      <b-field label="Autocomplete:">
        <b-input v-model="form.autocomplete" />
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
  name: 'LookupForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: '',
          code: '',
          description: '',
          type: '',
          query: '',
          value: '',
          label: '',
          autocomplete: '',
          active: false,
        }
      },
    },
  },
  data() {
    return {
      showQuery: false,
    }
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
    descriptionState() {
      return this.form.description.length > 0
    },
    descriptionType() {
      if (this.form.description.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    descriptionFeedback() {
      if (this.form.description.length === 0) {
        return 'Description is required'
      } else {
        return ''
      }
    },
    typeState() {
      return this.form.type.length > 0
    },
    typeType() {
      if (this.form.type.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    typeFeedback() {
      if (this.form.type.length === 0) {
        return 'Type is required'
      } else {
        return ''
      }
    },
    queryState() {
      return this.form.type === 'dynamic' && this.form.query.length > 0
    },
    queryType() {
      if (this.form.type === 'dynamic' && this.form.query.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    queryFeedback() {
      if (this.form.type === 'dynamic' && this.form.query.length === 0) {
        return 'Query is required'
      } else {
        return ''
      }
    },
    valueState() {
      return this.form.value.length > 0
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
    labelState() {
      return this.form.label.length > 0
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
    formState() {
      return (
        this.nameState &&
        this.codeState &&
        this.descriptionState &&
        this.typeState &&
        this.queryState &&
        this.valueState &&
        this.labelState
      )
    },
    type() {
      return this.form.type
    },
  },
  watch: {
    type(val) {
      if (val === 'dynamic') {
        this.showQuery = true
      } else {
        this.showQuery = false
        this.form.query = ''
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
