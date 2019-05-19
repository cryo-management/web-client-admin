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
            <div v-popover:popover v-line-clamp:20="1">{{
              props.row.code
            }}</div>
          </b-table-column>

          <b-table-column field="value" label="Value" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.value"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{
              props.row.value
            }}</div>
          </b-table-column>

          <b-table-column field="label" label="Label" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.label"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{
              props.row.label
            }}</div>
          </b-table-column>

          <b-table-column label="Active" sortable centered>
            <b-icon pack="fas" :icon="props.row.active ? 'check' : ''" />
          </b-table-column>

          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
              <router-link
                class="button is-small"
                :to="`/admin/lookups/${lookupID}/options/${props.row.id}`"
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
        :to="`/admin/lookups/${lookupID}/options/create`"
      >
        Create Lookup Option
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{ lookup_id: lookupID, lookup_option_id: lookupOptionID }"
          :method="deleteLookupOption"
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
  name: 'LookupOptionList',
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
      lookupID: this.$route.params.lookup_id,
      lookupOptionID: null,
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
      return this.$store.getters['lookupOption/lookupOptions']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['lookupOption/lookupOptions']
    },
  },
  mounted() {
    this.getLookupOptions(this.lookupID)
  },
  methods: {
    async getLookupOptions(lookupID) {
      try {
        await this.$store.dispatch('lookupOption/getLookupOptions', lookupID)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteLookupOption(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch('lookupOption/deleteLookupOption', payload)
          this.getLookupOptions(this.lookupID)
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(lookupOptionID) {
      this.lookupOptionID = lookupOptionID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
