import axios from 'axios'

export const getTreeUnits = (tree_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/trees/${tree_id}/units`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createTreeUnit = (tree_id, treeUnit) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/trees/${tree_id}/units`, treeUnit)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getTreeUnit = (tree_id, tree_unit_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/trees/${tree_id}/units/${tree_unit_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateTreeUnit = (tree_id, tree_unit_id, treeUnit) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/trees/${tree_id}/units/${tree_unit_id}`,
        treeUnit
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteTreeUnit = (tree_id, tree_unit_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/trees/${tree_id}/units/${tree_unit_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
