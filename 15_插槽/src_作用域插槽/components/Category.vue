<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 
            定义一个插槽，等组件使用者进行填充
            作用域：本来data数据是在app.vue中，如果不在，则会出现作用域问题。
            slot解决：传递数据问题
            :game="games" 把games 传给了插槽的使用者，即传给App.vue
        -->
        <slot :game="games">我是一个默认值，没有传我会出现</slot>
    </div>
</template>
<script>
export default {
    name:'Category',
    props:['title'],
    data() {
        return {
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽']
        }
    },
}
</script>
<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        background-color: orange;
        text-align: center;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>