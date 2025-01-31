<template>
    <!-- Modal -->
    <div class="modal fade" id="mdlDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
            <div>
                <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ t('deleteModal.header.title') }}</h1>
                <p>{{ t('deleteModal.header.des') }}</p>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <span>{{ t('deleteModal.msg.msgOne') }} {{ customerStore.selected_id}}? </span> <br>
            <span>{{ t('deleteModal.msg.msgTwo') }}</span>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary center" data-bs-dismiss="modal"><i class="iconoir-xmark-circle me-2"></i>{{ t('deleteModal.btnNo') }}</button>
            <button type="button" class="btn btn-primary center"  @click="deleteCustomer()"><i class="iconoir-check-circle me-2"></i>{{ t('deleteModal.btnYes') }}</button>
        </div>
        </div>
    </div>
    </div>

</template>

<script setup>
import { useCustomerStore } from '@/stores/view/customers/customers_store';
import axios from 'axios';
import { Modal } from 'bootstrap';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t} = useI18n();
const customerStore = useCustomerStore()

onMounted(() => {
    customerStore.mdl_delete = Modal.getOrCreateInstance(document.getElementById('mdlDelete'));
})

const deleteCustomer = () => {
    axios.get(`/api/customers/destroy.php?id=${customerStore.selected_id}`)
        .then( res => {
            customerStore.fetchCustomers();
            customerStore.fetchStatistics();
            customerStore.mdl_delete.hide();
        })
}

</script>