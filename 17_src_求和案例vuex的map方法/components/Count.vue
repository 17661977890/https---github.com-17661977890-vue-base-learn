<template>
    <div>
        <h2>当前求和为：{{sum}}</h2> 
        <h2>学校：{{school}}</h2> 
        <h2>专业：{{subject}}</h2> 
        <h2>当前求大和为：{{bigSum}}</h2> 
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> 
        <button @click="increment(n)">+</button> 
        <button @click="decrement(n)">-</button> 
        <button @click="incrementOdd(n)">当前求和为奇数再加</button> 
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                n: 1,   // 用户选择的数字 
            }; 
        }, 
        computed: {
            /************state************/
            // mapState 生成计算属性，从state中读取属性(... es6语法 把一个完整对象放入另外的对象)
            // 写法一：对象写法
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
            // 写法二：数组写法（计算属性名和state属性名一致）
            ...mapState(['sum','school','subject']),

            /************getters************/
            // mapGetters 生成计算属性，从getters中读取属性(... es6语法 把一个完整对象放入另外的对象)
            // 写法一：对象写法
            // ...mapGetters({daHe:'bigSum'}),
            // 写法二：数组写法（计算属性名和state属性名一致）
            ...mapGetters(['bigSum']),

        },
        methods: { 
             /************mutations************/
            // 手动 commit mutations  （没有传递参数，计算是直接在commit传递的n值）
            // increment() {
            //     this.$store.commit('JIA',this.n)
            // }, 
            // decrement() {
            //     this.$store.commit('JIAN',this.n)
            // }, 
        
            /* 
            注意：我们原来的点击事件绑定的方法没有传递参数，那默认传递的就是事件本身，
            这样的话，到mutations中+=value就会报错 因为value不是n是事件对象。页面显示为：当前求和为：0[object PointerEvent]
            解决方案：
            1、点击事件传递参数 increment 改为 increment(n)
            2、或者定义新的函数
            increment() {
                jia(this.n)
            }, 
            decrement() {
                jian(this.n)
            }, 
            ...mapMutations({jia:'JIA',jian:'JIAN'}),
            
             */
            // mapMutations 帮助生成与mutations对话的方法，即包含$store.commit(xxx)的函数
            // 对象写法
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),
            // 数组写法： 要把事件方法改成JIA  JIAN （方法名和mutations中的方法名一致）
            // ...mapMutations(['JIA','JIAN']),


            /************actions************/
            // 手动 dispatch actions
            // incrementOdd() { 
            //     this.$store.dispatch('jiaOdd',this.n)
            // }, 
            // incrementWait() {
            //     this.$store.dispatch('jiaWait',this.n)
            // }, 

            // mapActions方法：用于帮助生成与actions对话的方法，即包含$store.dispatch(xxx)的函数
            // 注意 和上面一样 事件方法的传参数问题
            // 对象写法：
            ...mapActions({incrementOdd:"jiaOdd",incrementWait:'jiaWait'})
            // 数组写法：
            // ...mapActions(["jiaOdd",'jiaWait'])
        }, 
    };
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>