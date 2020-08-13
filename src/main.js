import Vue from 'vue'
import routes from './route/route'

Vue.config.productionTip = false
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

new Vue({
  router
}).$mount('#app')
