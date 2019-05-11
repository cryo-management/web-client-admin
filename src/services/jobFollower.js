import axios from 'axios'

export const getJobFollowers = (job_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/jobs/${job_id}/followers`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createJobFollower = (job_id, job_follower_id, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `/jobs/${job_id}/followers/${job_follower_id}/type/${type}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteJobFollower = (job_id, job_follower_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        `/jobs/${job_id}/followers/${job_follower_id}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getJobFollowersAvaible = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/jobs/followers/avaible`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
