<template>
  <div>
    <h1>Список задач</h1>
    <div class="filtr">
      <div>
        <label for="complexityFilter">Выберете сложность :</label>
        <select id="complexityFilter" v-model="selectedComplexity" @change="filterTasks">
          <option value="">Все сложности</option>
          <option value="5">Легкие</option>
          <option value="15">Средние</option>
          <option value="20">Сложные</option>
        </select>
      </div>

      <div>
        <label for="languageFilter">Выберете язык:</label>
        <select id="languageFilter" v-model="selectedLanguage" @change="filterTasks">
          <option value="">Все языки</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
        </select>
      </div>

      <div>
        <label for="tagFilter">Выберете тег:</label>
        <select id="tagFilter" v-model="selectedTag" @change="filterTasks">
          <option value="">Все теги</option>
          <option value="Aлгоритмы">Aлгоритмы</option>
          <option value="Cтруктуры данных">Cтруктуры данных</option>
          <option value="Динамическое программирование">Динамическое программирование</option>
        </select>
      </div>
    </div>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <h3>{{ task.description }}</h3>
        <p>Сложность: {{ task.complexity }}</p>
        <p>Язык: {{ task.language }}</p>
        <p>Тег: {{ task.tag }}</p>
        <button @click="selectTask(task.id)">Выбрать задачу</button>
        <button  @click="selectComment(task.id)">Посмотреть комментарии</button>
      </li>
    </ul>
    <ChosenTask :task="selectedTask" v-if="selectedTask" />
    <ChosenComment :comments = "selectedComments" v-if = "selectedComments"/>
  </div>
</template>
<script lang="ts">
import ChosenTask from '@/components/ChosenTask.vue';
import ChosenComment from '@/components/ChosenComment.vue';
import { type Task } from '@/models/task.model'
import { TASKS } from '@/fakeDB/tasks'
import { COMMENTS } from '@/fakeDB/comments'
export default {
  data() {
    return {
      tasks: TASKS,
      comments:COMMENTS,
      selectedTaskId: null as string | null,
      selectedComplexity: '',
      selectedLanguage: '',
      selectedTag: '',
    
    }
  },
  components: {
    ChosenTask,
    ChosenComment
  },
  /*   props: {
      tasks: Array,
    },  */
  computed: {
    filteredTasks() {
      return (this.tasks as Task[]).filter((task) => {
        const complexityFilter =
          !this.selectedComplexity || task.complexity.toString() === this.selectedComplexity
        const languageFilter = !this.selectedLanguage || task.language === this.selectedLanguage
        const tagFilter = !this.selectedTag || task.tag === this.selectedTag

        return complexityFilter && languageFilter && tagFilter
      })
    },
    selectedTask() {
      return this.tasks.find((task) => task.id === this.selectedTaskId)
    },
 

  selectedComments(){
return this.comments.find((comment)=>comment.idTask === this.selectedTaskId)
  },
},
  methods: {
  filterTasks(){},

    selectTask(taskId: string) {
      this.selectedTaskId = taskId as string
      this.$router.push(`/task/${taskId}`)
    },

    selectComment (taskId:string){
      this.selectedTaskId = taskId as string
      this.$router.push(`/comments/${taskId}`)
    }
  }
}
</script>
<style>
.filtr {
  display: flex;
}
</style>

