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
                    component: Details
                }]
            }]
        }  
    ] 
})