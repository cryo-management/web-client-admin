import axios from 'axios'

export const getSections = (schema_id, page_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/pages/${page_id}/sections`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createSection = (schema_id, page_id, section) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/schemas/${schema_id}/pages/${page_id}/sections`,
        section
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getSection = (schema_id, page_id, section_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateSection = (schema_id, page_id, section_id, section) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}`,
        section
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteSection = (schema_id, page_id, section_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
