import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import AnimateCss from 'animate.css'

Vue.config.productionTip = false
//Vue.use(AnimateCss)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
