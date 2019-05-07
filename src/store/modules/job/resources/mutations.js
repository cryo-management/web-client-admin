export default {
  setJobs(state, payload) {
    state.jobs = payload
  },
  setJob(state, payload) {
    state.job = payload
  },
  setJobUpdated(state, payload) {
    state.jobUpdated = payload
  },
}
