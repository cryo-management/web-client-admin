import router from '../../../../router'
import {
  getLanguages,
  createLanguage,
  getLanguage,
  updateLanguage,
  deleteLanguage,
  getActiveLanguages,
} from '../../../../services/language'

const inRoot = {
  root: true,
}

export default {
  getLanguages({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getLanguages()
        commit('setLanguages', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createLanguage({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createLanguage(payload)
        commit('setLanguage', response.data)
        router.push({
          path: '/admin/languages',
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
  getLanguage({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getLanguage(payload)
        commit('setLanguage', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateLanguage({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateLanguage(payload.id, payload)
        commit('setLanguage', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteLanguage({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteLanguage(payload)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setLanguageCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const languages = getters.languages
        const result = [...languages, payload]
        commit('setLanguages', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setLanguageChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const languages = getters.languages
        const result = languages.map((language) => {
          return language.id === payload.id ? payload : language
        })
        commit('setLanguages', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setLanguageChangedOnLanguage({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setLanguage', payload)
    commit('loaded', null, inRoot)
  },
  getActiveLanguages({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        // commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getActiveLanguages()
        commit('setLanguages', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        // commit('loaded', null, inRoot)
      }
    })
  },
}
