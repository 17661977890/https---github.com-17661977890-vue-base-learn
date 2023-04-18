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
            getStudents(){
                // vue-resource 请求方式
                this.$http.get('http://localhost:8080/api/students').then(
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