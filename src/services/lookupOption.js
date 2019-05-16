import axios from 'axios'

export const getLookupOptions = (lookup_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/lookups/${lookup_id}/options`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createLookupOption = (lookup_id, lookupOption) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/lookups/${lookup_id}/options`,
        lookupOption
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getLookupOption = (lookup_id, lookup_option_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/lookups/${lookup_id}/options/${lookup_option_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateLookupOption = (
  lookup_id,
  lookup_option_id,
  lookupOption
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/lookups/${lookup_id}/options/${lookup_option_id}`,
        lookupOption
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteLookupOption = (lookup_id, lookup_option_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/lookups/${lookup_id}/options/${lookup_option_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
