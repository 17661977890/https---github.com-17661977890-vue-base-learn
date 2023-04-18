<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽，等组件使用者进行填充 -->
        <slot>我是一个默认值，没有传我会出现</slot>
    </div>
</template>
<script>
export default {
    name:'Category',
    props:['title']
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