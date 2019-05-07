import axios from 'axios'

export const getJobTasks = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/admin/jobs/${job_id}/tasks`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createJobTask = (job_id, jobTask) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/admin/jobs/${job_id}/tasks`, jobTask)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJobTask = (job_id, job_task_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/admin/jobs/${job_id}/tasks/${job_task_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateJobTask = (job_id, job_task_id, jobTask) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(
        `/admin/jobs/${job_id}/tasks/${job_task_id}`,
        jobTask
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteJobTask = (job_id, job_task_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/admin/jobs/${job_id}/tasks/${job_task_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
