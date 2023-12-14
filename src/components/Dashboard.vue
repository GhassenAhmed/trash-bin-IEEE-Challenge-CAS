<template >
    <div class="root mt-10">
        <v-list-item
          v-for="link in links"
          :key="link.title"
          class="mb-3 mt-5 pa-4"
        >
        <v-btn variant="text"  :to="link.to">
            <v-list-item-icon>
            <v-icon color="black" style="font-size: 30px;margin-right: 10px;">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="font-size: 20px;">{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-btn>
        </v-list-item>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                links:[
                    {icon:"mdi-trash-can",to:"/dashboard",title:"Trash"},
                    {icon:"mdi-gas-cylinder",to:"/biogas",title:"Biogas"},
                    {icon:"mdi-flash",to:"/electricity",title:"Electricity"},
                    {icon:"mdi-gas-cylinder",to:"/methane",title:"Methane(CH4)"}    
                ]
            }
        },
        methods:{
        }
    }
</script>
<style scoped>
.v-sheet.v-list {
    width: 289px;
}
.v-menu__content{
    min-width: 289px !important;
    top: 284px !important;
    left: 650px !important;
    transform-origin: left top !important;
    z-index: 204 !important;
}
</style>