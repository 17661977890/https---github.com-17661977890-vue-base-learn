<template>
    <!-- 
        props

        :age="29" 有冒号就是支持表达式 age+1 、不加字符串拼接 age="29" ,如果props加了类型限制就必须按照类型传递参数
        props 传递的参数 有些关键词是不可以用的 比如key等
     -->
    <div>
        <Student name="sunbin" :age="19"/>
        <Student name="wangliu" :age="29"/>
        <Student name="lisi" :age="39"/>
    </div>
</template>

<script>
    import Student from './components/Student'
    export default {
        name: 'App',
        components:{
            Student
        },
        data() {
            return {
                
            }
        },
        methods: {
           
        },

    }
</script>

<style>
    
</style>
