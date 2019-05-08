export default {
  setCurrencyRates(state, payload) {
    state.currencyRates = payload
  },
  setCurrencyRate(state, payload) {
    state.currencyRate = payload
  },
  setCurrencyRateUpdated(state, payload) {
    state.currencyRateUpdated = payload
  },
}
