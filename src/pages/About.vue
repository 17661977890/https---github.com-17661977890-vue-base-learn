<template>
    <div>
        <h1>我是about内容</h1>
    </div>
</template>
<script>
export default {
    name:'About',
    // 通过路由规则，离开该组件时被调用         
    beforeRouteEnter (to, from, next) {             
        console.log('About--beforeRouteEnter',to,from)             
        if(localStorage.getItem('name')==='sunbin'){                 
            next()            
         }else{                 
            alert('用户名不对，无权限查看！')             
        }         
    },         
    // 通过路由规则，离开该组件时被调用         
    beforeRouteLeave (to, from, next) {             
        console.log('About--beforeRouteLeave',to,from)            
        next()         
    }
}
</script>
