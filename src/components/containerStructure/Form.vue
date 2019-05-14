<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field
        label="Type:"
        :type="structureTypeType"
        :message="structureTypeFeedback"
      >
        <b-select v-model="form.structure_type" expanded>
          <option value="field">Field</option>
          <option value="widget">Widget</option>
        </b-select>
      </b-field>

      <b-field
        label="Structure ID:"
        :type="structureIdType"
        :message="structureIdFeedback"
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
        label="Position Row:"
        :type="positionRowType"
        :message="positionRowFeedback"
      >
        <b-input v-model="form.position_row" />
      </b-field>

      <b-field
        label="Position Column:"
        :type="positionColumnType"
        :message="positionColumnFeedback"
      >
        <b-input v-model="form.position_column" />
      </b-field>

      <b-field label="Width:" :type="widthType" :message="widthFeedback">
        <b-input v-model="form.width" />
      </b-field>

      <b-field label="Height:" :type="heightType" :message="heightFeedback">
        <b-input v-model="form.height" />
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
  name: 'ContainerStructureForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          schema_id: this.$route.params.schema_id,
          page_id: this.$route.params.page_id,
          container_id: this.$route.params.container_id,
          container_type: this.$route.params.container_type,
          structure_type: '',
          structure_id: '',
          position_row: 0,
          position_column: 0,
          width: 0,
          height: 0,
        }
      },
    },
  },
  data() {
    return {
      structures: [],
    }
  },
  computed: {
    structureIdState() {
      return this.form.structure_id.length > 0
    },
    structureIdType() {
      if (this.form.structure_id.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    structureIdFeedback() {
      if (this.form.structure_id.length === 0) {
        return 'Structure ID is required'
      } else {
        return ''
      }
    },
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
        return 'Type is required'
      } else {
        return ''
      }
    },
    positionRowState() {
      return this.form.position_row.length > 0
    },
    positionRowType() {
      if (this.form.position_row.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    positionRowFeedback() {
      if (this.form.position_row.length === 0) {
        return 'Position Row is required'
      } else {
        return ''
      }
    },
    positionColumnState() {
      return this.form.position_column.length > 0
    },
    positionColumnType() {
      if (this.form.position_column.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    positionColumnFeedback() {
      if (this.form.position_column.length === 0) {
        return 'Position Column is required'
      } else {
        return ''
      }
    },
    widthState() {
      return this.form.width.length > 0
    },
    widthType() {
      if (this.form.width.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    widthFeedback() {
      if (this.form.width.length === 0) {
        return 'Width is required'
      } else {
        return ''
      }
    },
    heightState() {
      return this.form.height.length > 0
    },
    heightType() {
      if (this.form.height.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    heightFeedback() {
      if (this.form.height.length === 0) {
        return 'Height is required'
      } else {
        return ''
      }
    },
    formState() {
      return (
        this.structureIdState &&
        this.structureTypeState &&
        this.positionRowState &&
        this.positionColumnState &&
        this.widthState &&
        this.heightState
      )
    },
    structureType() {
      return this.form.structure_type
    },
  },
  watch: {
    structureType(val) {
      val === 'field' ? this.getFields(this.form.schema_id) : this.getWidgets()
    },
  },
  methods: {
    submit() {
      // if (this.formState) {
      this.$emit('formToParent', this.form)
      // }
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
    async getWidgets() {
      try {
        const response = await this.$store.dispatch('widget/getActiveWidgets')
        this.structures = response.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
