import axios from 'axios'

export const getCurrencies = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/currencies')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createCurrency = (currency) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/currencies', currency)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getCurrency = (currency_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/currencies/${currency_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateCurrency = (currency_id, currency) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/currencies/${currency_id}`, currency)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteCurrency = (currency_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/currencies/${currency_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getActiveCurrencies = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/currencies', {
        params: {
          filter: { active: true },
        },
      })
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
