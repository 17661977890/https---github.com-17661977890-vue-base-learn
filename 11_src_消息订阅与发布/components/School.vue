<template>
    <div class="demo">
        <h3>姓名 {{name}}</h3>
        <h3>地址 {{address}}</h3>
    </div>
</template>
<!-- 

 -->
<script>
    import pubsub from 'pubsub-js'
    export default{
        name:'School',
        data() {     
            return{
                name: '北理工',
                address: '北京'
            }  
        },
        mounted() {  
            this.pubId = pubsub.subscribe('hello',(message,data)=>{
                console.log(this)
                console.log('有人发布了hello消息，hello消息执行了',message,data)
            })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId);
        },
        

    }
</script>

<style scoped>
  .demo {
    background-color: aquamarine;
  }
</style>