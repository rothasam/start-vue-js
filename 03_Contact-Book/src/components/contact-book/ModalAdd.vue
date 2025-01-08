<template>

    <!-- Modal -->
    <div class="modal fade" id="modalAdd"  tabindex="-1" >
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header pb-0 border-0">
            <h1 class="modal-title fs-5" >Add new contact</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body py-0">
            <p>Please enter contact's information below.</p>
            <form action="" @submit.prevent="addContact()">
                <div class="row">
                    <div class="col-6">
                        <div class="form-floating mb-3">
                            <input 
                                type="text" class="form-control" placeholder="" 
                                v-model="state.firstName">
                            <label for="firstname">First name</label>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-floating mb-3">
                            <input 
                                type="text" class="form-control" placeholder="" 
                                v-model="state.lastName" >
                            <label for="lastname">Last name</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating mb-3">
                            <input 
                                type="text" class="form-control" placeholder="" 
                                v-model="state.phone">
                            <label for="phone">Phone Number</label>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3 d-flex justify-content-end">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary ms-3">Add Contact</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>

</template>

<script setup>

import { onMounted  } from 'vue';
import { Modal } from 'bootstrap';
import { useContactStore } from '@/stores/contact-book'
import { reactive } from 'vue';
const appStore = useContactStore();

const state = reactive({
    firstName: '',
    lastName: '',
    phone: '',
    toAddNew: 1 
})


onMounted(() => {
    appStore.modalAdd = Modal.getOrCreateInstance(document.getElementById('modalAdd'));
    console.log(appStore.modalAdd);
})

const addContact = () => {
    if(state.toAddNew == 1){
        if(appStore.contacts.length > 0){
            let ids = appStore.contacts.map(item => item.id);
            let nextId = Math.max(...ids)+1;
            contactTmey(nextId,state.firstName,state.lastName,state.phone);
            clearInput();
        }else{
            let nextId = 1;
            contactTmey(nextId,state.firstName,state.lastName,state.phone);
            clearInput();
        }
    }
    // else{
    //     // update
    // }

}





function clearInput(){
    state.firstName = '';
    state.lastName = '';
    state.phone = '';
}
function contactTmey(Id,FirstName,LastName,Phone){
    const contactTmey = {
        id: Id,
        firstName: FirstName,
        lastName: LastName,
        phone: Phone,

    };
    appStore.contacts.push(contactTmey);
    appStore.modalAdd.hide();
}






</script>