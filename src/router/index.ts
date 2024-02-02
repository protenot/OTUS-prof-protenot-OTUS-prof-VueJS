import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import Comments from '../views/Comments.vue'
import Profile from '../views/Profile.vue'
import ChosenTask from '../components/ChosenTask.vue'
import ChosenComment from '../components/ChosenComment.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/task/:id',
      name: 'task',
      component: ChosenTask
    },
    {
      path: '/comments/:idTask',
      name: 'comments',
      component: ChosenComment
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
