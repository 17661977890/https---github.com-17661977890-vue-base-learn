<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h3>姓名 {{name}}</h3>
        <h3>年龄 {{age}}</h3>
    </div>
</template>

<script>
    // 1、创建student组件
    export default{
        name:'Student',
        data() {     
            return{
                name: "sunbin",
                age:20
            }  
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: aquamarine;
    }
</style>