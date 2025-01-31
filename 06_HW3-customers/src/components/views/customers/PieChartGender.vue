<template>

    <div class="col-6 ">
        <div class="ms-1 box-shadow">
            <div class="px-4 py-3" style="border-bottom: 1px dashed #ddd;">
                <h5>{{ t('chartGender.title') }}</h5>
                <p class="mb-0">{{ t('chartGender.description') }}</p>
            </div>
            <PieChart
                :chart-data="state.pieChartData"
                :options="state.pieChartOptions"
                :width="250"
                :height="250"
            />
        </div>

    </div>

</template>

<script setup>
import { PieChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import { reactive,computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCustomerStore } from '@/stores/view/customers/customers_store';
const customerStore = useCustomerStore()
const {t} = useI18n();
Chart.register(...registerables);
Chart.defaults.font.family = "Kantumruy Pro";


const state = reactive({
    pieChartData: computed(() => {
        const genders = customerStore.statistics.gender;
        const male = genders?.['Male'] ?? null;
        const female = genders?.['Female'] ?? null;

        return {
            labels: [
                `${t('chartGender.male')} ${male} ${t('chartGender.people')}`,
                `${t('chartGender.female')} ${female} ${t('chartGender.people')}`
            ],
            datasets: [
                {
                    // label: 'Gender',
                    data: [male, female],
                    backgroundColor: ['#6E6FB0', '#E77D80'],
                },
            ]
        }
    }),

    pieChartOptions: {
        responsive: true,
        hoveroffset: 2,
        layout: {
            padding:{
                right: 90,
                top: 25,
                bottom: 25
            }
        },
        
        plugins: {
            legend: {
                position: 'right',
                labels:{
                    padding: 20,
                    usePointStyle: true,
                    boxWidth: 12,
                    boxHeight: 12,
                    font: {
                        // font: 'Kantumruy Pro',
                        size: 16,
                        // weight: 'bold', 
                        
                    }
                },
                onClick: function(e) {
                    e.stopImmediatePropagation(); 
                },
            },
            tooltip: {
                padding: 10,
            },
            
        },
        
        borderWidth: 1,
        borderColor: '#ffffff',
        
    },
})

</script>
