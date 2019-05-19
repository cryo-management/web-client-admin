import router from '../../../../router'
import {
  getJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
  getJobInstances,
} from '../../../../services/job'

const inRoot = {
  root: true,
}

export default {
  getJobs({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobs()
        commit('setJobs', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createJob({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.exec_timeout = +payload.exec_timeout
        const response = await createJob(payload)
        commit('setJob', response.data)
        router.push({
          path: '/admin/jobs',
        })
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  getJob({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJob(payload)
        commit('setJob', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateJob({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.exec_timeout = +payload.exec_timeout
        const response = await updateJob(payload.id, payload)
        commit('setJob', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteJob({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteJob(payload)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const jobs = getters.jobs
        const result = [...jobs, payload]
        commit('setJobs', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const jobs = getters.jobs
        const result = jobs.map((job) => {
          return job.id === payload.id ? payload : job
        })
        commit('setJobs', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobChangedOnJob({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setJob', payload)
    commit('loaded', null, inRoot)
  },
  getJobInstances({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobInstances()
        commit('setJobs', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
}
