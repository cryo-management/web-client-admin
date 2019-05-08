export default {
  setFields(state, payload) {
    state.fields = payload
  },
  setField(state, payload) {
    state.field = payload
  },
  setFieldUpdated(state, payload) {
    state.fieldUpdated = payload
  },
}
