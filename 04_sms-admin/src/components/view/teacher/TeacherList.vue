<template>

    <div class="col-4 mb-4" 
        v-for="teacher in teacherStore.teachers"
    >
        <div class="card">
            <div class="img">
                <img :src="teacher.photo ? `http://api-school-ms.test/storage/photo/teachers/${teacher.photo}` : '/img/default.png'" alt="image">
            </div>
            <div class="card-body fw-bold ">
                <p>Name : {{ teacher.name }}</p>
                <span>Email : {{ teacher.email  }}</span>
                <div class="d-flex gap-2 mt-3">
                        <i class="iconoir-edit-pencil" @click="showModalSaveTeacher(teacher)" role="button"></i>
                        <i class="iconoir-trash" 
                            role="button"
                            @click="showModalDelete(teacher.id)"></i>
                    </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useTeacherStore} from '@/stores/view/teacher_store';
import { onMounted } from 'vue'
const teacherStore = useTeacherStore();

onMounted(() => {
    teacherStore.onLoadTeacher();
});

const showModalDelete = (id) => {
    teacherStore.selected_id = id;  // selecte for delete
    teacherStore.mdl_del.show()
}

const showModalSaveTeacher = (teacher) => {
    teacherStore.frm.name = teacher.name
    teacherStore.frm.email = teacher.email
    teacherStore.selected_id = teacher.id
    
    teacherStore.mdl_add.show()
}



</script>


<style>



.card{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    .img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
        img{
            width: 100%;
            border-radius: 50%;
            height: 100%;
            object-fit: cover;
        }
}
}

</style>