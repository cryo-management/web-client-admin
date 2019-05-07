import router from '../../../../router'
import {
  getGroupPermissions,
  createGroupPermission,
  getGroupPermission,
  updateGroupPermission,
  deleteGroupPermission,
} from '../../../../services/groupPermission'

const inRoot = {
  root: true,
}

export default {
  getGroupPermissions({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getGroupPermissions(payload)
        commit('setGroupPermissions', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createGroupPermission({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.permission_type = +payload.permission_type
        const response = await createGroupPermission(payload.group_id, payload)
        commit('setGroupPermission', response.data)
        router.push({
          path: `/admin/groups/${payload.group_id}`,
        })
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  getGroupPermission({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getGroupPermission(
          payload.group_id,
          payload.permission_id
        )
        commit('setGroupPermission', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateGroupPermission({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.permission_type = +payload.permission_type
        const response = await updateGroupPermission(
          payload.group_id,
          payload.id,
          payload
        )
        commit('setGroupPermission', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteGroupPermission({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteGroupPermission(
          payload.group_id,
          payload.permission_id
        )
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setGroupPermissionCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const groupPermissions = getters.groupPermissions
        const result = [...groupPermissions, payload]
        commit('setGroupPermissions', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setGroupPermissionChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const groupPermissions = getters.groupPermissions
        const result = groupPermissions.map((groupPermission) => {
          return groupPermission.id === payload.id ? payload : groupPermission
        })
        commit('setGroupPermissions', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setGroupPermissionChangedOnGroupPermission({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setGroupPermission', payload)
    commit('loaded', null, inRoot)
  },
}
