import axios from 'axios'

export const getSchemas = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/schemas')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createSchema = (schema) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/admin/schemas', schema)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getSchema = (schema_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/admin/schemas/${schema_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateSchema = (schema_id, schema) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/admin/schemas/${schema_id}`, schema)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteSchema = (schema_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/admin/schemas/${schema_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
