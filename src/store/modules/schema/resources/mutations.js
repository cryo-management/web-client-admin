export default {
  setSchemas(state, payload) {
    state.schemas = payload
  },
  setSchema(state, payload) {
    state.schema = payload
  },
  setSchemaUpdated(state, payload) {
    state.schemaUpdated = payload
  },
}
