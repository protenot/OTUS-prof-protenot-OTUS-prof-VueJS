<script setup lang="ts">
import { COMMENTS } from '@/fakeDB/comments';
import { TASKS } from '@/fakeDB/tasks';
import type { Comment } from '@/models/comment.model';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import  {v4}  from "uuid";
const route = useRoute();
const router = useRouter();
const comments = ref<null | Comment[]>(null);
const tasks = ref(TASKS);
const commentText = ref('');
const goBack = () => {
  router.push({ name: 'home' });
};

const goToSolution = () => {
  router.push({ name: 'task', params: { id: route.params.idTask } });
};

const loadTComments = () => {
  const taskId = route.params.idTask as string;
  comments.value = COMMENTS.filter((c) => c.idTask === taskId) || null;
};

onMounted(() => {
  loadTComments();
});

const getTaskDescription = () => {
  const taskId = route.params.idTask as string;
  const task = tasks.value.find((t) => t.id === taskId);
  return task ? task.description : '';
};

const sendComment = ()=>{
    const newCommentText = commentText.value;
    if (newCommentText.trim() !==""){
        const taskId = route.params.idTask as string; 
        const newComment: Comment = {
      id: v4(), 
      idTask: taskId,
      idUser:"inknown",
      commentText: newCommentText,

    };
    COMMENTS.push(newComment);
    commentText.value = '';
    loadTComments();
    }
    console.log()
}
</script>

<template>
  <div>
    <el-button @click="goBack">На главную</el-button>
    <el-button @click="goToSolution">Вернуться к решению задачи</el-button>
    <div>{{ getTaskDescription() }}</div>
    <h2>Комментарии</h2>
    <ul>
      <li v-for="comment in comments" :key="comment.idTask">
        <div>{{ comment.commentText }}</div>
      </li>
    </ul>
    <h2>Введите комментарий</h2>
    <el-form id = 'comment-form' a @submit.prevent="sendComment">
        <el-input type="text"  v-model="commentText" />
        <el-button @click="sendComment">Прокомментировать</el-button>
    </el-form>
  </div>
</template>


