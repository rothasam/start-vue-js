<template>
    <main>
        <div class="container">
            <div class="row">
                <CustomerHeader />
                <GraphCustomerByBrach/>
                <CustomerList/>
            </div>
        </div>

    </main>

</template>
<script setup>
import CustomerHeader from '@/components/views/customers/CustomerHeader.vue';
import CustomerList from '@/components/views/customers/CustomerList.vue';
import GraphCustomerByBrach from '@/components/views/customers/GraphCustomerByBrach.vue';

</script>