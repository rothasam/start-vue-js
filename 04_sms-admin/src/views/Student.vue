

<template>
    <div class="container">
        <div class="row">
            <StudentHeader/>

            <StudentList/>
        </div>
    </div>

    <StudentAdd/>
</template>

<script setup>
import StudentHeader from '@/components/view/student/StudentHeader.vue';
import StudentList from '@/components/view/student/StudentList.vue';
import StudentAdd from '@/components/view/student/StudentAdd.vue';
</script>



