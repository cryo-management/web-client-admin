<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field
        label="Structure Type"
        :type="structureTypeType"
        :message="structureTypeFeedback"
      >
        <b-select v-model="form.structure_type" expanded>
          <option value="schema">Schema</option>
          <option value="field">Field</option>
        </b-select>
      </b-field>

      <b-field v-if="form.structure_type === 'field'" label="Schema:">
        <b-select v-model="schemaID" placeholder="Select a schema" expanded>
          <option v-for="option in schemas" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
        </b-select>
      </b-field>

      <b-field
        label="Structure:"
        :type="structureType"
        :message="structureFeedback"
      >
        <b-select
          v-model="form.structure_id"
          placeholder="Select an structure"
          expanded
        >
          <option
            v-for="option in structures"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </b-select>
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
        <button class="button is-success" @click.prevent="submit">
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
    return {
      schemas: [],
      structures: [],
      schemaID: '',
    }
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
    structureTypeData() {
      return this.form.structure_type
    },
  },
  watch: {
    structureTypeData(val) {
      this.structures = val === 'schema' ? this.schemas : []
      this.schemaID = ''
      this.form.structure_id = ''
    },
    schemaID(val) {
      this.getFields(val)
    },
  },
  created() {
    this.getSchemas()
  },
  methods: {
    submit() {
      this.$emit('formToParent', this.form)
    },
    async getFields(schemaID) {
      try {
        const response = await this.$store.dispatch(
          'field/getActiveFields',
          schemaID
        )
        this.structures = response.data
      } catch (err) {
        console.log(err)
      }
    },
    async getSchemas() {
      try {
        const response = await this.$store.dispatch('schema/getSchemas')
        this.schemas = response.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
