<template>

    <div class="col-12 box-shadow">
        <div class="between py-3">
            <div>
                <h5>Customer List</h5>
                <p class="mb-0">Display numbers of customer by branch</p>
            </div>
            <div>
                <button type="button" class="btnPrimary">Add Customer</button>
            </div>
        </div>
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Gender</th>
                    <th>Branch</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="align-middle"
                    v-for="customer in customerStore.customers"
                >
                
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.firstName + ' ' +  customer.lastName }}</td>
                    <td>{{ customer.gender }}</td>
                    <td>{{  customer.branch }}</td>
                    <td>{{ customer.email }}</td>
                    <td>
                        <button type="button" class="btn btn-primary">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script setup>
import { useCustomerStore } from '@/stores/view/customers/customers_store';
import { onMounted } from 'vue';
const customerStore = useCustomerStore();

onMounted(() => {
    customerStore.fetchCustomers()
})

</script>