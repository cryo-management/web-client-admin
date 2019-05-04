export default {
  isLoggedIn(state, payload) {
    state.isLoggedIn = payload
  },
  currentUser(state, payload) {
    state.currentUser = payload
  },
}
