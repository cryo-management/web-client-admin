import axios from 'axios'

export const getJobs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/admin/jobs')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createJob = (job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/admin/jobs', job)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJob = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/admin/jobs/${job_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateJob = (job_id, job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/admin/jobs/${job_id}`, job)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteJob = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/admin/jobs/${job_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
