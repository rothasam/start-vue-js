<template>

    <div class="col-6 ">
        <div class=" me-1 box-shadow">
            <div class="px-4 py-3" style="border-bottom: 1px dashed #ddd;">
                <h5>{{ t('chartBranch.title') }}</h5>
                <p class="mb-0">{{ t('chartBranch.description') }}</p>
            </div>
            <DoughnutChart
            :chart-data="state.branchChartData"
            :options="state.optionsBranchChartData"
            :width="250"
            :height="250"
            />
        </div>
    </div>

</template>

<script setup>
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import { reactive, computed,onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCustomerStore } from '@/stores/view/customers/customers_store';
const customerStore = useCustomerStore();
const {t} = useI18n();
Chart.register(...registerables);
Chart.defaults.font.family = "Kantumruy Pro";


const state = reactive({
    branchChartData: computed(() => {
        const branches = customerStore.statistics.branches;

        const branchKandal = branches?.['Kandal'] ?? 0;
        const branchPP = branches?.['Phnom Penh'] ?? 0;
        const branchPreyVeng = branches?.['Prey Veng'] ?? 0;
        

        return {
            
            labels: [
                `${t('chartBranch.branchKandal')} ${branchKandal} ${t('chartBranch.people')}`, 
                `${t('chartBranch.branchPP')} ${branchPP} ${t('chartBranch.people')}`, 
                `${t('chartBranch.branchPreyVeng')} ${branchPreyVeng} ${t('chartBranch.people')}`
            ],
            datasets: [
                {
                    data: [branchKandal, branchPP, branchPreyVeng],
                    backgroundColor: [
                        '#c24d2c',
                        '#4364a1',
                        '#102639'
                    ]
                }
            ]
        };
    }),

    optionsBranchChartData:{
        cutout: '70%',
        responsive: true,
        borderColor: ['#000', '#333', '#666'],
        hoverOffset: 2,

        layout: {
            padding: {
                right: 90,
                top: 25,
                bottom: 25
            }
        },
        
        plugins: {
            legend:{
                display: true,
                position: 'right',
                padding: 30,
                
                
                labels: {
                    padding: 20,
                    boxWidth: 12,
                    boxHeight: 12,
                    usePointStyle: true,
                    borderColor: '#fff',

                    font: {
                        size: 16,
                        // weight: 'bold', 
                        // color: '#ffffff'
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
        borderWidth: 1,
        borderColor: '#ffffff',
    }
    

})



</script>