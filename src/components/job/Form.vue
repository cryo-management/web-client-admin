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
        label="Timeout:"
        :type="execTimeoutType"
        :message="execTimeoutFeedback"
      >
        <b-input v-model="form.exec_timeout" />
      </b-field>

      <b-field label="Type" :type="typeType" :message="typeFeedback">
        <b-select v-model="form.job_type" expanded>
          <option value="system">System</option>
          <option value="user">User</option>
        </b-select>
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
  name: 'JobForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: '',
          code: '',
          description: '',
          exec_timeout: 60,
          job_type: '',
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
    execTimeoutState() {
      return this.form.exec_timeout.length > 0
    },
    execTimeoutType() {
      if (this.form.exec_timeout.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    execTimeoutFeedback() {
      if (this.form.exec_timeout.length === 0) {
        return 'Timeout is required'
      } else {
        return ''
      }
    },
    typeState() {
      return this.form.job_type.length > 0
    },
    typeType() {
      if (this.form.job_type.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    typeFeedback() {
      if (this.form.job_type.length === 0) {
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
        this.execTimeoutState &&
        this.typeState
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
