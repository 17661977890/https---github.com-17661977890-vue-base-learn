<template>
    <div class="demo">
        <h3>姓名 {{name}}</h3>
        <h3>地址 {{address}}</h3>
        <button @click="showName">显示名称</button>
    </div>
</template>
<!-- 

 -->
<script>
    import {mixin} from '../mixin'
    export default{
        name:'School',
        data() {     
            return{
                name: '北理工',
                address: 'sss'
            }  
        },
        mixins:[mixin]
        

    }
</script>

<style>
 
</style>