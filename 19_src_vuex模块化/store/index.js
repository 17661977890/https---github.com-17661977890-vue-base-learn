import Vue from 'vue'
import Vuex from 'vuex' // 引入Vuex  
import countOptions from './count'
import personOptions from './person'
// 应用Vuex插件（这里不应用会报错 import会先执行）
Vue.use(Vuex)


// 创建并暴露store 
export default new Vuex.Store({
      modules:{
        countAbout:countOptions,
        personAbout:personOptions
      }
})