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

          <b-table-column field="structure_id" label="Structure" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.structure_id"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{
              props.row.structure_id
            }}</div>
          </b-table-column>

          <b-table-column field="structure_type" label="Type" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.structure_type"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{
              props.row.structure_type
            }}</div>
          </b-table-column>
          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
              <router-link
                class="button is-small"
                :to="
                  `/admin/schemas/${schemaID}/pages/${pageID}/containers/${containerID}/types/${containerType}/structures/${
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
        :to="
          `/admin/schemas/${schemaID}/pages/${pageID}/containers/${containerID}/types/${containerType}/structures/create`
        "
      >
        Add Structure
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{
            schema_id: schemaID,
            page_id: pageID,
            container_id: containerID,
            container_type: containerType,
            container_structure_id: containerStructureID,
          }"
          :method="deleteContainerStructures"
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
  name: 'ContainerStructureList',
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
      pageID: this.$route.params.page_id,
      containerID: this.$route.params.tab_id || this.$route.params.section_id,
      containerType: this.$route.path.includes('/tabs') ? 'tab' : 'section',
      containerStructureID: null,
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
      return this.$store.getters['containerStructure/containerStructures']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['containerStructure/containerStructures']
    },
  },
  mounted() {
    this.getContainerStructures({
      schema_id: this.schemaID,
      page_id: this.pageID,
      container_id: this.containerID,
      container_type: this.containerType,
    })
  },
  methods: {
    async getContainerStructures(payload) {
      try {
        await this.$store.dispatch(
          'containerStructure/getContainerStructures',
          payload
        )
      } catch (err) {
        console.log(err)
      }
    },
    async deleteContainerStructures(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch(
            'containerStructure/deleteContainerStructure',
            payload
          )
          this.getContainerStructures({
            schema_id: this.schemaID,
            page_id: this.pageID,
            container_id: this.containerID,
            container_type: this.containerType,
          })
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(containerStructureID) {
      this.containerStructureID = containerStructureID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
