import axios from 'axios'

export const getWidgets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/widgets')
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const createWidget = (widget) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('/widgets', widget)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getWidget = (widget_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`/widgets/${widget_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const updateWidget = (widget_id, widget) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.patch(`/widgets/${widget_id}`, widget)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const deleteWidget = (widget_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(`/widgets/${widget_id}`)
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

export const getActiveWidgets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('/widgets', {
        params: {
          filter: { active: true },
        },
      })
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
