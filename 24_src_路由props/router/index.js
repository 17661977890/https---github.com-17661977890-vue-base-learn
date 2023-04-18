import VueRouter from 'vue-router' 
// 引入组件 
import About from '../pages/About' 
import Home from '../pages/Home'  
import News from '../pages/News'
import Message from '../pages/Message'    
import Details from '../pages/Details'    
// 创建并暴露一个路由器 
export default new VueRouter({  
    routes:[   
        {   
            name: 'guanyu',
            path:'/about',    
            component:About   
        },   
        {    
            path:'/home',   
            component:Home,
            children: [{
                // 注意这里不能加/
                name: 'xinwen',
                path: 'news',
                component: News
            }, {
                path: 'message',
                component: Message,
                children:[{
                    // 占位符声明 params传递参数
                    name:'xiangqing',
                    path: 'detail/:id/:title',
                    component: Details,
                    // props 第一种写法，值为对象，该对象所有的key-vlaue都会通过props传给Details组件
                    // props:{a:1,b:'nihao'}

                    //第二种写法：props值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件
                    // props:true

                    //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件  
                    // props($route){
                    //     return {
                    //         id: $route.query.id,    
                    //         title: $route.query.title   
                    //     }  
                    // },
                    // 解构赋值（连续解构赋值）
                    props({query:{id,title}}){
                        return {
                            id,    
                            title   
                        }  
                    }
                }]
            }]
        }  
    ] 
})