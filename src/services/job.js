import axios from 'axios'

export const getJobs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/jobs')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createJob = (job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/jobs', job)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJob = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/jobs/${job_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateJob = (job_id, job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/jobs/${job_id}`, job)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteJob = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/jobs/${job_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJobInstances = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/jobs/instances')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
