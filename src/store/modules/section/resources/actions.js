import router from '../../../../router'
import {
  getSections,
  createSection,
  getSection,
  updateSection,
  deleteSection,
} from '../../../../services/section'

const inRoot = {
  root: true,
}

export default {
  getSections({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getSections(payload.schema_id, payload.page_id)
        commit('setSections', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createSection({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createSection(
          payload.schema_id,
          payload.page_id,
          payload
        )
        commit('setSection', response.data)
        router.push({
          path: `/admin/schemas/${payload.schema_id}/pages/${payload.page_id}`,
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
  getSection({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getSection(
          payload.schema_id,
          payload.page_id,
          payload.section_id
        )
        commit('setSection', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateSection({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateSection(
          payload.schema_id,
          payload.page_id,
          payload.id,
          payload
        )
        commit('setSection', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteSection({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteSection(
          payload.schema_id,
          payload.page_id,
          payload.section_id
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
  setSectionCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const sections = getters.sections
        const result = [...sections, payload]
        commit('setSections', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setSectionChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const sections = getters.sections
        const result = sections.map((section) => {
          return section.id === payload.id ? payload : section
        })
        commit('setSections', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setSectionChangedOnPage({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setSection', payload)
    commit('loaded', null, inRoot)
  },
}
