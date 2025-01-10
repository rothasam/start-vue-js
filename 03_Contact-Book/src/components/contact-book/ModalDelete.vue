<template>
    <div class="modal fade" id="modalDelete"  tabindex="-1"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header pb-0 border-0">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete this contact ?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">No</button>
                    <button type="button" class="btn btn-danger" @click="clickDelete()">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Modal} from 'bootstrap';
import { useContactStore } from '@/stores/contact-book'

const deleleManage = useContactStore();



onMounted(() => {
    deleleManage.modalDelete = Modal.getOrCreateInstance(document.getElementById('modalDelete'));
    console.log(deleleManage.modalDelete)
})

const clickDelete = () => {
    let newArr = deleleManage.contacts.filter((item) => item.id != deleleManage.selected_id);
    console.log(newArr);
    // console.log(deleleManage.selected_id)
    deleleManage.contacts = newArr;
    deleleManage.selected_id = null;
    deleleManage.modalDelete.hide();
    console.log(deleleManage.selected_id)
;}



</script>