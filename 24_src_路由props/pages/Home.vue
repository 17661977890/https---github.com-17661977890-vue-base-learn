<template>
    <div>
        <h1>我是Home内容</h1>
         <div>
             <ul class="nav nav-tabs">
                 <li>
                     <!-- <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link> -->
                     <router-link class="list-group-item" active-class="active" :to="{name:'xinwen'}">News</router-link>
                    </li>
                 <li>
                     <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                 </li>
             </ul>
             <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name:'Home'
}
</script>
