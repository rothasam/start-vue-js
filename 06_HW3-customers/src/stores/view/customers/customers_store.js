import axios from "axios";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore('views/customers/customers_store', {
    state: () => ({
        customers: []
    }),

    actions: {
        // async loadCustomers() {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const data = await response.json();
        //     this.customers = data;
        // }
        fetchCustomers(){
            axios.get('/api/customers/index.php')
            .then((res) => {
                this.customers = res.data.data;
            })
        }
    }
})