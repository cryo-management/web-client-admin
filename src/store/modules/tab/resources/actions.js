import router from '../../../../router'
import {
  getTabs,
  createTab,
  getTab,
  updateTab,
  deleteTab,
} from '../../../../services/tab'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getTabs({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getTabs(
          payload.schema_id,
          payload.page_id,
          payload.section_id
        )
        commit('setTabs', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createTab({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.tab_order = +payload.tab_order
        const response = await createTab(
          payload.schema_id,
          payload.page_id,
          payload.section_id,
          payload
        )
        commit('setTab', response.data)
        router.push({
          path: `/admin/schemas/${payload.schema_id}/pages/${
            payload.page_id
          }/sections/${payload.section_id}`,
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
  getTab({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getTab(
          payload.schema_id,
          payload.page_id,
          payload.section_id,
          payload.tab_id
        )
        commit('setTab', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateTab({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.tab_order = +payload.tab_order
        const response = await updateTab(
          payload.schema_id,
          payload.page_id,
          payload.section_id,
          payload.id,
          payload
        )
        commit('setTab', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteTab({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteTab(
          payload.schema_id,
          payload.page_id,
          payload.section_id,
          payload.tab_id
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
  setTabCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const tabs = getters.tabs
        const result = [...tabs, payload]
        commit('setTabs', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setTabChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const tabs = getters.tabs
        const result = tabs.map((tab) => {
          return tab.id === payload.id ? payload : tab
        })
        commit('setTabs', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setTabChangedOnPage({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setTab', payload)
    commit('loaded', null, inRoot)
  },
}
