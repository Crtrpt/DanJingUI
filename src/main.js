import Vue from 'vue'
import routes from './route/route'
import Vuex from 'vuex'


Vue.config.productionTip = false
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

Vue.use(Vuex)

new Vue({
  router
}).$mount('#app')
