import axios from 'axios'

export const getCurrencyRates = (currency_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/currencies/${currency_id}/rates`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createCurrencyRate = (currency_id, currencyRate) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/currencies/${currency_id}/rates`,
        currencyRate
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getCurrencyRate = (currency_id, currency_rate_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/currencies/${currency_id}/rates/${currency_rate_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateCurrencyRate = (
  currency_id,
  currency_rate_id,
  currencyRate
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/currencies/${currency_id}/rates/${currency_rate_id}`,
        currencyRate
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteCurrencyRate = (currency_id, currency_rate_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/currencies/${currency_id}/rates/${currency_rate_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
