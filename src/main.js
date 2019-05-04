import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import './plugins/vee-validate'
import './plugins/vue-i18n'
import './plugins/bulma'
import './plugins/bulma-badge'
import './plugins/vue-multiple-popover'
import './plugins/buefy'
import './plugins/vue-line-clamp'

axios.defaults.baseURL =
  process.env.API_ENDPOINT || 'http://localhost:3333/api/v1'

import router from './router'
import store from './store'
import { initialize } from './helpers/general'

initialize(store, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
