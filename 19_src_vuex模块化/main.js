import Vue from 'vue'
import App from './App.vue'
//引用vuex
import vuex from 'vuex'
// 引入store
import store from './store'

Vue.config.productionTip = false



new Vue({
  el:'#app',
  render: h => h(App),
  store,
})

