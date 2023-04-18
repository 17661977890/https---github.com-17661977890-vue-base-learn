import VueRouter from 'vue-router' 
// 引入组件 
import About from '../pages/About' 
import Home from '../pages/Home'  
import News from '../pages/News'
import Message from '../pages/Message'    
import Details from '../pages/Details'    
// 创建并暴露一个路由器 
const router = new VueRouter({  
    mode:'history',
    routes:[   
        {   
            name: 'guanyu',
            path:'/about',    
            component:About,
            meta:{isAuth:false,title:"关于"}   
        },   
        {    
            path:'/home',   
            component:Home,
            meta:{isAuth:false,title:"首页"},
            children: [{
                // 注意这里不能加/
                name: 'xinwen',
                path: 'news',
                component: News,
                meta:{isAuth:true,title:"新闻"},
                // 独享路由守卫
                beforeEnter: (to, from, next) => {
                    console.log("独享路由守卫",to,from)
                    if(localStorage.getItem('name')==='sunbin'){
                        next()
                    }else{
                        alert('暂无权限')
                    }
                }
            }, {
                path: 'message',
                component: Message,
                meta:{isAuth:true,title:"消息"},
                children:[{
                    // 占位符声明 params传递参数
                    name:'xiangqing',
                    // path: 'detail/:id/:title',
                    path: 'detail',
                    component: Details,
                    meta:{isAuth:true,title:"消息详情"},
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
                            id,title   
                        }  
                    }
                }]
            }]
        }  
    ] 
})

// 全局前置路由守卫--- 每次路由切换之前（或初始化）的时候调用
router.beforeEach((to,from,next)=>{
    console.log('全局前置路由守卫',to,from,localStorage)
    // 判断当前路由是否进行权限控制
    if(to.meta.isAuth){
        if(localStorage.getItem('name')==='sunbin'){
            next()
        }else{
            alert('暂无权限')
        }
    }else{
        next()
    }
})

// 全局后置路由守卫--- 每次路由切换之后（或初始化）的时候调用 (没有next)
router.afterEach((to,from)=>{
    console.log('全局后置路由守卫')
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = 'vue系统'
    }

})

export default router 

