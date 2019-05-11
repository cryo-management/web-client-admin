import axios from 'axios'

export const getFieldValidations = (schema_id, field_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/fields/${field_id}/validations`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createFieldValidation = (schema_id, field_id, fieldValidation) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/schemas/${schema_id}/fields/${field_id}/validations`,
        fieldValidation
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getFieldValidation = (
  schema_id,
  field_id,
  field_validation_id
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/schemas/${schema_id}/fields/${field_id}/validations/${field_validation_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateFieldValidation = (
  schema_id,
  field_id,
  field_validation_id,
  fieldValidation
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/schemas/${schema_id}/fields/${field_id}/validations/${field_validation_id}`,
        fieldValidation
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteFieldValidation = (
  schema_id,
  field_id,
  field_validation_id
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/schemas/${schema_id}/fields/${field_id}/validations/${field_validation_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
