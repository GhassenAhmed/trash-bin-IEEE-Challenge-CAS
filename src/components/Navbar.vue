<template>
    <nav>
     <v-app-bar app text elevation="1" style="background-color: #BEADFA;" >  
         <v-app-bar-nav-icon @click="drawer=!drawer">
         </v-app-bar-nav-icon>
         <v-toolbar-title class="text-uppercase grey--text">
             <div class="hidden-md-and-down">
                 <span class="font-weight-light">Dashboard - Trash Bin</span>
             </div>
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn to="/">
            <v-icon style="font-size: 30px;">mdi-home</v-icon>
         </v-btn>
     </v-app-bar>
     <v-navigation-drawer v-model="drawer" app >
         <Dashboard></Dashboard>
     </v-navigation-drawer>
     
    </nav>
    
 </template>
 <script>
 import Dashboard from '@/components/Dashboard.vue'
 export default {
     components:{
        Dashboard
     },
 data(){
     return{
         drawer:true,
     }
 },
 }
 </script>
 <style scoped>
</style>