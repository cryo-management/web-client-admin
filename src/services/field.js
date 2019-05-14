import axios from 'axios'

export const getFields = (schema_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/schemas/${schema_id}/fields`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createField = (schema_id, field) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/schemas/${schema_id}/fields`, field)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getField = (schema_id, field_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/fields/${field_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateField = (schema_id, field_id, field) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/fields/${field_id}`,
        field
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteField = (schema_id, field_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/fields/${field_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getActiveFields = (schema_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/schemas/${schema_id}/fields`, {
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
