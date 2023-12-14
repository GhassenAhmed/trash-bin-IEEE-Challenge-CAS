<template>
  <div class="root">
     <Navbar></Navbar>
     <div class="mt-5 py-5 px-5 mb-15">
      
      <div class="container " style="width: 100%">
        <v-row style="width: 100%;" class="d-flex justify-center align-center">
          <v-col> <v-chart class="v-col-12" :option="option" style="width:100% ;height: 700px" /></v-col>
        </v-row>
       
      </div>
            
  </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import VChart from 'vue-echarts'; 

import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer
]);

export default {
  components: {
    Navbar,
    VChart // Corrected import
  },
  name: 'FertilizersView',
  data() {
    return {
      drawer: false,
      mini: true,
      option : {
         title: {
         text: ` Fertilizers Level `,
         left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Fertilizers', 'Empty'],
      },
      series: [
        {
          name: 'Access From',
          name: 'Static',
          type: 'pie',
          radius: '60%',
          center: ['50%', '40%'],
          color: ['#00DFA2', '#614BC3'],
          data: [
            { value:0, name: 'Fertilizers' },
            { value:0, name: 'Empty' },
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
  methods:{
    randomValue(){
      return Math.floor(Math.random() * (1000 - 200 + 1)) + 100;
    }
  },
  created(){
    this.option.series[0].data[0].value = this.randomValue();
    this.option.series[0].data[1].value = this.randomValue();
  }
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