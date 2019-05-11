import state from './resources/state'
import getters from './resources/getters'
import mutations from './resources/mutations'
import actions from './resources/actions'

const namespaced = true

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
}
