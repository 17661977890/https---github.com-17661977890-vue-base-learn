import axios from 'axios'
import {nanoid} from 'nanoid'
export default{
    /** 人员列表相关的vuex模块配置 */
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }
        },
        addPersonServer(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(response => {
                context.commit('ADD_PERSON', {
                    id: nanoid(),
                    name: response.data
                })
            }, error => {
                alert(error.message)
            })
        }
    },
    // 准备mutations——用于操作数据（state）  同步操作 （开发者工具可以监控其行为）
    mutations:{
        ADD_PERSON(state,value){   
            console.log('mutations中的ADD_PERSON被调用了')   
            state.personList.unshift(value)  
        }
    },
    // 准备state——用于存储数据  
    state:{
        personList: [
            {id:'001',name:"张三"}
        ]
    },
    // 准备getters--用于将state中的数据进行加工
    getters:{
        firstPersonName(state){
            console.log(state)
            return state.personList[0].name
        }
    }

}