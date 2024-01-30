<template>
    <div>
      <button @click="goBack">Назад</button>
      <h1>{{ localTask?.description }}</h1>
      <p v-if="localTask">Сложность: {{ localTask?.complexity }}</p>
      <p v-if="localTask">Язык: {{ localTask?.language }}</p>
      <p v-if="localTask">Тег: {{ localTask?.tag }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { TASKS } from '@/fakeDB/tasks';
import type { Task } from '@/models/task.model';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
  export default {
    setup() {
      const localTask = ref(null as Task | null);
      const route = useRoute();
      const router = useRouter();
      const goBack = () => {
        router.push({ name: 'home' });
      };
  
      const loadTask = (taskId: string) => {
       
        localTask.value = TASKS.find((task) => task.id === taskId) || null;
      };
  
      onMounted(() => {
      const taskId = route.params.id as string;
      loadTask(taskId);
    });

      return {
        localTask,
        goBack,
      };
    },
  };
  </script>
  