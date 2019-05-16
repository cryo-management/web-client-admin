import router from '../../../../router'
import {
  getContainerStructures,
  createContainerStructure,
  getContainerStructure,
  updateContainerStructure,
  deleteContainerStructure,
} from '../../../../services/containerStructure'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getContainerStructures({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getContainerStructures(
          payload.schema_id,
          payload.page_id,
          payload.container_id,
          payload.container_type
        )
        commit('setContainerStructures', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createContainerStructure({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.position_row = +payload.position_row
        payload.position_column = +payload.position_column
        payload.width = +payload.width
        payload.height = +payload.height
        const response = await createContainerStructure(
          payload.schema_id,
          payload.page_id,
          payload.container_id,
          payload.container_type,
          payload
        )
        commit('setContainerStructure', response.data)
        // router.push({
        //   path: `/admin/schemas/${payload.schema_id}/pages/${
        //     payload.page_id
        //   }/containers/${payload.container_id}/types/${payload.container_type}`,
        // })
        router.go(-1)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  getContainerStructure({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getContainerStructure(
          payload.schema_id,
          payload.page_id,
          payload.container_id,
          payload.container_type,
          payload.container_structure_id
        )
        commit('setContainerStructure', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateContainerStructure({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.position_row = +payload.position_row
        payload.position_column = +payload.position_column
        payload.width = +payload.width
        payload.height = +payload.height
        const response = await updateContainerStructure(
          payload.schema_id,
          payload.page_id,
          payload.container_id,
          payload.container_type,
          payload.id,
          payload
        )
        commit('setContainerStructure', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteContainerStructure({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteContainerStructure(
          payload.schema_id,
          payload.page_id,
          payload.container_id,
          payload.container_type,
          payload.container_structure_id
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
  setContainerStructureCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const containerStructures = getters.containerStructures
        const result = [...containerStructures, payload]
        commit('setContainerStructures', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setContainerStructureChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const containerStructures = getters.containerStructures
        const result = containerStructures.map((containerStructure) => {
          return containerStructure.id === payload.id
            ? payload
            : containerStructure
        })
        commit('setContainerStructures', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setContainerStructureChangedOnPage({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setContainerStructure', payload)
    commit('loaded', null, inRoot)
  },
}
