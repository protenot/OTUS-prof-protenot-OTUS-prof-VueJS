<script setup lang="ts">
import { USERS } from '@/fakeDB/users';
import type { User } from '@/models/user.model';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const localUser = ref(null as User | null)
const route = useRoute()
const router = useRouter()
const goBack = () => {
  router.push({ name: 'users' })
}

const loadUser = (userId: string) => {
  localUser.value = USERS.find((user) => user.id === userId) || null
  
}

onMounted(() => {
  const userId = route.params.id as string
  console.log(userId)
  loadUser(userId)
})


</script>

<template>
    <div v-if="localUser">
<button @click="goBack">Назад</button>
<h2>Имя : {{localUser.name}}</h2>
        <p>Почта :{{localUser?.email}}</p>
        <p>Роль :{{localUser.role}}</p>
        
</div>
</template>