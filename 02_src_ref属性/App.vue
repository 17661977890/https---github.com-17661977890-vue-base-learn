<template>
    <!-- 
        ref:
        1、被用来给元素或自组件注册引用信息（id的替代者）
        2、应用在html标签上获取的是真实dom元素，应用在组件标签上是vc实例对象
        3、使用方式
        <h1 ref="xxx"></h1>
        <Student ref="xxx"/>
        获取： this.$refs.xxx
     -->
    <div>
        <School/>
        <Student ref="stu"/>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方dom元素</button></button>
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'
    export default {
        name: 'App',
        components:{
            School,Student
        },
        data() {
            return {
                msg: 'hello'
            }
        },
        methods: {
            showDom(){
                // 获取dom元素
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                // 获取vc组件实例对象
                console.log(this.$refs.stu)
            }
        },

    }
</script>

<style>
    
</style>
