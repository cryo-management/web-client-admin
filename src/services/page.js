import axios from 'axios'

export const getPages = (schema_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/schemas/${schema_id}/pages`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createPage = (schema_id, page) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/schemas/${schema_id}/pages`, page)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getPage = (schema_id, page_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/schemas/${schema_id}/pages/${page_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updatePage = (schema_id, page_id, page) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/pages/${page_id}`,
        page
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deletePage = (schema_id, page_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/pages/${page_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
