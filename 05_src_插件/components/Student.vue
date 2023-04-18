<template>
    <div class="demo">
        <h3>{{msg}}</h3>
        <h3>姓名 {{name}}</h3>
        <h3>年龄 {{age}}</h3>
        <input type="text" v-fbind:value="name">
    </div>
</template>
<!-- 
 -->
<script>

    export default{
        name:'Student',
        data() {     
            return{
                msg: "大家好，我是个学生：",
                name: '张三',
                age:20
            }  
        }
        

    }
</script>

<style>
 
</style>