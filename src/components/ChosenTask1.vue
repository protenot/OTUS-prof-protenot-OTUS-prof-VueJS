<template>
  <div>
    <button @click="goBack">Назад</button>
    <h1>{{ task?.description }}</h1>
    <p v-if="task">Сложность: {{ task?.complexity }}</p>
    <p v-if="task">Язык: {{ task?.language }}</p>
    <p v-if="task">Тег: {{ task?.tag }}</p>
  </div>
</template>

<script lang="ts">
//import { TASKS } from '@/fakeDB/tasks';

//import { Task } from '@/models/task.model';

export default {
  props: {
    task: {
      type: Object as () => {
        id: string
        description: string
        complexity: number
        language: string
        tag: string
      },
      required: true
    }
  },
  data() {
    return {
      taskId: ''
    }
  },

  mounted() {
    const taskId = this.$route.params.id
    console.log('Task ID:', taskId)
    //this.task = TASKS.find((task) => task.id === taskId);
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
