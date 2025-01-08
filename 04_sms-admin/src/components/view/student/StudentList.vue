<template>
    <!-- <ul class="list-group">
        <li v-for="stu in state.students" class="list-group-item" :key="state.id">
            <h4>{{ stu.name }}</h4>
            <p>{{  stu.phone }}</p>
        </li>
    </ul> -->
        <tr v-for="stu in state.students">
                <td class="fw-bold">{{ stu.id }}</td>
                <td>{{ stu.name }}</td>
                <td>{{ stu.phone }}</td>
                <td>{{ stu.photo }}</td>
        </tr>
    
</template>

<script setup>

import axios from 'axios';
import { reactive , onMounted} from 'vue';
import { Modal } from 'bootstrap';


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