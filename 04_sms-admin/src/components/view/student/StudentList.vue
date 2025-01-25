<template>
    <!-- <ul class="list-group">
        <li v-for="stu in state.students" class="list-group-item" :key="state.id">
            <h4>{{ stu.name }}</h4>
            <p>{{  stu.phone }}</p>
        </li>
    </ul> -->
        <!-- <tr v-for="stu in useStudent.students">
                <td class="fw-bold">{{ stu.id }}</td>
                <td>{{ stu.name }}</td>
                <td>{{ stu.phone }}</td>
                <td>{{ stu.photo }}</td>
        </tr> -->
        <div v-for="stu in useStudent.students"
            :key="stu.id"
            class="col-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-center">
                        <img :src="stu.photo ? `http://api-school-ms.test/storage/photo/students/${stu.photo}` : '/img/default.png'" 
                            alt="default.jpg"
                            style="width: 75px; height: 75px; object-fit: cover;" 
                            class="rounded-circle">
                    </div>
                    <h1 class="h3 mt-3 text-center">{{ stu.name }}</h1>
                    <p class="text-center mb-4">{{ stu.phone }}</p>
                    <!-- <div class="d-flex justify-content-center gap-2">
                        <i class="bi bi-pencil-square" role="button"></i>
                        <i class="bi bi-trash3" 
                            role="button"
                            @click="onConfirmDel(stu.id)"></i>
                    </div> -->
                </div>
            </div>
        </div>
    
</template>

<script setup>

// import axios from 'axios';
// import { reactive , onMounted} from 'vue';
// import { Modal } from 'bootstrap';
import { onMounted } from 'vue';
import { useStudentStore } from '@/stores/view/student_store'

const useStudent = useStudentStore()

onMounted(() => {
    useStudent.onLoadStudent();
});

</script>