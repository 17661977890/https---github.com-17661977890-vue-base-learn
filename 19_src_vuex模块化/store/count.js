export default {

    /** 求和相关的vuex模块配置 */
    namespaced:true,
    // 准备actions——用于响应组件中的动作(有业务逻辑) --支持异步操作和多重分发
    actions:{
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
    },
    // 准备mutations——用于操作数据（state）  同步操作 （开发者工具可以监控其行为）
    mutations:{
        JIA(state,value){
            console.log('mutation中JIA被调用了。',state,value)
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutation中JIA被调用了。',state,value)
            state.sum -= value
        }
    },
    // 准备state——用于存储数据  
    state:{
        sum:0,
        school:'哈工大',
        subject:'计算机专业',
    },
    // 准备getters--用于将state中的数据进行加工
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }  
    

}