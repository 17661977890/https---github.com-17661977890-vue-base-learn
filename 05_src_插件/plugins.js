

/**
 *  插件：用于增强vue，
 *  本质：包含install方法的一个对象，第一个参数是Vue，第二个以后的参数是插件使用者传递的数据参数。
 * 
 * 定义：此处模版 
 * 
 * 使用 main.js中引入
 *  import plugins from './plugins'
 *  Vue.use(plugins)
 */

export default {
    install(Vue){
        console.log("install....",Vue )

        // 全局过滤器
        Vue.filter('myslice',function(value){
            return value.slice(0,4)
        })

        // 全局指令
        Vue.directive('fbind',{
            // 指令与元素绑定时调用
            bind(element,binding){
                console.log('bind',this)
                element.value = binding.value
            },
            // 指令所在元素被插入页面时调用
            inserted(element,binding){
                console.log('inserted',this)
                element.focus()
            },
            // 指令所在模版被重新解析时调用
            update(element,binding){
                console.log('update',this)
                element.value = binding.value
                // element.focus()
            }
        })

        // 定义混入(全局)
        Vue.mixin({
            data() {
                return{
                    x:100,
                    y:100
                }
            }
        })

        // 给vue原型上添加一个方法
        Vue.prototype.hello = ()=>{alert('你好啊')} 

    }
}