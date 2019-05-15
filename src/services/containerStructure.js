import axios from 'axios'

export const getContainerStructures = (
  schema_id,
  page_id,
  container_id,
  container_type
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/pages/${page_id}/containers/${container_id}/${container_type}/structures`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createContainerStructure = (
  schema_id,
  page_id,
  container_id,
  container_type,
  section
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/schemas/${schema_id}/pages/${page_id}/containers/${container_id}/${container_type}/structures`,
        section
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getContainerStructure = (
  schema_id,
  page_id,
  container_id,
  container_type,
  container_structure_id
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/pages/${page_id}/containers/${container_id}/${container_type}/structures/${container_structure_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateContainerStructure = (
  schema_id,
  page_id,
  container_id,
  container_type,
  container_structure_id,
  section
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/pages/${page_id}/containers/${container_id}/${container_type}/structures/${container_structure_id}`,
        section
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteContainerStructure = (
  schema_id,
  page_id,
  container_id,
  container_type,
  container_structure_id
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/pages/${page_id}/containers/${container_id}/${container_type}/structures/${container_structure_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
