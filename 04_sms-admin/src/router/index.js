import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homepage.vue';
import StudentView from '@/views/Student.vue';
import TeacherView from '@/views/Teacher.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView,
    },
    {
      path: '/teahcer',
      name: 'teacher',
      component: TeacherView,
    },
  ],
})

export default router
