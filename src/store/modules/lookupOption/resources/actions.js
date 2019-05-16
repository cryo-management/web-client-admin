import router from '../../../../router'
import {
  getLookupOptions,
  createLookupOption,
  getLookupOption,
  updateLookupOption,
  deleteLookupOption,
} from '../../../../services/lookupOption'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getLookupOptions({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getLookupOptions(payload)
        commit('setLookupOptions', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createLookupOption({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createLookupOption(payload.lookup_id, payload)
        commit('setLookupOption', response.data)
        router.push({
          path: `/admin/lookups/${payload.lookup_id}`,
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
  getLookupOption({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getLookupOption(
          payload.lookup_id,
          payload.lookup_option_id
        )
        commit('setLookupOption', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateLookupOption({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateLookupOption(
          payload.lookup_id,
          payload.id,
          payload
        )
        commit('setLookupOption', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteLookupOption({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteLookupOption(
          payload.lookup_id,
          payload.lookup_option_id
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
  setLookupOptionCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const lookupOptions = getters.lookupOptions
        const result = [...lookupOptions, payload]
        commit('setLookupOptions', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setLookupOptionChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const lookupOptions = getters.lookupOptions
        const result = lookupOptions.map((lookupOption) => {
          return lookupOption.id === payload.id ? payload : lookupOption
        })
        commit('setLookupOptions', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setLookupOptionChangedOnLookupOption({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setLookupOption', payload)
    commit('loaded', null, inRoot)
  },
}
