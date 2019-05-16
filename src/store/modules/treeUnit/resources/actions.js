import router from '../../../../router'
import {
  getTreeUnits,
  createTreeUnit,
  getTreeUnit,
  updateTreeUnit,
  deleteTreeUnit,
} from '../../../../services/treeUnit'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getTreeUnits({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getTreeUnits(payload)
        commit('setTreeUnits', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createTreeUnit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createTreeUnit(payload.tree_id, payload)
        commit('setTreeUnit', response.data)
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
  getTreeUnit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getTreeUnit(
          payload.tree_id,
          payload.tree_unit_id
        )
        commit('setTreeUnit', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateTreeUnit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateTreeUnit(
          payload.tree_id,
          payload.id,
          payload
        )
        commit('setTreeUnit', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteTreeUnit({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteTreeUnit(
          payload.tree_id,
          payload.tree_unit_id
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
  setTreeUnitCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const treeUnits = getters.treeUnits
        const result = [...treeUnits, payload]
        commit('setTreeUnits', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setTreeUnitChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const treeUnits = getters.treeUnits
        const result = treeUnits.map((treeUnit) => {
          return treeUnit.id === payload.id ? payload : treeUnit
        })
        commit('setTreeUnits', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setTreeUnitChangedOnTreeUnit({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setTreeUnit', payload)
    commit('loaded', null, inRoot)
  },
}
