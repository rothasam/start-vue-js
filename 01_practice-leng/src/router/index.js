import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'  // HomeView is like variable , we use it as a component
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // where user enter url but / for default page
      name: 'home',   // what page we want to show
      component: HomeView,  // eager loading
      // component: () => import('@/views/HomeView.vue'),  // lazy loading
      meta : {
        title : 'Homepage'
      },
    },
    {
      path: '/about',  
      name: 'about',
      component: AboutView,
      meta : {
        title : 'About'
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title : 'Contact'
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
      meta: {
        title: 'Login Page'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue'),
      meta: {
        title: 'Register Page'
      }
    },
    {
      path: '/forgot-password',
      name: 'forgot-pass',
      component: () => import('@/views/auth/ForgotPasswordView.vue'),
      meta: {
        title: 'Register Page'
      }
    },
  ],
})

export default router
