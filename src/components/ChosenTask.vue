

<script setup lang="ts">

import { TASKS } from '@/fakeDB/tasks';
import type { Task } from '@/models/task.model';
import {ref,  onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Monaco from './Monaco.vue'

    
const localTask = ref(null as Task | null);
  
    const route = useRoute()
    const router = useRouter()
    const goBack = () => {
      router.push({ name: 'home' })
    }

    const loadTask = (taskId: string) => {
     localTask.value = TASKS.find((task) => task.id === taskId) || null
      
    }


    onMounted(() => {
      const taskId = route.params.id as string
      loadTask(taskId)
      
  
    })

    function editorChange(val: string) {
    
    
      console.log(val)
    }
    
    function compareSolution() {
  
}

</script>
<template>
    <div>
      <button @click="goBack">Назад</button>
      <h1>{{ localTask?.description }}</h1>
      <p v-if="localTask">Сложность: {{ localTask?.complexity }}</p>
      <p v-if="localTask">Язык: {{ localTask?.language }}</p>
      <p v-if="localTask">Тег: {{ localTask?.tag }}</p>
      <Monaco
        ref="monacoEdit"
        :value="''"
        :readonly="false"
        type="curl"
        :height="300"
        @editorChange="editorChange"
      ></Monaco>
      <button @click="compareSolution">Сравнить с решением</button>  
   </div>
  </template>