<script setup lang="ts">
import { TASKS } from '@/fakeDB/tasks';
import type { Task } from '@/models/task.model';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Monaco from './Monaco.vue'


const localTask = ref(null as Task | null)

const route = useRoute()
const router = useRouter()
const goBack = () => {
  router.push({ name: 'home' })
}

const loadTask = (taskId: string) => {
  localTask.value = TASKS.find((task) => task.id === taskId) || null
  console.log(taskId)
}

onMounted(() => {
  const taskId = route.params.id as string
  loadTask(taskId)
})

/* function editorChange(val: string) {
  console.log(val)
} */
const compareSolutionWrapper = () => {
  const inputValue = ref('');
  compareSolution(inputValue.value);
};
const compareSolution = (inputValue: string) => {
  //console.log('val '+JSON.stringify(val))
  const originalSolution = localTask.value?.solution
 // const inputValue = null// дописать реализацию
  if (inputValue == originalSolution) {
    console.log('originalSolution ' + originalSolution)
    console.log('Все правильно!')
  } else {
    console.log('Попробуйте еще раз!')
  }
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
      id="monaco"
      ref="monacoEdit"
      :value="''"
      :readonly="false"
      type="curl"
      :height="300"
      @contentChange="inputValue => compareSolution(inputValue)"
    ></Monaco>
    <button @click="compareSolutionWrapper">Сравнить с решением</button>
  </div>
</template>
