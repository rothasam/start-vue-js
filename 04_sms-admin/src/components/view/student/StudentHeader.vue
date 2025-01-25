<template>
    <div class="col-12 d-flex justify-content-between py-3">
        <h2>Student Management System</h2>
        <button @click="showMadalAdd()" class="btn btn-primary"><i class="iconoir-user-plus"></i>Add New</button>
    </div>
</template>

<script setup>
import { useStudentStore } from '@/stores/view/student_store';

const studenStore = useStudentStore();

const showMadalAdd = () => {
    studenStore.frm.name = "";
    studenStore.frm.email = "";
    studenStore.selected_id = 0;

    studenStore.modalAddStu.show();
}
</script>