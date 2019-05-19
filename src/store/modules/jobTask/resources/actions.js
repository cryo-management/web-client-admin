import router from '../../../../router'
import {
  getJobTasks,
  createJobTask,
  getJobTask,
  updateJobTask,
  deleteJobTask,
  getJobTaskInstances,
} from '../../../../services/jobTask'

const inRoot = {
  root: true,
}
// TODO: Retirar do body os campos de relacionamentos que são passados na url
export default {
  getJobTasks({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobTasks(payload)
        commit('setJobTasks', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  createJobTask({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.max_retry_attempts = +payload.max_retry_attempts
        payload.task_sequence = +payload.task_sequence
        payload.exec_timeout = +payload.exec_timeout
        const response = await createJobTask(payload.job_id, payload)
        commit('setJobTask', response.data)
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
  getJobTask({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobTask(payload.job_id, payload.job_task_id)
        commit('setJobTask', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  updateJobTask({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        payload.max_retry_attempts = +payload.max_retry_attempts
        payload.task_sequence = +payload.task_sequence
        payload.exec_timeout = +payload.exec_timeout
        const response = await updateJobTask(
          payload.job_id,
          payload.id,
          payload
        )
        commit('setJobTask', response.data)
        resolve(response)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  deleteJobTask({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await deleteJobTask(
          payload.job_id,
          payload.job_task_id
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
  setJobTaskCreatedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const jobTasks = getters.jobTasks
        const result = [...jobTasks, payload]
        commit('setJobTasks', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobTaskChangedOnList({ commit, getters }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const jobTasks = getters.jobTasks
        const result = jobTasks.map((jobTask) => {
          return jobTask.id === payload.id ? payload : jobTask
        })
        commit('setJobTasks', result)
        resolve(result)
      } catch (err) {
        reject(err)
        commit('error', err, inRoot)
      } finally {
        commit('loaded', null, inRoot)
      }
    })
  },
  setJobTaskChangedOnJobTask({ commit }, payload) {
    commit('loading', null, inRoot)
    commit('clearError', null, inRoot)
    commit('setJobTask', payload)
    commit('loaded', null, inRoot)
  },
  getJobTaskInstances({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('loading', null, inRoot)
        commit('clearError', null, inRoot)
        const response = await getJobTaskInstances(payload)
        commit('setJobTasks', response.data)
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
