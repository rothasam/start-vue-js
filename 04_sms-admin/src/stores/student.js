import { defineStore } from 'pinia';

export const useStudentManage = defineStore('Student',{
    state: () => ({
        modalAddStu: null,
        
    })
})