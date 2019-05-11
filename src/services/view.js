import axios from 'axios'

export const getViews = (schema_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/schemas/${schema_id}/views`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createView = (schema_id, view) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/schemas/${schema_id}/views`, view)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getView = (schema_id, view_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/schemas/${schema_id}/views/${view_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateView = (schema_id, view_id, view) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/views/${view_id}`,
        view
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteView = (schema_id, view_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/views/${view_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
