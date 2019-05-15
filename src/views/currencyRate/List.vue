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
          <b-table-column field="id" label="ID" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.id"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{ props.row.id }}</div>
          </b-table-column>

          <b-table-column
            field="from_currency_code"
            label="From Currency"
            sortable
          >
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.from_currency_code"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.from_currency_code }}
            </div>
          </b-table-column>

          <b-table-column field="to_currency_code" label="To Currency" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.to_currency_code"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.to_currency_code }}
            </div>
          </b-table-column>

          <b-table-column field="value" label="Value" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.value.toString()"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.value.toString() }}
            </div>
          </b-table-column>

          <b-table-column field="start_at" label="Start At" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.start_at"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.start_at }}
            </div>
          </b-table-column>

          <b-table-column field="end_at" label="End At" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.end_at"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.end_at }}
            </div>
          </b-table-column>

          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
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
        :to="`/admin/currencies/${currencyID}/rates/create`"
      >
        Create Rate
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{ currency_id: currencyID, currency_rate_id: currencyRateID }"
          :method="deleteCurrencyRate"
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
  name: 'CurrencyRateList',
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
      currencyID: this.$route.params.currency_id,
      currencyRateID: null,
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
      return this.$store.getters['currencyRate/currencyRates']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['currencyRate/currencyRates']
    },
  },
  mounted() {
    this.getCurrencyRates(this.currencyID)
  },
  methods: {
    async getCurrencyRates(currencyID) {
      try {
        await this.$store.dispatch('currencyRate/getCurrencyRates', currencyID)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteCurrencyRate(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch('currencyRate/deleteCurrencyRate', payload)
          this.getCurrencyRates(this.currencyID)
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(currencyRateID) {
      this.currencyRateID = currencyRateID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
