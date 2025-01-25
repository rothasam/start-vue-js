<template>

    <div class="col-6 bg-dark">
        <DoughnutChart
            :chart-data="state.branchChartData"
            :options="state.optionsBranchChartData"
            :width="300"
            :height="300"
        />
    </div>

</template>

<script setup>
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import { reactive } from 'vue';
Chart.register(...registerables);
Chart.defaults.font.family = "Kantumruy Pro";


const state = reactive({

    branchChartData:{
        labels: ['Branch Kandal ','Branch Phnom Penh','Branch Prey Veng'],
        datasets:[
            {
                data: [10,30,5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                
            },
            
        ]
    },

    optionsBranchChartData:{
        cutout: '70%',
        responsive: true,
        borderColor: ['#000', '#333', '#666'],
        hoverOffset: 4,

        layout: {
            padding: 20,
            // padding: {
            //     left: 50
            // }
        },
        
        plugins: {
            legend:{
                display: true,
                position: 'right',
                padding: 30,

                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 16,
                        weight: 'bold', 
                        color: '#fff'
                    }
                },
                onClick: function(e) {
                    e.stopImmediatePropagation(); // prevent any action when click on lebel
                },
            },
            tooltip:{
                padding: 10,
            },
            
        },
    }

})



</script>