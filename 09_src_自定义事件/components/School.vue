<template>
    <div class="demo">
        <h3>姓名 {{name}}</h3>
        <h3>地址 {{address}}</h3>
        <button @click="sendShoolName">把学校名给App</button>
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
        // 通过父组件给子组件传递函数类型的props实现 子给父传递数据
        props:['getSchoolName'],
        methods: {
            sendShoolName(){
                this.getSchoolName(this.name)
            }
        },
        

    }
</script>

<style scoped>
  .demo {
    background-color: aquamarine;
  }
</style>