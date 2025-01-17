import { defineStore } from 'pinia';
import axios from 'axios';

export const useStudentStore = defineStore('view/student_store',{
    state: () => ({
        modalAddStu: null,
        students: []
    }),
    actions: {
        onLoadStudent() {
            axios.get('/api/students/index.php')
                .then((res) => {
                    this.students = res.data.data
                })
        }
    }
})