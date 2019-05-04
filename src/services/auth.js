import axios from 'axios'

import { setAuthorization, setLanguage } from '../helpers/general'

export const login = (credentials) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/auth/login', credentials)
      const result = response.data
      setAuthorization(result.data.token)
      setLanguage(result.data.user.language_code)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

export const getLocalUser = () => {
  const userStr = localStorage.getItem('user')

  if (!userStr) {
    return null
  }

  return JSON.parse(userStr)
}
