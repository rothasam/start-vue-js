<template>
    <div class="container">
            <div class="row">
                <div class="col-5 mx-auto content-wrap">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>Contact Book</h3>
                            <p>Save your friend's contact.</p>
                        </div>
                        <div>
                            <a role="button" 
                            @click="showAddModal()" 
                            class="fs-4" ><i class="iconoir-plus-circle-solid"></i></a>
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Search contact" />
                    </div>
                    <ul class="list-group">
                        <li 
                            v-for="contact in contactManage.contacts" 
                            class="list-group-item contact-info">

                            <div class="d-flex justify-content-start">
                                <span class="cover">
                                    {{ contact.firstName[0] + contact.lastName[0]}}
                                </span>
                                <div class="ms-3">
                                    <p class="mb-0 fw-bold fs-5">
                                        {{ contact.firstName + " " + contact.lastName }}
                                    </p>
                                    <span class="d-flex justify-content-start align-items-center">
                                        <i class="iconoir-phone"></i>
                                        <span class="ms-2">
                                            {{ contact.phone }}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <a 
                                    @click="showDeleteModal(contact.id)"
                                    role="button" class="text-danger fs-5"><i class="iconoir-trash"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script setup>

import { useContactStore } from '@/stores/contact-book';
const contactManage = useContactStore();


const showAddModal = () => {
    contactManage.modalAdd.show();
}

const showDeleteModal = (selectedID) => {
    // console.log(contactManage.selected_id)
    contactManage.deleteContact(selectedID)
    contactManage.modalDelete.show();
}




</script>