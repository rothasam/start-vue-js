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
                        <!-- <input type="text" class="form-control" placeholder="Search contact" /> -->
                         <!-- Bind the input to the searchQuery state in Pinia -->
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search contact"
                            v-model="contactManage.searchQuery"  
                        />
                    </div>
                    <ul class="list-group">
                        <!-- v-for="contact in contactManage.contacts"  -->
                        <li 
                        v-for="contact in filteredContacts" 
                        :key="contact.id"
                            class="list-group-item contact-info">

                            <div class="d-flex justify-content-start">
                                <span class="cover">
                                    {{ 
                                        contact.firstName ? 
                                        ( contact.lastName ? (contact.firstName[0] + contact.lastName[0]) : contact.firstName[0] ) 
                                        : contact.lastName ? contact.lastName[0] : 'A' 
                                     }}
                                </span>
                                <div class="ms-3">
                                    <p class="mb-0 fw-bold fs-5">
                                        {{ 
                                            contact.firstName || contact.lastName ? 
                                            contact.firstName + " " + contact.lastName
                                            : "Anonymous"
                                        }}
                                    </p>
                                    <span class="d-flex justify-content-start align-items-center">
                                        <i class="iconoir-phone"></i>
                                        <span class="ms-2">
                                            {{ 
                                                contact.phone ? formatPhone(contact.phone) : '000 000 000'
                                            }}
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
import { computed } from 'vue';
const contactManage = useContactStore();


const filteredContacts = computed(() => {
  return contactManage.searchContacts(); 
});

const formatPhone = (phone) => {
  const cleaned = ('' + phone).replace(/\D/g, ''); // Remove non-digit characters
  return cleaned.replace(/(\d{3})(?=\d)/g, '$1 '); // Add a space after every 3 digits
};

const showAddModal = () => {
    contactManage.modalAdd.show();
}

const showDeleteModal = (selectedID) => {
    // console.log(contactManage.selected_id)
    contactManage.deleteContact(selectedID)
    contactManage.modalDelete.show();
}




</script>