<template>
    <v-card  style="height: 100%;">
    <v-layout  style="height: 100%;">
      <v-navigation-drawer
        expand-on-hover
        style="height: 100%;"
      >
     
        <v-list>
          <v-list-item
            prepend-avatar="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.15752-9/371463595_308250398855722_5800845893055358111_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=vgXhNilOcTEAX9IljkD&_nc_ht=scontent.ftun15-1.fna&oh=03_AdT6PWhRS3xbMch3dXG6ZnEDtHZeaktK7UN9i8OMMpwJfg&oe=65A2BF93"
            title="Ghassen Ahmed"
            subtitle="ghassenahmed74@gmail"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
       dashbord
      </v-main>
    </v-layout>
    </v-card>
</template>
<script>
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
        VChart
     },
  }
</script>
<style scoped>
</style>