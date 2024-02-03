//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//import axios from 'axios'
import { TASKS } from '@/fakeDB/tasks'
import type { Task } from '@/models/task.model'

export const useRootStore = defineStore('root', {
  state:()=>({
    tasks:[]
  }),
  actions:{
   async getTask(){
const data:Task[] = TASKS
console.log(data)
   }
  }
})
