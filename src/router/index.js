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




// to change tab title
/*
router.beforeEach((to, from, next) => {
  if(to.meta && to.meta.title){  
    document.title = to.meta.title;   
  }else{
    document.title = 'Untitled';
  }
  next()
})
  */

// router.beforeEach((to, from,next) => {  
//   document.title = to.meta?.title ?? 'Default Title';  
//   next()
// })
// beforeEach() function takes a callback function with three arguments
// to: the route the user is navigating to.
// from: the route the user is coming from.
// next: a function that must be called to continue with the navigation.
// .meta is a property you can attach to any route in Vue Router, and it can store additional data (like the title of the page, description, etc.).

export default router
