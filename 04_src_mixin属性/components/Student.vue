<template>
    <div class="demo">
        <h3>{{msg}}</h3>
        <h3>姓名 {{name}}</h3>
        <h3>年龄 {{age}}</h3>
        <button @click="showName">显示名称</button>
    </div>
</template>
<!-- 
    混合属性mixins 多个组件中共有的内容，就可以利用混合属性，进行复用。
    
    局部混合
    全局混合：main.js中用 （所有vc vm都会被用到）

    注意：重复性问题：
    组件中已有的methods函数或者data数据，混合属性和组件 发生冲突，以组件里的为准，
    但是生命周期钩子函数，混合在后，组件内部在前，都用。
 -->
<script>
    import {mixin,mixin2} from '../mixin'
    export default{
        name:'Student',
        data() {     
            return{
                msg: "大家好，我是个学生：",
                name: '张三',
                age:20
            }  
        },
        mixins:[mixin,mixin2]
        

    }
</script>

<style>
 
</style>