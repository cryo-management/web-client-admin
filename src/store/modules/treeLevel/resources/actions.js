import router from '../../../../router'
import {
  getTreeLevels,
  createTreeLevel,
  getTreeLevel,
  updateTreeLevel,
  deleteTreeLevel,
} from '../../../../services/treeLevel'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getTreeLevels({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getTreeLevels(payload)
        commit('setTreeLevels', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createTreeLevel({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createTreeLevel(payload.tree_id, payload)
        commit('setTreeLevel', response.data)
        router.push({
          path: `/admin/trees/${payload.tree_id}`,
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
  getTreeLevel({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getTreeLevel(
          payload.tree_id,
          payload.tree_level_id
        )
        commit('setTreeLevel', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateTreeLevel({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateTreeLevel(
          payload.tree_id,
          payload.id,
          payload
        )
        commit('setTreeLevel', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteTreeLevel({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteTreeLevel(
          payload.tree_id,
          payload.tree_level_id
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
  setTreeLevelCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const treeLevels = getters.treeLevels
        const result = [...treeLevels, payload]
        commit('setTreeLevels', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setTreeLevelChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const treeLevels = getters.treeLevels
        const result = treeLevels.map((treeLevel) => {
          return treeLevel.id === payload.id ? payload : treeLevel
        })
        commit('setTreeLevels', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setTreeLevelChangedOnTreeLevel({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setTreeLevel', payload)
    commit('loaded', null, inRoot)
  },
}
