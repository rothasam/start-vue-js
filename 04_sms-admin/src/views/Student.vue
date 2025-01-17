

<template>
    <div class="container">
        <!-- <div class="d-flex justify-content-between align-items-center">
            <h1 class="fw-bold my-5">Student Management System</h1>
            <button class="btn bg-primary text-white">
                <span ><i class="iconoir-plus"></i></span>
            </button>
        </div>
        <table class="table">
            <caption>List of student</caption>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Photo</th>
            </tr>
        </thead>
        <tbody>

            <StudentList/>
            
        </tbody>
        </table> -->

        <div class="row">
            <StudentList/>
        </div>
    </div>
</template>

<script setup>
import StudentList from '@/components/view/student/StudentList.vue';

</script>



