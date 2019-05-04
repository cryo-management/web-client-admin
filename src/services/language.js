import axios from 'axios'

export const getLanguages = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/configs/languages')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createLanguage = (language) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/admin/configs/languages', language)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getLanguage = (language_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/admin/configs/languages/${language_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateLanguage = (language_id, language) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/admin/configs/languages/${language_id}`,
        language
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteLanguage = (language_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/admin/configs/languages/${language_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getActiveLanguages = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/configs/languages', {
        params: {
          filter: { active: true },
        },
      })
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
