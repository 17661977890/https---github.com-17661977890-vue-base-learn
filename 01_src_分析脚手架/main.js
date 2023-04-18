// 项目入口文件

/**
 * 1、vue.js 与 vue.runtime.xxx.js的区别
 * （1）vue.js 是完整版的vue，包含：核心功能+模版解析器
 * （2）.vue.runtime.xxx.js是运行版vue。只包含：核心功能，没有模版解析器
 * 
 * 因为没有模版解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
 *   把模版解析器干掉，打包体积小，轻量，
 */



// 引入vue（残缺版）
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 关闭vue生产提示
Vue.config.productionTip = false

/**
 *  创建vue实例，加载到容器
 */
new Vue({
  render: h => h(App),
  // 1、render函数写法演变：函数--箭头函数

  // render(createElement){
  //   return createElement('h1','你好啊')
  // }

  // render:createElement =>createElement('h1','你好啊')
}).$mount('#app')



// 这个是完整版vue
// import Vue from 'vue/dist/vue'
// 引入App组件
// import App from './App.vue'
// 关闭vue生产提示
// Vue.config.productionTip = false

/**
 *  创建vue实例，加载到容器
 */
// new Vue({
 
  // 2、template 需要引入完整vuejs
  // template:`<h1>你好啊</h1>`

// })