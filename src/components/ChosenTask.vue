<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Monaco from './Monaco.vue'
import { useChosenTaskStore } from '@/stores/chosenTaskStore'

const localTaskStore = useChosenTaskStore()

const route = useRoute()
const router = useRouter()
const goBack = () => {
  router.push({ name: 'home' })
}

onMounted(() => {
  const taskId = route.params.id as string
  localTaskStore.loadTask(taskId)
})
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
      @contentChange="(inputValue) => localTaskStore.setInputValue(inputValue)"
    ></Monaco>
    <el-button @click="localTaskStore.compareSolution(localTaskStore.getInputValue())"
      >Сравнить с решением</el-button
    >
  </div>
</template>
