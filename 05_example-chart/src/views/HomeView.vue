<template>
  <h3>Chart</h3>
  
  <div>
    <DoughnutChart 
      :chart-data="state.bar"
      :options="{ 
        cutout: '70%',
        responsive: true , 
        plugins: {
            legend: {
                display: false,
            },
            tooltip:{
              padding: 15,
              bodyColor: '#ffffff',

            }
            
        }
      }"
      :height="300" 
      :width="300"
      />
  </div>

  <div style="width: 70%; margin: auto;">
    <BarChart
        :chart-data="state.donut"
        :width="800" 
    />
  </div>
</template>

<script setup>

import { DoughnutChart, BarChart } from 'vue-chart-3';
import { Chart, Legend, registerables } from 'chart.js';
import { reactive } from 'vue';

Chart.defaults.font.family = "Kantumruy Pro";
Chart.register(...registerables);


const state = reactive({
  donut: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets:[
      { 
        label : 'Total studends',
        data:[2,30,40,10,39,99],
        barThickness: 15
      },
      {
        label: 'Total Male',
        data: [1,15,35,5,9,19],
        backgroundColor: '#000000',
        barThickness: 15
      },
      {
        label: 'Total Female',
        data: [1,15,5,5,5,30,80],
        barThickness: 15
      }
      
    ]
  },
  bar: {
    labels: ['ប្រុស', 'ស្រី'],
    datasets: [
      {
        data: [17,5],
        backgroundColor: ['#000000', '#8e5ffe'],
      }
      
    ]
  }
})
</script>