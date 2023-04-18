<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h3>学校 {{schoolname}}</h3>
        <h3>地址 {{schooladdress}}</h3>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script> 
    export default{
        name: 'School',
        data() {     
            return{
                schoolname: "理工大",
                schooladdress: "here"
            }  
        },
        methods: {
            showName(){
                alert(this.schoolname)
            }
        },

    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: aquamarine;
    }
</style>