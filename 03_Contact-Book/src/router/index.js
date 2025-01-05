import { createRouter, createWebHistory } from 'vue-router'
import ContactBook from '@/views/ContactBookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contact-book',
      component: ContactBook,
    },
    
  ],
})

export default router
