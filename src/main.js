import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from 'axios'

//引入vant-ui
import './pluginunit/vant'


Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  router,
  store,

  // store,
  render: h => h(App)
}).$mount('#app')
