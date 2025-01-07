import { defineStore } from 'pinia';

export const useHomeStore = defineStore('views/home_store', {  // or views/home_store.js 
    // state , action
    state: () => ({  
        mdlConfirm: null,
        tasks:[
            {id: 1, name: 'tv count down', is_completed: false},
            {id: 2, name: 'Buy new computer', is_completed: true},
        ],
        seleted_id: 0
    }),
    actions: {
        
    }
})

