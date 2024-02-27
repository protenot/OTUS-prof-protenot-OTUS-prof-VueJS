<script setup lang="ts">
//import { TASKS } from '@/fakeDB/tasks';
//import type { Task } from '@/models/task.model';
import {  onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Monaco from './Monaco.vue'
import { useChosenTaskStore } from '@/stores/chosenTaskStore';

const localTaskStore = useChosenTaskStore();

const route = useRoute()
const router = useRouter()
const goBack = () => {
  router.push({ name: 'home' })
}

/* const loadTask = (taskId: string) => {
  localTask.value = TASKS.find((task) => task.id === taskId) || null
  console.log(taskId)
} */

onMounted(() => {
  const taskId = route.params.id as string
  localTaskStore.loadTask(taskId)
})

/* const compareSolutionWrapper = () => {
  const inputValue = ref('');
  localTaskStore.compareSolution(inputValue.value);
}; */
/* const compareSolution = (inputValue: string) => {
 
  const originalSolution = localTask.value?.solution
 
  if (inputValue == originalSolution) {
    console.log('originalSolution ' + originalSolution)
    console.log('Все правильно!')
  } else {
    console.log('Попробуйте еще раз!')
  } */
//}
</script>
<template>
  <div>
    <el-button @click="goBack">Назад</el-button>
    <h1>{{ localTaskStore.localTask?.description }}</h1>
    <p v-if="localTaskStore.localTask">Сложность: {{ localTaskStore.localTask?.complexity }}</p>
    <p v-if="localTaskStore.localTask">Язык: {{ localTaskStore.localTask?.language }}</p>
    <p v-if="localTaskStore.localTask">Тег: {{ localTaskStore.localTask?.tag }}</p>
    <Monaco
      id="monaco"
      ref="monacoEdit"
      :value="''"
      :readonly="false"
      type="curl"
      :height="300"
      @contentChange="inputValue => localTaskStore.setInputValue(inputValue)"
    ></Monaco>
    <el-button @click="localTaskStore.compareSolution(localTaskStore.getInputValue())">Сравнить с решением</el-button>
  </div>
</template>
