import axios from 'axios'

export const getTrees = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/trees')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createTree = (tree) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/trees', tree)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getTree = (tree_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/trees/${tree_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateTree = (tree_id, tree) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/trees/${tree_id}`, tree)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteTree = (tree_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/trees/${tree_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
