import router from '../../../../router'
import {
  getCurrencyRates,
  createCurrencyRate,
  getCurrencyRate,
  updateCurrencyRate,
  deleteCurrencyRate,
} from '../../../../services/currencyRate'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getCurrencyRates({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getCurrencyRates(payload)
        commit('setCurrencyRates', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createCurrencyRate({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.value = +payload.value
        const response = await createCurrencyRate(
          payload.from_currency_id,
          payload
        )
        commit('setCurrencyRate', response.data)
        router.push({
          path: `/admin/currencies/${payload.from_currency_id}`,
        })
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  getCurrencyRate({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getCurrencyRate(
          payload.from_currency_id,
          payload.currency_rate_id
        )
        commit('setCurrencyRate', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateCurrencyRate({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.value = +payload.value
        const response = await updateCurrencyRate(
          payload.from_currency_id,
          payload.id,
          payload
        )
        commit('setCurrencyRate', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteCurrencyRate({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteCurrencyRate(
          payload.from_currency_id,
          payload.currency_rate_id
        )
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setCurrencyRateCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const currencyRates = getters.currencyRates
        const result = [...currencyRates, payload]
        commit('setCurrencyRates', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setCurrencyRateChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const currencyRates = getters.currencyRates
        const result = currencyRates.map((currencyRate) => {
          return currencyRate.id === payload.id ? payload : currencyRate
        })
        commit('setCurrencyRates', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setCurrencyRateChangedOnCurrencyRate({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setCurrencyRate', payload)
    commit('loaded', null, inRoot)
  },
}
