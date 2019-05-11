import axios from 'axios'

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/users')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/users', user)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/users/${user_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateUser = (user_id, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/users/${user_id}`, user)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/users/${user_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getGroups = (user_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/users/${user_id}/groups`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const addGroup = (user_id, group_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/users/${user_id}/groups/${group_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const removeGroup = (user_id, group_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/users/${user_id}/groups/${group_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getActiveUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/users', {
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
