import axios from 'axios'

export const getJobTasks = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/jobs/${job_id}/tasks`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createJobTask = (job_id, jobTask) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`/jobs/${job_id}/tasks`, jobTask)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJobTask = (job_id, job_task_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/jobs/${job_id}/tasks/${job_task_id}`)
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
        `/jobs/${job_id}/tasks/${job_task_id}`,
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
        `/jobs/${job_id}/tasks/${job_task_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJobTaskInstances = (job_instance_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `/jobs/${job_instance_id}/instances/tasks/instances`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
