<template>
    <div>
        <h2>当前求和为：{{sum}}</h2> 
        <h2>学校：{{school}}</h2> 
        <h2>专业：{{subject}}</h2> 
        <h2>当前求大和为：{{daHe}}</h2> 
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> 
        <button @click="increment">+</button> 
        <button @click="decrement">-</button> 
        <button @click="incrementOdd">当前求和为奇数再加</button> 
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                n: 1,   // 用户选择的数字 
            }; 
        }, 
        computed: {
            // 手动写计算属性
            /************state************/
            // xuexiao(){
            //     return this.$store.state.school
            // },
            // he(){
            //     return this.$store.state.sum
            // },
            // xueke(){
            //     return this.$store.state.subject
            // },

            // mapState 生成计算属性，从state中读取属性(... es6语法 把一个完整对象放入另外的对象)
            // 写法一：对象写法
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
            // 写法二：数组写法（计算属性名和state属性名一致）
            ...mapState(['sum','school','subject']),

            /************getters************/
            // 手动写计算属性
            // daHe(){
            //     return this.$store.getters.bigSum
            // }

             // mapGetters 生成计算属性，从getters中读取属性(... es6语法 把一个完整对象放入另外的对象)
            // 写法一：对象写法
            // ...mapGetters({daHe:'bigSum'}),
            // 写法二：数组写法（计算属性名和state属性名一致）
            ...mapGetters(['bigSum']),

        },
        methods: { 
            increment() {
                this.$store.commit('JIA',this.n)
            }, 
            decrement() {
                this.$store.commit('JIAN',this.n)
            }, 
            incrementOdd() { 
                this.$store.dispatch('jiaOdd',this.n)
            }, 
            incrementWait() {
                this.$store.dispatch('jiaWait',this.n)
            }, 
        }, 
    };
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>