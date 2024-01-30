<template>
    <div>
      <button @click="goBack">Назад</button>
      <h1>{{( task?.description)}}</h1>
      <p  v-if="task">Сложность: {{ task?.complexity }}</p>
          <p v-if="task">Язык: {{ task?.language }}</p>
          <p v-if="task">Тег: {{ task?.tag }}</p>
    </div>
  </template>
  
  <script lang="ts">
  //import { Task } from '@/models/task.model';
  export default {
    props: {
      task: Object as () => {
      id: string;
      description: string;
      complexity: number;
      language: string;
      tag: string;
    },
    },
    methods: {
      goBack() {
        this.$emit("go-back");
      },
    },
  };
  </script>
  