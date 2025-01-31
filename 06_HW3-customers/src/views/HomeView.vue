<template>
    <main>
        <div class="container">
            <div class="row">
                <CustomerHeader />
                <DoughnutChartBranch v-if="!customerStore.addCustomer" />
                <PieChartGender v-if="!customerStore.addCustomer" />

                <CustomerList v-if="!customerStore.addCustomer" />

                <AddCustomer v-if="customerStore.addCustomer" />
            </div>
        </div>

    </main>

    <DeleteCustomerModal/>
    <CropPhotoModal/>

</template>
<script setup>
import CustomerHeader from '@/components/views/customers/CustomerHeader.vue';
import CustomerList from '@/components/views/customers/CustomerList.vue';
import DoughnutChartBranch from '@/components/views/customers/DoughnutChartBranch.vue';
import PieChartGender from '@/components/views/customers/PieChartGender.vue';
import AddCustomer from '@/components/views/customers/AddCustomer.vue';
import { useCustomerStore } from '@/stores/view/customers/customers_store';
import DeleteCustomerModal from '@/components/views/customers/DeleteCustomerModal.vue';
import CropPhotoModal from '@/components/views/customers/CropPhotoModal.vue';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';

const customerStore = useCustomerStore()

// onMounted(() => {
//     customerStore.addCustomer = customerStore.addCustomer;
// });





</script>