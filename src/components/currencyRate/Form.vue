<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field label="From Currency:">
        <b-select
          v-model="form.from_currency_id"
          placeholder="Select a currency"
          expanded
          disabled
        >
          <option
            v-for="option in currencies"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </b-select>
      </b-field>

      <b-field
        label="To Currency:"
        :type="toCurrencyType"
        :message="toCurrencyFeedback"
      >
        <b-select
          v-model="form.to_currency_id"
          placeholder="Select a currency"
          expanded
        >
          <option
            v-for="option in currencies"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }}
          </option>
        </b-select>
      </b-field>

      <b-field label="Value:" :type="valueType" :message="valueFeedback">
        <b-input v-model="form.value" />
      </b-field>

      <b-field label="Date:" :type="startAtType" :message="startAtFeedback">
        <b-input v-model="form.start_at" />
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
  name: 'CurrencyRateForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          from_currency_id: this.$route.params.currency_id,
          to_currency_id: '',
          from_currency_code: '',
          to_currency_code: '',
          value: '',
          start_at: '',
        }
      },
    },
  },
  data() {
    return {
      currencies: [],
    }
  },
  computed: {
    toCurrencyState() {
      return this.form.to_currency_id.length > 0
    },
    toCurrencyType() {
      if (this.form.to_currency_id.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    toCurrencyFeedback() {
      if (this.form.to_currency_id.length === 0) {
        return 'To Currency is required'
      } else {
        return ''
      }
    },
    valueState() {
      return this.form.value.length > 0
    },
    valueType() {
      if (this.form.value.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    valueFeedback() {
      if (this.form.value.length === 0) {
        return 'Value is required'
      } else {
        return ''
      }
    },
    startAtState() {
      return this.form.start_at.length > 0
    },
    startAtType() {
      if (this.form.start_at.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    startAtFeedback() {
      if (this.form.start_at.length === 0) {
        return 'Date is required'
      } else {
        return ''
      }
    },
    formState() {
      return this.toCurrencyState && this.valueState && this.startAtState
    },
  },
  mounted() {
    this.getActiveCurrencies()
  },
  methods: {
    submit() {
      if (this.formState) {
        let data = this.currencies.filter((currency) => {
          return currency.id === this.form.from_currency_id
        }, this)
        this.form.from_currency_code = data[0].code
        data = this.currencies.filter((currency) => {
          return currency.id === this.form.to_currency_id
        }, this)
        this.form.to_currency_code = data[0].code
        this.$emit('formToParent', this.form)
      }
    },
    async getActiveCurrencies() {
      try {
        const activeCurrencies = await this.$store.dispatch(
          'currency/getActiveCurrencies'
        )
        this.currencies = activeCurrencies.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
