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

      <b-field
        label="Type:"
        :type="widgetTypeType"
        :message="widgetTypeFeedback"
      >
        <b-input v-model="form.widget_type" />
      </b-field>

      <b-field label="Query:" :type="queryType" :message="queryFeedback">
        <b-input v-model="form.query" type="textarea" />
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
  name: 'WidgetForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: '',
          code: '',
          description: '',
          widget_type: '',
          query: '',
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
    widgetTypeState() {
      return this.form.widget_type.length > 0
    },
    widgetTypeType() {
      if (this.form.widget_type.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    widgetTypeFeedback() {
      if (this.form.widget_type.length === 0) {
        return 'Type is required'
      } else {
        return ''
      }
    },
    queryState() {
      return this.form.query.length > 0
    },
    queryType() {
      if (this.form.query.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    queryFeedback() {
      if (this.form.query.length === 0) {
        return 'Query is required'
      } else {
        return ''
      }
    },
    formState() {
      return (
        this.nameState &&
        this.codeState &&
        this.descriptionState &&
        this.widgetTypeState &&
        this.queryState
      )
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
