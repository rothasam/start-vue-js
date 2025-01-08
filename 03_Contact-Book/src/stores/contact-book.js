import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact-book.js',{
    state: () => ({
        modalAdd: null,
        modalDelete: null,
        selected_id: null,
        contacts: [
            {
                id: 1,
                firstName: 'Rotha',
                lastName: 'haha',
                phone: '012444444'
            },
            {
                id: 2,
                firstName: 'Rotha',
                lastName: 'haha',
                phone: '09988776'
            }
        ],
        
    }),

    actions: {
        deleteContact(selectedID) {
            console.log(selectedID); 
            this.selected_id = selectedID;
        },
    }
})