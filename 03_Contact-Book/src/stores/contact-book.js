import { defineStore } from 'pinia';

export const useContactStore = defineStore('contact-book',{
    state: () => ({
        modalAdd: null,
        modalDelete: null,
        selected_id: null,
        searchQuery: '',
        contacts: [
            {
                id: 1,
                firstName: 'Rotha',
                lastName: 'Sam',
                phone: '012444444'
            },
            {
                id: 2,
                firstName: 'Sok',
                lastName: 'San',
                phone: '099872344'
            }
        ],
        
    }),

    actions: {
        deleteContact(selectedID) {
            console.log(selectedID); 
            this.selected_id = selectedID;
        },
        
        searchContacts() {
            const query = this.searchQuery.toLowerCase();
            const filteredContacts = []; 
        
            for (const contact of this.contacts) {
                const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        
                if (fullName.includes(query) || contact.phone.includes(query)) {
                    filteredContacts.push(contact);
                }
            }
        
            return filteredContacts; 
        }
        
    }
})