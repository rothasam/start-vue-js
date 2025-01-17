<template>

    <div class="modal fade" id="mdlDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteTeacher()">Delete</button>
        </div>
        </div>
    </div>
    </div>

</template>



<script setup>
import { Modal } from 'bootstrap';
import { onMounted } from 'vue';
import { useTeacherStore } from '@/stores/view/teacher_store';
import axios from 'axios';
const useTeacher = useTeacherStore()

onMounted(() => {
    useTeacher.mdl_del = Modal.getOrCreateInstance(document.getElementById('mdlDelete'));
});

const deleteTeacher = () => {
    axios.get(`/api/teachers/destroy.php?id=${useTeacher.selected_id}`)
        .then(res => {
            useTeacher.onLoadTeacher()
            useTeacher.mdl_del.hide()
        })
}



</script>


