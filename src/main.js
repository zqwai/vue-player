import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
// import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './assets/stylus/reset.styl'

Vue.config.productionTip = false
// Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
