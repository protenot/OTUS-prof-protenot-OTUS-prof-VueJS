import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/Home.vue'
import Comments  from '../views/Comments.vue'
import Profile  from '../views/Profile.vue'
import Task  from '../views/Task.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
