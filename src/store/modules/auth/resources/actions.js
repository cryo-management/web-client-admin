import router from '../../../../router'
import { login } from '../../../../services/auth'

const inRoot = {
  root: true,
}

export default {
  login({ commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await login(payload)
        dispatch('authSuccess', response)
        router.push({
          path: '/',
        })
        resolve(response)
      } catch (err) {
        dispatch('authFailure', err)
        reject(err)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  authSuccess({ commit }, payload) {
    commit('clearError', null, inRoot)
    commit('isLoggedIn', true)
    commit('currentUser', {
      ...payload.data.user,
      token: payload.data.token,
    })
  },
  authFailure({ commit }, payload) {
    commit('currentUser', null)
    commit('isLoggedIn', false)
    commit('error', payload, inRoot)
  },
  logout({ commit }) {
    commit('isLoggedIn', false)
    commit('currentUser', null)
    commit('loaded', null, inRoot)
    router.push({
      path: '/auth/login',
    })
  },
}
