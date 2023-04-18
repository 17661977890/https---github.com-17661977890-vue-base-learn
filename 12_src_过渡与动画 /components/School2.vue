<template>
    <div class="demo">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 
          1、vue过渡效果
          2、transition只能用一个单个元素标签，多个需要用transition-group,需要制定key
            被包裹的每个元素标签动画效果可以实现切换 而不用同步
        -->
        <transition name="hello" appear>
          <h3 v-show="isShow">姓名 {{name}}</h3>
        </transition>
        <transition name="hello" appear>
          <h3 v-show="isShow">姓名 {{name}}</h3>
        </transition>

        <transition-group name="hello" appear>
          <h3 v-show="!isShow" key="1">姓名 {{name}}</h3>
          <h3 v-show="isShow" key="2">你好 {{name}}</h3>
        </transition-group>
    </div>
</template>

<script>
    export default{
        name:'School2',
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
  /* 进入的起点 离开的终点*/
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active {
    transition: 0.5s linear;
  }
  /* 进入的终点 离开的起点*/
  .hello-enter-to,.hello-leave{
    transform: translateX(0);
  }
</style>