<template>
    <div class="container">
        <Category title="美食">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F22a294fa-27e6-4430-bdae-775f820a8d92%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683447669&t=abef62eca8d9f81738b704940191639c" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>
<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {
            Category
        },
        data() {
            return {
                foods: ['火锅', '烧烤', '小龙虾', '牛排'],
                games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
                films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
            }
        },

    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>