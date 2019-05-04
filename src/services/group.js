import axios from 'axios'

export const getGroups = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/groups')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createGroup = (group) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/admin/groups', group)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getGroup = (group_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/admin/groups/${group_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateGroup = (group_id, group) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/admin/groups/${group_id}`, group)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteGroup = (group_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/admin/groups/${group_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
