import axios from 'axios'

export const getLookups = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/lookups')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createLookup = (lookup) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/admin/lookups', lookup)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getLookup = (lookup_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/admin/lookups/${lookup_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateLookup = (lookup_id, lookup) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/admin/lookups/${lookup_id}`, lookup)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteLookup = (lookup_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/admin/lookups/${lookup_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
