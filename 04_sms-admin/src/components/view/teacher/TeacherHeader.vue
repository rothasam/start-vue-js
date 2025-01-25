<template>

    <div class="col-12 d-flex justify-content-between py-3">
        <h2>Teacher Management System</h2>
        <button @click="showMadalAdd()" class="btn btn-primary"><i class="iconoir-user-plus"></i>Add New</button>
    </div>

</template>

<script setup>
import { useTeacherStore } from '@/stores/view/teacher_store';

const teacherStore = useTeacherStore();

const showMadalAdd = () => {
    teacherStore.frm.name = "";
    teacherStore.frm.email = "";
    teacherStore.selected_id = 0;

    teacherStore.mdl_add.show();
}
</script>
