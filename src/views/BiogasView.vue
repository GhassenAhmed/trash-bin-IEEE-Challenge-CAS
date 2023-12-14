<template>
    <div class="root">
       <Navbar></Navbar>
       <div class="mt-5 py-5 px-5 mb-15">
        <v-layout class="mt-15 mb-15" row >
          
            Biogas
        </v-layout>
        
              
    </div>
    </div>
  </template>
  <script>
  import Navbar from '@/components/Navbar.vue'
  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import { PieChart } from "echarts/charts";
  import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
  } from "echarts/components";
  import VChart, { THEME_KEY } from "vue-echarts";
  
  use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
  ]);
    export default {
    provide: {
        [THEME_KEY]: "dark"
    },
      components:{
        Navbar,VChart
     },
    name:'BiogasView',
  data(){
    return{
        drawer: false,
        mini: true,
     option : {
         title: {
         text: ` Client `,
         left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Client', 'ServiceProvider'],
      },
      series: [
        {
          name: 'Static',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value:0, name: 'Client' },
            { value:0, name: 'ServiceProvider' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
         ],
      },
  
      option1 : {
         title: {
         text: ` Service `,
         left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Verifier', 'Non verifier'],
      },
      series: [
        {
          name: 'Static',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value:0, name: 'Verifier' },
            { value:0, name: 'Non verifier' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
         ],
      },
        }
    },
  }
  </script>
  <style scoped>
  *{
    font-family:cursive;
    scroll-behavior: smooth;
    overflow: hidden;
    box-sizing: border-box;
  }
  .content{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  grid-gap: 25px;
  }
  
  @media screen and (max-width:950px){
  .content{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap: 25px;
  }
  
  }
  
  @media screen and (max-width:530px){
  .content{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
    text-align: center;
  }
  }
  .chart {
    height: 50vh;
    width: 30vw;
  }
  
  @media screen and (max-width:750px) {
    .chart {
      height: 30vh;
      width: 50vw;
    }
  }
  
  @media screen and (max-width:500px) {
    .chart {
      height: 30vh;
      width: 70vw;
    }
  }
  
  
  </style>