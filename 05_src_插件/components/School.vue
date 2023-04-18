<template>
    <div class="demo">
        <h3>姓名 {{name | myslice}}</h3>
        <h3>地址 {{address}}</h3>
        <button @click="test">点击</button>
    </div>
</template>
<!-- 

 -->
<script>

    export default{
        name:'School',
        data() {     
            return{
                name: '北理工sssss',
                address: 'sss'
            }  
        },
        methods: {
            test(){
                this.hello()
            }
        },
        

    }
</script>

<style>
 
</style>