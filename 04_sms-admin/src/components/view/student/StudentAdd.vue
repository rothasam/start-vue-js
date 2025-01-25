<template>
    <div class="modal fade" id="mdlAddStu" tabindex="-1" >
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" >
                {{ studentStore.selected_id == 0 ? 'Add Student' : 'Update Student' }}
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex gap-3 align-items-center">
                        <img src="/img/default.png" alt=""
                            style="width: 75px; height: 75px;"
                            class="rounded-circle">
                        <a role="button">Choose</a>
                    </div>
                </div>
                <div class="col-12">
                    <label for="name" class="form-label">Name</label>
                    <input id="name" type="text" 
                        class="form-control" 
                        
                        v-model="studentStore.frm.name">
                </div>
                <div class="col-12">
                    <label for="phone" class="form-label">Email</label>
                    <input id="phone" type="text" 
                        class="form-control" 
                        
                        v-model="studentStore.frm.phone">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="saveStudent()">Save</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { Modal } from 'bootstrap';
import { onMounted } from 'vue';
import { useStudentStore } from '@/stores/view/student_store';
import axios from 'axios';

const studentStore = useStudentStore();

onMounted(() => {
    studentStore.modalAddStu = Modal.getOrCreateInstance(document.getElementById('mdlAddStu'));
});

const saveStudent = () => {

    let frmData = new FormData();
    frmData.append('name', studentStore.frm.name);
    frmData.append('phone', studentStore.frm.phone);

    if(studentStore.selected_id == 0) {
        axios.post('/api/students/store.php',frmData)
        .then(res => {
            studentStore.onLoadStudent();
        })
    }
};

</script>