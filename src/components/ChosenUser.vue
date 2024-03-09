<script setup lang="ts">
import { useChosenUserStore } from '@/stores/chosenUserStore'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const localUserStore = useChosenUserStore()
const route = useRoute()
const router = useRouter()
const goBack = () => {
  router.push({ name: 'users' })
}
onMounted(() => {
  const userId = route.params.id as string
  localUserStore.loadUser(userId)
})
</script>

<template>
  <div v-if="localUserStore.localUser">
    <el-button @click="goBack">Назад</el-button>
    <h2>Имя : {{ localUserStore.localUser.name }}</h2>
    <p>Почта :{{ localUserStore.localUser?.email }}</p>
    <p>Роль :{{ localUserStore.localUser.role }}</p>
  </div>
</template>
