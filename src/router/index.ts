import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChosenUser from '../components/ChosenUser.vue'
import UserList from '../components/UserList.vue'
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
      path: '/users',
      name: 'users',
      component: UserList
    },
    
    {
      path: '/users/:id',
      name: 'profile',
      component: ChosenUser
    }
  ]
})

export default router
