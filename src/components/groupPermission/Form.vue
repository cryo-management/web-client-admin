<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field
        label="Structure Type"
        :type="structureTypeType"
        :message="structureTypeFeedback"
      >
        <b-select v-model="form.structure_type" expanded>
          <option value="core_schemas">Schema</option>
          <option value="core_fields">Field</option>
        </b-select>
      </b-field>

      <b-field
        label="Structure:"
        :type="structureType"
        :message="structureFeedback"
      >
        <b-input v-model="form.structure_id" />
      </b-field>

      <b-field
        label="Permission"
        :type="permissionTypeType"
        :message="permissionTypeFeedback"
      >
        <b-select v-model="form.permission_type" expanded>
          <option value="100">View</option>
          <option value="200">Edit</option>
          <option value="300">Delete</option>
        </b-select>
      </b-field>

      <b-field label="Condition Query:">
        <b-input v-model="form.condition_query" type="textarea" />
      </b-field>

      <div class="buttons">
        <button
          class="button is-success"
          :disabled="!formState"
          @click.prevent="submit"
        >
          Save
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'GroupPermissionForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          group_id: this.$route.params.group_id,
          structure_type: '',
          structure_id: '',
          permission_type: 100,
          condition_query: '',
        }
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    structureTypeState() {
      return this.form.structure_type.length > 0
    },
    structureTypeType() {
      if (this.form.structure_type.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    structureTypeFeedback() {
      if (this.form.structure_type.length === 0) {
        return 'Structure Type is required'
      } else {
        return ''
      }
    },
    structureState() {
      return this.form.structure_id.length > 0
    },
    structureType() {
      if (this.form.structure_id.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    structureFeedback() {
      if (this.form.structure_id.length === 0) {
        return 'Structure is required'
      } else {
        return ''
      }
    },
    permissionTypeState() {
      return this.form.permission_type.length > 0
    },
    permissionTypeType() {
      if (this.form.permission_type.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    permissionTypeFeedback() {
      if (this.form.permission_type.length === 0) {
        return 'Permission is required'
      } else {
        return ''
      }
    },
    formState() {
      return (
        this.structureTypeState &&
        this.structureState &&
        this.permissionTypeState
      )
    },
  },
  methods: {
    submit() {
      if (this.formState) {
        this.$emit('formToParent', this.form)
      }
    },
  },
}
</script>

<style></style>
