<template>
    <ul class="list-group">
        <li v-for="stu in state.students" class="list-group-item" :key="state.id">
            <h4>{{ stu.name }}</h4>
            <p>{{  stu.phone }}</p>
        </li>
    </ul>
</template>

<script setup>

import axios from 'axios';
import { reactive , onMounted} from 'vue';

const state = reactive({
    students: [],
})

onMounted(() => {
    axios.get('http://api-school-ms.test/api/students/index.php')
    .then(res => {
        // console.log(res.data.data);
        state.students = res.data.data;
     })
})
</script>