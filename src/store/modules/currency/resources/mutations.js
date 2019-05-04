export default {
  setCurrencies(state, payload) {
    state.currencies = payload
  },
  setCurrency(state, payload) {
    state.currency = payload
  },
  setCurrencyUpdated(state, payload) {
    state.currencyUpdated = payload
  },
}
