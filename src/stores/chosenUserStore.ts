import { defineStore } from 'pinia'
import { USERS } from '@/fakeDB/users'
import type { User } from '@/models/user.model'

export const useChosenUserStore = defineStore({
  id: 'chosenUser',
  state: () => ({
    localUser: null as User | null
  }),

  actions: {
    loadUser(userId: string) {
      this.localUser = USERS.find((user) => user.id === userId) || null
    }
  }
})
