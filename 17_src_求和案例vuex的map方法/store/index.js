import Vue from 'vue'
import Vuex from 'vuex' // 引入Vuex  
// 应用Vuex插件（这里不应用会报错 import会先执行）
Vue.use(Vuex)


// 准备actions——用于响应组件中的动作(有业务逻辑) --支持异步操作和多重分发
const actions = {
    // 参数：actions提交到mutations的上下文对象 --- 这种直接操作数据的可以不用写在这，直接调用处commit即可
    // jia(context,value) {
    //     console.log('jia被调用了。',context,value)
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     console.log('jian被调用了。',context,value)
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value) {
        console.log('jiaOdd被调用了。',context,value)
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value) {
        console.log('jiaWait被调用了。',context,value)
        setTimeout(() => { 
            context.commit('JIA',value)      
        }, 500); 
    }
}  

// 准备mutations——用于操作数据（state）  同步操作 （开发者工具可以监控其行为）
const mutations = {
    JIA(state,value){
        console.log('mutation中JIA被调用了。',state,value)
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutation中JIA被调用了。',state,value)
        state.sum -= value
    }
} 


 // 准备state——用于存储数据  
const state = {
    sum:0,
    school:'哈工大',
    subject:'计算机专业'
}  

// 准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建并暴露store 
export default new Vuex.Store({
      actions,  
      mutations,  
      state,
      getters
})