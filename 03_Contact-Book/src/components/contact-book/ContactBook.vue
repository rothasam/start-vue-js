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
                            <a role="button" class="fs-4"><i class="iconoir-plus-circle-solid"></i></a>
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Search contact" />
                    </div>
                    <ul class="list-group">
                        <li v-for="contact in state.contacts" class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="contact-info">
                                <span class="cover">
                                    
                                </span>
                                <div class="ms-3">
                                    <p class="mb-0 fw-bold fs-5">{{ contact.name }}</p>
                                    <span class="d-flex justify-content-center align-items-center">
                                        <i class="iconoir-phone"></i>
                                        <span class="ms-2">{{ contact.phone }}</span>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <a role="button" class="text-danger fs-5"><i class="iconoir-trash"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = new reactive({
    contacts: [
        {
            id: 1,
            name: 'Rotha',
            phone: '012444444'
        },
        {
            id: 2,
            name: 'Sam',
            phone: '09988776'
        },
        {
            id: 3,
            name: 'Kon pov',
            phone: '01234567'
        }
    ],

})



</script>
