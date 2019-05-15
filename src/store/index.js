import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './modules/auth/store'
import language from './modules/language/store'
import user from './modules/user/store'
import group from './modules/group/store'
import tree from './modules/tree/store'
import treeUnit from './modules/treeUnit/store'
import treeLevel from './modules/treeLevel/store'
import schema from './modules/schema/store'
import field from './modules/field/store'
import fieldValidation from './modules/fieldValidation/store'
import page from './modules/page/store'
import section from './modules/section/store'
import tab from './modules/tab/store'
import containerStructure from './modules/containerStructure/store'
import view from './modules/view/store'
import lookup from './modules/lookup/store'
import lookupOption from './modules/lookupOption/store'
import widget from './modules/widget/store'
import currency from './modules/currency/store'
import currencyRate from './modules/currencyRate/store'
import job from './modules/job/store'
import jobTask from './modules/jobTask/store'
import jobFollower from './modules/jobFollower/store'
import groupPermission from './modules/groupPermission/store'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  plugins: [createPersistedState()],
  modules: {
    auth,
    language,
    user,
    group,
    tree,
    treeUnit,
    treeLevel,
    schema,
    field,
    fieldValidation,
    page,
    section,
    tab,
    containerStructure,
    view,
    lookup,
    lookupOption,
    widget,
    currency,
    currencyRate,
    job,
    jobTask,
    jobFollower,
    groupPermission,
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
      state.loading += 1
    },
    loaded(state) {
      state.loading -= 1
    },
  },
  actions: {},
})
