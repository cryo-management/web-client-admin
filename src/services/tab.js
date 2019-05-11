import axios from 'axios'

export const getTabs = (schema_id, page_id, section_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}/tabs`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createTab = (schema_id, page_id, section_id, section) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}/tabs`,
        section
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getTab = (schema_id, page_id, section_id, tab_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}/tabs/${tab_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateTab = (schema_id, page_id, section_id, tab_id, section) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}/tabs/${tab_id}`,
        section
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteTab = (schema_id, page_id, section_id, tab_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/pages/${page_id}/sections/${section_id}/tabs/${tab_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
