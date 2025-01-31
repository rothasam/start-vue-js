<template>

    <div class="col-12  mt-5">
        <div class="box-shadow px-5">
            <div class="between py-3">
            <div>
                <h5>{{ t('table.title') }}</h5>
                <p class="mb-0">{{ t('table.description') }}</p>
            </div>
            <div>
                <button type="button" class="btnPrimary center"  @click="showAddCustomer()">
                    {{ t('table.btnAdd') }}
                    <i class="iconoir-user-plus ms-2" style="font-size: 20px;"></i>
                </button>
            </div>
        </div>
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th>{{ t('table.tHeader.id') }}</th>
                    <th>{{ t('table.tHeader.customer') }}</th>
                    <th>{{ t('table.tHeader.gender') }}</th>
                    <th>{{ t('table.tHeader.branch') }}</th>
                    <th>{{ t('table.tHeader.email') }}</th>
                    <th>{{ t('table.tHeader.action') }}</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr class="align-middle"
                    v-for="customer in customerStore.customers"
                >
                
                    <td>{{ customer.id }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div>
                                <div class="customer-img">
                                    <img :src="customer.photo  ? `http://customer-api.test/storage/photo/customers/${customer.photo}` : '/img/no_photo.jpg'" alt="customer-photo">
                                </div>
                            </div>
                            <p class="mb-0 ms-2">{{ customer.firstName + ' ' +  customer.lastName }}</p>
                        </div>
                    </td>
                    <td>{{ customer.gender == 'Male' ? t('chartGender.male') : t('chartGender.female') }}</td>
                    <td>{{  customer.branch == 'Kandal' ? t('table.branchKandal') : customer.branch == 'Phnom Penh' ? t('table.branchPP') : t('table.branchPreyVeng') }}</td>
                    <td>{{ customer.email }}</td>
                    <td>
                        <button type="button" class="btn"><i class="iconoir-edit-pencil" @click="showEditCustomer(customer)"></i></button>
                        <button type="button" class="btn"><i class="iconoir-trash" @click="showModalDelete(customer)"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>

</template>

<script setup>
import { useCustomerStore } from '@/stores/view/customers/customers_store';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t} = useI18n();
const customerStore = useCustomerStore();

onMounted(() => {
    customerStore.fetchCustomers();
    customerStore.fetchStatistics()

})


const showModalDelete = (customer) => {
    customerStore.selected_id = customer.id;
    customerStore.mdl_delete.show();
}

const showAddCustomer = () => {
    customerStore.addCustomer = !customerStore.addCustomer;
    // alert(`opened ${customerStore.addCustomer}`);
}

const showEditCustomer = (customer) => {
    customerStore.addCustomer = !customerStore.addCustomer;

    customerStore.frmData.firstName = customer.firstName;
    customerStore.frmData.lastName = customer.lastName;
    customerStore.frmData.gender = customer.gender;
    customerStore.frmData.branch = customer.branch;
    customerStore.frmData.email = customer.email;
    if(customer.photo != null){
        customerStore.crop.avartar = `http://customer-api.test/storage/photo/customers/${customer.photo}`;
    }else{
        customerStore.crop.avartar = '/img/no_photo.jpg';
    }
    // console.log(customerStore.frmData.photo)
    // console.log(customer.photo)
    customerStore.selected_id = customer.id;
}



</script>



<style scoped>

.customer-img{
    width: 40px;
    height: 40px;
    
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
#tbody{
    tr{
        td{

            &:nth-child(2){
                width: 25%;
            }
            &:nth-child(6){
                width: 10%;
            }
        }
    }

    .btn{
        color: black;
        border: 0;

        &:nth-child(1){
            &:hover{
                color: rgb(200, 200, 49);
            }
        }
        &:nth-child(2){
            &:hover{
                color: rgb(255, 0, 0);
            }
        }
    }
}
</style>