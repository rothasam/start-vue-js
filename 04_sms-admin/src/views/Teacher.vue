<template>
    <main>
        <div class="container">
            <h1 class="fw-bold my-5 text-center">Teacher Management System</h1>
            <table class="table">
                <caption>List of teacher</caption>
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th> 
                        <th scope="col">Salary</th> 
                        <th scope="col">Photo</th> 
                    </tr>
                </thead>
                <tbody>

                    <TeacherList/>
                    
                </tbody>
            </table>
        </div>
    </main>
</template>

<script setup>
import TeacherList from '@/components/view/teacher/TeacherList.vue'
</script>