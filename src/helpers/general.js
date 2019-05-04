import axios from 'axios'

export const initialize = (store, router) => {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const currentUser = store.getters['auth/currentUser']

    if (requiresAuth && !currentUser) {
      next('/auth/login')
    } else if (to.path === '/auth/login' && currentUser) {
      next('/')
    } else {
      next()
    }
  })

  axios.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
      store.dispatch('auth/logout')
    }

    return Promise.reject(error.response.data)
  })

  const currentUser = store.getters['auth/currentUser']

  if (currentUser) {
    setAuthorization(currentUser.token)
    setLanguage(currentUser.language_code)
  }

  // axios.interceptors.response.use(
  //   function(response) {
  //     return response
  //   },
  //   function(error) {
  //     // handle error
  //     if (error) {
  //       alert(error)
  //     }
  //   }
  // )
}

export const setAuthorization = (token) => {
  axios.defaults.headers.common['Authorization'] = token
}

export const setLanguage = (languageCode) => {
  axios.defaults.headers.common['Content-Language'] = languageCode
}
