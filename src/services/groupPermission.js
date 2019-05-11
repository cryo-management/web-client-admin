import axios from 'axios'

export const getGroupPermissions = (group_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/groups/${group_id}/permissions`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createGroupPermission = (group_id, groupPermission) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/groups/${group_id}/permissions`,
        groupPermission
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getGroupPermission = (group_id, permission_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/groups/${group_id}/permissions/${permission_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateGroupPermission = (
  group_id,
  permission_id,
  groupPermission
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/groups/${group_id}/permissions/${permission_id}`,
        groupPermission
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteGroupPermission = (group_id, permission_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/groups/${group_id}/permissions/${permission_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
