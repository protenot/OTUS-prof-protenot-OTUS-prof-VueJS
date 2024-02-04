<!-- eslint-disable vue/multi-word-component-names -->

<script lang="ts">
import TaskList from '@/components/TaskList.vue'
import { TASKS } from '@/fakeDB/tasks'
export default {
  data() {
    return {
      tasks: TASKS
    }
  },
  components: {
    TaskList
  }
}
</script>

<template>
  <div>
    <TaskList :tasks="tasks" />
  </div>
</template>

<style scoped>
/* @import '.src/assets/style/main.css' */
body {
  background-color: pink;
}
</style>
