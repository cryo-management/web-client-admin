import router from '../../../../router'
import {
  getJobFollowers,
  createJobFollower,
  deleteJobFollower,
  getJobFollowersAvaible,
} from '../../../../services/jobFollower'

const inRoot = {
  root: true,
}

export default {
  getJobFollowers({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobFollowers(payload)
        commit('setJobFollowers', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createJobFollower({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await createJobFollower(
          payload.job_id,
          payload.follower_id,
          payload.type
        )
        commit('setJobFollower', response.data)
        router.push({
          path: `/admin/jobs/${payload.job_id}`,
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
  deleteJobFollower({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteJobFollower(
          payload.job_id,
          payload.follower_id
        )
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobFollowerCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const jobTasks = getters.jobTasks
        const result = [...jobTasks, payload]
        commit('setJobFollowers', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobFollowerChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const jobTasks = getters.jobTasks
        const result = jobTasks.map((jobTask) => {
          return jobTask.id === payload.id ? payload : jobTask
        })
        commit('setJobFollowers', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobFollowerChangedOnJobFollower({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setJobFollower', payload)
    commit('loaded', null, inRoot)
  },
  getJobFollowersAvaible({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobFollowersAvaible()
        commit('setJobFollowersAvaible', response.data)
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
