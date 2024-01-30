<!-- eslint-disable vue/multi-word-component-names -->

<script  lang="ts">
import ChosenTask from "@/components/ChosenTask.vue"
import { TASKS } from "@/fakeDB/tasks";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const selectedTask = ref(null);
const goBack = () => {
  // Обработка возврата
};
const route = useRoute();
onMounted(() => {
  // Извлечь значение id из параметров маршрута
  const taskId = route.params.id;

  // TODO: Используйте taskId для получения соответствующей задачи
  // Например, вы можете использовать ваш массив TASKS
  // и найти задачу по taskId:
   selectedTask.value = TASKS.find(task => task.id === taskId);
});


</script>


<template>
<div>
   <ChosenTask :task = "selectedTask" v-if = "selectedTask" @go-back = "goBack"/>
</div>
</template>    

<style scoped>
/* @import './assets/style/main.css' */
</style>