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
            <router-link to="/admin/jobs">
              Job List
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/jobs/${currencyID}`">
              Edit Job
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Job Task</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <CurrencyRateForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import CurrencyRateForm from '@/components/currencyRate/Form.vue'

export default {
  name: 'CurrencyRateEdit',
  components: {
    CurrencyRateForm,
  },
  data() {
    return {
      currencyID: this.$route.params.currency_id,
      currencyRateID: this.$route.params.currency_rate_id,
      form: {
        from_currency_id: '',
        to_currency_id: '',
        from_currency_code: '',
        to_currency_code: '',
        value: '',
        start_at: '',
      },
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
      return this.$store.getters['currencyRate/currencyRate']
    },
  },
  watch: {
    formStore() {
      const currencyRate = this.$store.getters['currencyRate/currencyRate']
      if (currencyRate) {
        this.form.id = currencyRate.id
        this.form.name = currencyRate.name
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('currencyRate/getCurrencyRate', {
        currency_id: this.currencyID,
        currency_rate_id: this.currencyRateID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('currencyRate/updateCurrencyRate', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
