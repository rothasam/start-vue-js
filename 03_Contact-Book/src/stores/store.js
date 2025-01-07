import { defineStore } from 'pinia';

export const useContactStore = defineStore('store.js',{
    state: () => ({
        modal: null,
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
        seleted_id: 0
        
    }),

    actions: {
        // deleteContact: (seletedID) => {
        //     console.log(seletedID);
        //     this.seleted_id = seletedID;
        // }
        deleteContact(selectedID) {
            console.log(selectedID); // Log the passed selected ID
            this.selected_id = selectedID; // Correctly set the selected ID in the store
            this.modal.show();
        },
    }
})