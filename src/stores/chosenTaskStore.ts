import { defineStore } from 'pinia'
import { TASKS } from '@/fakeDB/tasks'
import type { Task } from '@/models/task.model'

export const useChosenTaskStore = defineStore({
  id: 'chosenTask',
  state: () => ({
    localTask: null as Task | null,
    inputValue: '' as string
  }),
  actions: {
    loadTask(taskId: string) {
      this.localTask = TASKS.find((task) => task.id === taskId) || null
    },

    compareSolution(inputValue: string) {
      const originalSolution = this.localTask?.solution
      if (inputValue === originalSolution) {
        console.log('originalSolution ' + originalSolution)
        console.log('Все правильно!')
      } else {
        if (inputValue) {
          console.log('Попробуйте еще раз!')
        }
      }
    },

    setInputValue(value: string) {
      this.inputValue = value
    },
    getInputValue() {
      return this.inputValue
    }
  }
})
