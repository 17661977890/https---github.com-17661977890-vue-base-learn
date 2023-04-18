<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件求和为：{{ sum }}</h3> 
        <h3 style="color:red">列表中第一个人的名字：{{ firstPersonName }}</h3> 
        <input type="text" placeholder="请输入名字" v-model="name"> 
        <button @click="add">添加</button>
        <button @click="addWang">添加姓王的人</button>
        <button @click="addPerson">随机添加人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>
<script>
    import {nanoid} from 'nanoid'
    import {mapState} from "vuex"
    export default {
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        computed: {
            // ...mapState('countAbout',['sum']),
            // ...mapState('personAbout',['personList'])
            personList() {
                return this.$store.state.personAbout.personList
            },
            sum() {
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }

        },
        mounted() {
            console.log(this.$store)
        },
        methods: {
            add() {
                if (this.name === "") return 
                const personObj = {id: nanoid(),name: this.name}
                this.$store.commit('personAbout/ADD_PERSON', personObj) 
                this.name = ''
            },
            addWang(){
                const personObj = {id: nanoid(),name: this.name}
                this.$store.dispatch('personAbout/addPersonWang',personObj)
            },
            addPerson(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
    }
</script>