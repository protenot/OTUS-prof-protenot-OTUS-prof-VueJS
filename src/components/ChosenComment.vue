<script setup lang="ts">
import { TASKS } from '@/fakeDB/tasks'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useChosenCommentStore } from '@/stores/chosenCommentsStore'

const localCommentStore = useChosenCommentStore()
const route = useRoute()
const router = useRouter()
const tasks = ref(TASKS)
const commentText = ref('')
const goBack = () => {
  router.push({ name: 'home' })
}

const goToSolution = () => {
  router.push({ name: 'task', params: { id: route.params.idTask } })
}

const taskId = route.params.idTask as string

onMounted(() => {
  localCommentStore.loadComments(taskId)
})

const getTaskDescription = () => {
  const task = tasks.value.find((t) => t.id === taskId)
  return task ? task.description : ''
}
</script>

<template>
  <div>
    <el-button @click="goBack">На главную</el-button>
    <el-button @click="goToSolution">Вернуться к решению задачи</el-button>
    <div>{{ getTaskDescription() }}</div>
    <h2>Комментарии</h2>
    <ul>
      <li v-for="comment in localCommentStore.localComments" :key="comment.idTask">
        <div>{{ comment.commentText }}</div>
      </li>
    </ul>
    <h2>Введите комментарий</h2>
    <el-form id="comment-form" a @submit.prevent="localCommentStore.sendComment">
      <el-input type="text" v-model="commentText" />
      <el-button
        @click="localCommentStore.sendComment({ idTask: taskId, commentText: commentText })"
        >Прокомментировать</el-button
      >
    </el-form>
  </div>
</template>
