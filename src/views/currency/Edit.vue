<template>
  <section>
    <div class="column">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/admin/currencies">
              Currency List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Currency</a>
          </li>
        </ul>
      </nav>
    </div>
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Currency">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <CurrencyForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Rates">
        <CurrencyRateList></CurrencyRateList>
      </b-tab-item>
    </b-tabs>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import CurrencyForm from '@/components/currency/Form.vue'
import CurrencyRateList from '@/views/currencyRate/List.vue'

export default {
  name: 'CurrencyEdit',
  components: {
    CurrencyForm,
    CurrencyRateList,
  },
  data() {
    return {
      id: this.$route.params.currency_id,
      form: {
        name: '',
        code: '',
        active: false,
      },
      activeTab: 0,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
    },
    formStore() {
      return this.$store.getters['currency/currency']
    },
  },
  watch: {
    formStore() {
      const currency = this.$store.getters['currency/currency']
      if (currency) {
        this.form.id = currency.id
        this.form.name = currency.name
        this.form.code = currency.code
        this.form.active = currency.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('currency/getCurrency', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('currency/updateCurrency', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
