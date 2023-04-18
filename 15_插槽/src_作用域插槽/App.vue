<template>
    <div class="container">
        <Category title="游戏">
            <template scope="demo">
                <!-- {{demo.game}} -->
                <ul>
                    <li v-for="(item,index) in demo.game" :key="index">{{item}}</li>
                </ul> 
            </template>
        </Category>

        <Category title="游戏">
            <!-- es6 的解构赋值 -->
            <template scope="{game}">
                <ol>
                    <li v-for="(item,index) in game" :key="index">{{item}}</li>
                </ol> 
            </template>
        </Category>
        <!-- slot-scope 新旧api 不同的写法 -->
        <Category title="游戏">
            <template slot-scope="{game}">
                <h4 v-for="(item,index) in game" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>
<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {
            Category
        }

    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>
