import Vue from 'vue'
import App from './App.vue'
// 引入vueRouter
import VueRouter  from 'vue-router'
// 引入路由器
import router from './router'

Vue.config.productionTip = false
// 应用vueRouter
Vue.use(VueRouter)


new Vue({
  el:'#app',
  render: h => h(App),
  router,
})

