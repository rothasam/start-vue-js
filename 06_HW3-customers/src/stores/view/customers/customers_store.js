import axios from "axios";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore('views/customers/customers_store', {
    state: () => ({
        customers: [],
        statistics: {
    
        },
        addCustomer: false,
        frmData: {
            firstName: '',
            lastName: '',
            gender: '',
            branch: '',
            email: '',
            photo: '',
            removePhoto: true
        },
        crop:{
            img: '',
            blob: null,
            avartar: '/img/no_photo.jpg'            
        },
        selected_id: 0,
        mdl_delete: null,
        mdl_crop: null
    }),


    actions: {
        fetchCustomers(){
            axios.get('/api/customers/index.php')
            .then((res) => {
                this.customers = res.data.data;
                // console.log(this.customers);
            })
        },
        fetchStatistics(){
            axios.get('/api/customers/statistics.php')
            .then((statis) => {
                    this.statistics = statis.data.data;
                    // console.log(this.statistics);
                    // console.log(statis.data.data.branches['Kandal'])
                    
            })
        }
        
    }
})