<template>
    <main>
        <div class="container">
            <div class="row">
                <TeacherHeader/>
                <TeacherList/>

            </div>
            
        </div>
    </main>
    
    <TeacherDel/>
    <TeacherAdd/>

</template>

<script setup>
import TeacherList from '@/components/view/teacher/TeacherList.vue'
import TeacherHeader from '@/components/view/teacher/TeacherHeader.vue'
import TeacherDel from '@/components/view/teacher/TeacherDel.vue';
import TeacherAdd from '@/components/view/teacher/TeacherAdd.vue'
</script>