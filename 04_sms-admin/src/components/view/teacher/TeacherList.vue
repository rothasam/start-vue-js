<template>

    <tr v-for="teacher in state.teachers">
        <td class="fw-bold">{{ teacher.id }}</td>
        <td>{{  teacher.name }}</td>
        <td>{{ teacher.gender }}</td>
        <td>{{ teacher.email }}</td>
        <td>{{ teacher.salary }}</td>
        <td>{{ teacher.photo }}</td>
        
    </tr>

</template>

<script setup>
import Student from '@/views/Student.vue';
import axios from 'axios';
import { reactive, onMounted } from 'vue';

const state = reactive({
    teachers: [],
})

onMounted(() => {
    axios.get('http://api-school-ms.test/api/teachers/index.php')
    .then((res) => {
        state.teachers = res.data.data;
    })
})

</script>