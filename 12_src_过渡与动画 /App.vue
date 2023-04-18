<template>  
     <div class="app">    
        <h1>{{ msg }}</h1>      
        <School3></School3>
    </div>
 </template>  
<script>   
    import School3 from './components/School3'    
    export default {     
        name:'App',     
        components:{School3},    
        data() {       
            return {        
                msg:'你好啊！',  
            }
        },    
       
    }
</script> 
                                          
<style scoped>
    .app{
        background-color: rgb(216, 216, 21);
        padding: 5px;
    }
</style>