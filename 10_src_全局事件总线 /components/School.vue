<template>
    <div class="demo">
        <h3>姓名 {{name}}</h3>
        <h3>地址 {{address}}</h3>
    </div>
</template>
<!-- 

 -->
<script>

    export default{
        name:'School',
        data() {     
            return{
                name: '北理工',
                address: '北京'
            }  
        },
        mounted() {  
            //🔴 给全局事件总线：绑定一个自定义事件hello,回调函数可以放在methods中，也可以写成如下的箭头函数      
            // console.log('School',this)       
            this.$bus.$on("hello", (data) => { 
                console.log("我是School组件，收到了数据", data);       
            });
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
        

    }
</script>

<style scoped>
  .demo {
    background-color: aquamarine;
  }
</style>