import { defineStore } from "pinia";
import axios from "axios";

export const useTeacherStore = defineStore('view/teacher_store', {
    state: () => ({
        frm: {
            name: '',
            email: '',
        },
        teachers: [],
        mdl_add: null,
        mdl_del: null,
        selected_id: 0, 
    }),
    actions: {
        onLoadTeacher() {
            axios.get('/api/teachers/index.php')
                .then((res) => {
                    this.teachers = res.data.data
                })

        }
    }

})