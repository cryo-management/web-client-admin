import axios from 'axios'

export const getTreeLevels = (tree_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/trees/${tree_id}/levels`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createTreeLevel = (tree_id, treeLevel) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/trees/${tree_id}/levels`, treeLevel)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getTreeLevel = (tree_id, tree_level_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/trees/${tree_id}/levels/${tree_level_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateTreeLevel = (tree_id, tree_level_id, treeLevel) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/trees/${tree_id}/levels/${tree_level_id}`,
        treeLevel
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteTreeLevel = (tree_id, tree_level_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/trees/${tree_id}/levels/${tree_level_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
