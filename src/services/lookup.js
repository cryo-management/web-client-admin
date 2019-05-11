import axios from 'axios'

export const getLookups = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/lookups')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createLookup = (lookup) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/lookups', lookup)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getLookup = (lookup_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/lookups/${lookup_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateLookup = (lookup_id, lookup) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/lookups/${lookup_id}`, lookup)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteLookup = (lookup_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/lookups/${lookup_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
