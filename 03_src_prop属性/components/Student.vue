<template>
    <div class="demo">
        <h3>{{msg}}</h3>
        <h3>姓名 {{name}}</h3>
        <h3>年龄 {{myAge+1}}</h3>
        <button @click="updateAge">改年龄</button>
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
                myName: this.name,
                myAge:this.age
            }  
        },
        methods: {
            updateAge(){
                // 接收的prop属性age不可以直接修改。
                // this.age++
                this.myAge++
            }
        },
        // 注意：接受的props 是不可以改的,优先级更高，所以data中可以this获取

        // 1、简单接收
        // props: ['name','age']

        // 2、接收参数同时指定类型限制
        // props:{
        //     name: String,
        //     age: Number
        // }

        //3、类型限制、默认值指定、必要性限制
        props:{
            name:{
                type: String,
                required:true,
            } ,
            age:{
                type: Number,
                default: 20
            } 
        }


    }
</script>

<style>
 
</style>