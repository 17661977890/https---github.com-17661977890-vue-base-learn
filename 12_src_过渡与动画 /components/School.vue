<template>
    <div class="demo">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 
          vue过渡动画 
          内置组件 transition 
          1、name属性：
            <transition name="hello"> 如果有名称,不能用默认的v .v-enter-active 就要改成 .hello-xx-xxx
            使用name可以对不动标签区分动画效果  
          2、appear属性：可以让页面一开始就会有动画效果
            :appear="true" 或者直接写 appear 
          3、 
        -->
        <transition :appear="true">
            <h3 v-show="isShow" class="go">姓名 {{name}}</h3>
        </transition>
    </div>
</template>
<!-- 

 -->
<script>
    export default{
        name:'School',
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
  /* vue 动画 配合transition标签 */
  .v-enter-active{
    animation: animation1 1s;
  }
  .v-leave-active{
    animation: animation1 1s reverse;
  }

  @keyframes animation1 {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
  }
  /* css3 动画 需要给需要动画效果的标签加类选择器 come 或 go 来 去 */
  /* .come{
    animation: animation1 1s;
  }
  .go{
    animation: animation1 1s reverse;
  }
  @keyframes animation1 {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
  } */


</style>