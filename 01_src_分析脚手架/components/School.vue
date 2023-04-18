<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h3>学校 {{schoolname}}</h3>
        <h3>地址 {{schooladdress}}</h3>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
    // 模块化技术（暴露）---暴露出去 其他文件才能引入import
    // // 分别暴露：(直接在前面加export)
    // // export const school = Vue.extend
    // const school = Vue.extend({
    //     data() {     
    //         return{
    //             schoolname: "理工大",
    //             schooladdress: "here"
    //         }  
    //     },
    //     methods: {
    //         showName(){
    //             alert(this.schoolname)
    //         }
    //     },

    // })
    // // 统一暴露
    // // export {school}
    // // 默认暴露
    // export default school


    // 简写：  
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