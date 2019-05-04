import axios from 'axios'

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/users')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/admin/users', user)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/admin/users/${user_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateUser = (user_id, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/admin/users/${user_id}`, user)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/admin/users/${user_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
