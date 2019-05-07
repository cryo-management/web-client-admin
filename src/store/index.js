import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './modules/auth/store'
import language from './modules/language/store'
import user from './modules/user/store'
import group from './modules/group/store'
import schema from './modules/schema/store'
import lookup from './modules/lookup/store'
import currency from './modules/currency/store'
import job from './modules/job/store'
import jobTask from './modules/jobTask/store'
import jobFollower from './modules/jobFollower/store'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  plugins: [createPersistedState()],
  modules: {
    auth,
    language,
    user,
    group,
    schema,
    lookup,
    currency,
    job,
    jobTask,
    jobFollower,
  },
  state: {
    loading: false,
    error: null,
  },
  getters: {
    loading: (state) => {
      return state.loading
    },
    error: (state) => {
      return state.error
    },
  },
  mutations: {
    error(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    loading(state) {
      state.loading = true
    },
    loaded(state) {
      state.loading = false
    },
  },
  actions: {},
})
