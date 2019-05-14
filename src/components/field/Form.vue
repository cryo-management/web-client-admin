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

      <b-field label="Type" type="is-success">
        <b-select v-model="form.field_type" expanded>
          <option value="text">Text</option>
          <option value="integer">Integer</option>
          <option value="decimal">Decimal</option>
          <option value="lookup">Lookup</option>
          <option value="widget">Widget</option>
        </b-select>
      </b-field>

      <template v-if="showLookupList">
        <b-field label="Lookup" type="is-success">
          <b-select v-model="form.lookup_id" expanded>
            <option value="text">Text</option>
            <option value="integer">Integer</option>
            <option value="decimal">Decimal</option>
            <option value="lookup">Lookup</option>
            <option value="widget">Widget</option>
          </b-select>
        </b-field>

        <b-field label="Multivalue" type="is-success">
          <b-select v-model="form.multivalue" expanded>
            <option :value="true">Sim</option>
            <option :value="false">Não</option>
          </b-select>
        </b-field>
      </template>

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
  name: 'FieldForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: '',
          code: '',
          description: '',
          schema_id: this.$route.params.schema_id,
          field_type: '',
          lookup_id: '',
          multivalue: false,
          active: false,
        }
      },
    },
  },
  data() {
    return {
      showLookupList: false,
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
    fieldTypeState() {
      return this.form.field_type.length > 0
    },
    fieldTypeType() {
      if (this.form.field_type.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    fieldTypeFeedback() {
      if (this.form.field_type.length === 0) {
        return 'Type is required'
      } else {
        return ''
      }
    },
    formState() {
      return (
        this.nameState &&
        this.codeState &&
        this.descriptionState &&
        this.fieldTypeState
      )
    },
    fieldType() {
      return this.form.field_type
    },
  },
  watch: {
    fieldType(val) {
      if (val === 'lookup') {
        this.showLookupList = true
      } else {
        this.showLookupList = false
        this.form.lookup_id = ''
        this.form.multivalue = false
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
