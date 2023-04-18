<template>
    <div class="demo">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 
          1、vue过渡效果
          2、transition只能用一个单个元素标签，多个需要用transition-group,需要制定key
            被包裹的每个元素标签动画效果可以实现切换 而不用同步
        -->


        <transition-group 
          name="animate__animated animate__bounce" 
          enter-active-class="animate__swing"
          leave-active-class="animate__backInUp"
          appear>
          <h3 v-show="isShow" key="1">姓名 {{name}}</h3>
          <h3 v-show="isShow" key="2">你好 {{name}}</h3>
        </transition-group>
    </div>
</template>

<script>
  // 引入第三方动画css
  import 'animate.css'
    export default{
        name:'School3',
        data() {     
            return{
                isShow:true,
                name: '北理工'
            }  
        }
        

    }
</script>

<style scoped>
  h3 {
    background-color: aquamarine;
   
  }

</style>