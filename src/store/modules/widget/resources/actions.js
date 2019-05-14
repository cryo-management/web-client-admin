import router from '../../../../router'
import {
  getWidgets,
  createWidget,
  getWidget,
  updateWidget,
  deleteWidget,
  getActiveWidgets,
} from '../../../../services/widget'

const inRoot = {
  root: true,
}

export default {
  getWidgets({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getWidgets()
        commit('setWidgets', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createWidget({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createWidget(payload)
        commit('setWidget', response.data)
        router.push({
          path: '/admin/widgets',
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
  getWidget({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getWidget(payload)
        commit('setWidget', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateWidget({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateWidget(payload.id, payload)
        commit('setWidget', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteWidget({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteWidget(payload)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setWidgetCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const widgets = getters.widgets
        const result = [...widgets, payload]
        commit('setWidgets', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setWidgetChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const widgets = getters.widgets
        const result = widgets.map((widget) => {
          return widget.id === payload.id ? payload : widget
        })
        commit('setWidgets', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setWidgetChangedOnWidget({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setWidget', payload)
    commit('loaded', null, inRoot)
  },
  getActiveWidgets({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getActiveWidgets()
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
}
