export default {
  setWidgets(state, payload) {
    state.widgets = payload
  },
  setWidget(state, payload) {
    state.widget = payload
  },
  setWidgetUpdated(state, payload) {
    state.widgetUpdated = payload
  },
}
