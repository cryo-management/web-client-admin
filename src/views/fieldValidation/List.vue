<template>
  <section>
    <div class="column">
      <b-field grouped group-multiline>
        <b-select v-model="perPage">
          <option value="5">
            5 per page
          </option>
          <option value="10">
            10 per page
          </option>
          <option value="15">
            15 per page
          </option>
          <option value="20">
            20 per page
          </option>
        </b-select>
      </b-field>

      <b-table
        :data="data"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :default-sort-direction="defaultSortDirection"
        default-sort="id"
        :hoverable="true"
        :bordered="true"
      >
        <template slot-scope="props">
          <b-table-column field="id" label="ID" width="90" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.id"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{ props.row.id }}</div>
          </b-table-column>

          <b-table-column field="validation" label="Validation" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.validation"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.validation }}
            </div>
          </b-table-column>

          <b-table-column field="valid_when" label="When" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.valid_when"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.valid_when }}
            </div>
          </b-table-column>

          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
              <router-link
                class="button is-small"
                :to="
                  `/admin/schemas/${schemaID}/fields/${fieldID}/validations/${
                    props.row.id
                  }`
                "
              >
                <b-icon pack="fas" icon="pencil-alt" />
              </router-link>
              <b-button
                type="is-danger"
                size="is-small"
                @click.prevent="openModalDelete(props.row.id)"
              >
                <b-icon pack="fas" icon="trash-alt" />
              </b-button>
            </div>
          </b-table-column>
        </template>
      </b-table>
      <router-link
        class="button is-success"
        :to="`/admin/schemas/${schemaID}/fields/${fieldID}/validations/create`"
      >
        Create Field Validation
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{
            schema_id: schemaID,
            field_id: fieldID,
            field_validation_id: fieldValidationID,
          }"
          :method="deleteFieldValidation"
        ></modal-yes-no>
      </b-modal>
      <b-loading
        :is-full-page="true"
        :active.sync="loading"
        :can-cancel="false"
      />
    </div>
  </section>
</template>

<script>
import ModalYesNo from '@/components/modal/YesNo.vue'

export default {
  name: 'FieldValidationList',
  components: {
    ModalYesNo,
  },
  data() {
    return {
      data: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      isModalDelete: false,
      schemaID: this.$route.params.schema_id,
      fieldID: this.$route.params.field_id,
      fieldValidationID: null,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
    },
    dataStore() {
      return this.$store.getters['fieldValidation/fieldValidations']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['fieldValidation/fieldValidations']
    },
  },
  mounted() {
    this.getFieldValidations({
      schema_id: this.schemaID,
      field_id: this.fieldID,
    })
  },
  methods: {
    async getFieldValidations(payload) {
      try {
        await this.$store.dispatch(
          'fieldValidation/getFieldValidations',
          payload
        )
      } catch (err) {
        console.log(err)
      }
    },
    async deleteFieldValidation(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch(
            'fieldValidation/deleteFieldValidation',
            payload
          )
          this.getFieldValidations({
            schema_id: this.schemaID,
            field_id: this.fieldID,
          })
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(fieldValidationID) {
      this.fieldValidationID = fieldValidationID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
