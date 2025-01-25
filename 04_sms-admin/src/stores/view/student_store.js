import { defineStore } from 'pinia';
import axios from 'axios';

export const useStudentStore = defineStore('view/student_store',{
    state: () => ({
        frm: {
            name: '',
            phone: '',
        },
        modalAddStu: null,
        students: [],
        selected_id: 0
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