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

          <b-table-column field="code" label="Code" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.code"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.code }}
            </div>
          </b-table-column>

          <b-table-column field="name" label="Name" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.name"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.name }}
            </div>
          </b-table-column>

          <b-table-column field="description" label="Description" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.description"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.description }}
            </div>
          </b-table-column>

          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
              <router-link
                class="button is-small"
                :to="
                  `/admin/schemas/${schemaID}/pages/${pageID}/sections/${
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
        :to="`/admin/schemas/${schemaID}/pages/${pageID}/sections/create`"
      >
        Create Section
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{
            schema_id: schemaID,
            page_id: pageID,
            section_id: sectionID,
          }"
          :method="deleteSection"
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
  name: 'SectionList',
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
      sectionID: null,
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
      return this.$store.getters['section/sections']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['section/sections']
    },
  },
  mounted() {
    this.getSections({
      schema_id: this.schemaID,
      page_id: this.pageID,
    })
  },
  methods: {
    async getSections(payload) {
      try {
        await this.$store.dispatch('section/getSections', payload)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteSection(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch('section/deleteSection', payload)
          this.getSections({
            schema_id: this.schemaID,
            page_id: this.pageID,
          })
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(sectionID) {
      this.sectionID = sectionID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
