export default {
  setLookups(state, payload) {
    state.lookups = payload
  },
  setLookup(state, payload) {
    state.lookup = payload
  },
  setLookupUpdated(state, payload) {
    state.lookupUpdated = payload
  },
}
