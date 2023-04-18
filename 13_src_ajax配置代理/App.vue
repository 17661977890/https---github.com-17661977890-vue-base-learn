<template>  
     <div>    
        <button @click="getStudents">获取学生信息</button>
    </div>
 </template>  
<script>
    import axios from 'axios'
    export default {     
        name:'App',     
        methods: {
            // getStudents(){
            //     // 服务器请求地址端口是5000 'http://localhost:5000/students' 通过配置代理，这里写8080
            //     axios.get('http://localhost:8080/students').then(
            //         response => {
            //             console.log("请求成功",response.data)
            //         },
            //         error => {
            //             console.log("请求失败",error.message)
            //         }
            //     )
            // },
            getStudents(){
                // 方式二：服务器请求地址端口是5000 'http://localhost:5000/students' 通过配置代理，这里写8080/api 代理指定前缀的请求
                axios.get('http://localhost:8080/api/students').then(
                    response => {
                        console.log("请求成功",response.data)
                    },
                    error => {
                        console.log("请求失败",error.message)
                    }
                )
            }
        },
    }
</script> 
                                          
<style scoped>
   
</style>