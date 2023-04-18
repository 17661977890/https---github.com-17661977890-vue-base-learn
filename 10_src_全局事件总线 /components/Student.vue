<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名称给School</button>
    </div>
</template>
<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男',
            }
        },
        methods: {
            sendStudentName(){
                // 全局事件总线：触发自定义事件hello
                this.$bus.$emit('hello',this.name)
            }    
        },
       
    } 
</script>
<style lang="less" scoped>  
    .student {
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>