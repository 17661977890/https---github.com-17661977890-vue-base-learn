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
                name: '北理工sssss',
                address: 'sss'
            }  
        }
        

    }
</script>

<style scoped>
    /*
        样式类名可能会和其他组件中重复，那么样式就会被影响。后引入的组件就会样式就会覆盖先引入的组件样式
        scoped：限定区域，只限制在本组件用
    */
  .demo {
    background-color: aquamarine;
  }
</style>