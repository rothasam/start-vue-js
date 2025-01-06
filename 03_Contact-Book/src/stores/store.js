import { defineStore } from 'pinia';

export const useAppStore = defineStore('store.js',{
    state: () => ({
        mdlAdd: null,
        contacts: [
            {
                id: 1,
                name: 'Rotha',
                phone: '012444444'
            },
            {
                id: 2,
                name: 'Sam',
                phone: '09988776'
            },
            {
                id: 3,
                name: 'Kon pov',
                phone: '01234567'
            }
        ],
    }),

    actions: {
        // addContact({ commit }, contact) {
        //     contact.id = this.contacts.length + 1;
        //     commit('addContact', contact);
        // },
        // deleteContact({ commit }, contactId) {
        //     commit('deleteContact', contactId);
        // }
    }
})