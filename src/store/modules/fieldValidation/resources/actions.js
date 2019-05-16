import router from '../../../../router'
import {
  getFieldValidations,
  createFieldValidation,
  getFieldValidation,
  updateFieldValidation,
  deleteFieldValidation,
} from '../../../../services/fieldValidation'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getFieldValidations({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getFieldValidations(
          payload.schema_id,
          payload.field_id
        )
        commit('setFieldValidations', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createFieldValidation({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createFieldValidation(
          payload.schema_id,
          payload.field_id,
          payload
        )
        commit('setFieldValidation', response.data)
        router.push({
          path: `/admin/schemas/${payload.schema_id}/fields/${
            payload.field_id
          }`,
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
  getFieldValidation({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getFieldValidation(
          payload.schema_id,
          payload.field_id,
          payload.field_validation_id
        )
        commit('setFieldValidation', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateFieldValidation({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await updateFieldValidation(
          payload.schema_id,
          payload.field_id,
          payload.id,
          payload
        )
        commit('setFieldValidation', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteFieldValidation({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteFieldValidation(
          payload.schema_id,
          payload.field_id,
          payload.field_validation_id
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
  setFieldValidationCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const fieldValidations = getters.fieldValidations
        const result = [...fieldValidations, payload]
        commit('setFieldValidations', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setFieldValidationChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const fieldValidations = getters.fieldValidations
        const result = fieldValidations.map((fieldValidation) => {
          return fieldValidation.id === payload.id ? payload : fieldValidation
        })
        commit('setFieldValidations', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setFieldValidationChangedOnFieldValidation({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setFieldValidation', payload)
    commit('loaded', null, inRoot)
  },
}
