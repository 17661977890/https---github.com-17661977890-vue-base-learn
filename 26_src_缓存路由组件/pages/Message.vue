<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id"> 
            <router-link :to="{
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
            {{m.title}}
            </router-link>
            <button @click="showPush(m)">push查看</button>                 
            <button @click="showReplace(m)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息1'},
                    {id:'002',title:'消息2'},
                    {id:'003',title:'消息3'}
                ]
            }
        },
        methods:{ 
            showPush(m){ 
                this.$router.push({ 
                    name:'xiangqing', 
                    query:{ 
                        id:m.id, 
                        title:m.title 
                    } 
                }) 
            },
            showReplace(m){ 
                this.$router.replace({ 
                    name:'xiangqing', 
                    query:{ 
                        id:m.id, 
                        title:m.title 
                    } 
                }) 
            } 
        }
    }
</script>