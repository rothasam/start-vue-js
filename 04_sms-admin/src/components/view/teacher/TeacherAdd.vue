<template>
    <div class="modal fade" id="mdlAdd" tabindex="-1" >
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" >
                {{ teacherStore.selected_id == 0 ? 'Add Teacher' : 'Update Teacher' }}
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
                        
                        v-model="teacherStore.frm.name">
                </div>
                <div class="col-12">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="text" 
                        class="form-control" 
                        
                        v-model="teacherStore.frm.email">
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="saveTeacher()">Save</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { Modal } from 'bootstrap'
import { onMounted} from 'vue' 
import { useTeacherStore } from '@/stores/view/teacher_store';
import axios from 'axios';
const teacherStore = useTeacherStore();

onMounted(() => {
    teacherStore.mdl_add = Modal.getOrCreateInstance(document.getElementById('mdlAdd'));
});



const saveTeacher = () => {

    let frmData = new FormData()
    frmData.append('name', teacherStore.frm.name)
    frmData.append('email', teacherStore.frm.email)

    // console.log([...frmData]);

    if(teacherStore.selected_id == 0){
        axios.post('/api/teachers/store.php', frmData)
            .then(res => {
                teacherStore.onLoadTeacher()
                teacherStore.mdl_add.hide()
            })
            .catch(err => {
                nsole.error('Error saving teacher:', err);  // Log error if request fails
             });    
    }else{
        axios.post(`/api/teachers/update.php?id=${teacherStore.selected_id}`, frmData)
            .then((res) => {
                teacherStore.onLoadTeacher()
                teacherStore.mdl_add.hide()
            })
            .catch(err => {
                console.error('Error saving teacher:', err);  // Log error if request fails
            });
    }
}


</script>