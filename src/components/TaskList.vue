<template>
  <div>
    <h1>Список задач</h1>
    <div class="filtr">
      <div>
        <el-label for="complexityFilter">Выберете сложность :</el-label>
        <el-select id="complexityFilter" v-model="selectedComplexity" @change="filterTasks" placeholder = "Все сложности">
          <el-option value="">Все сложности</el-option>
          <el-option value="5">Легкие</el-option>
          <el-option value="15">Средние</el-option>
          <el-option value="20">Сложные</el-option>
        </el-select>
      </div>

      <div>
        <el-label for="languageFilter">Выберете язык:</el-label>
        <el-select id="languageFilter" v-model="selectedLanguage" @change="filterTasks" placeholder="Все языки">
          <el-option value="">Все языки</el-option>
          <el-option value="JavaScript">JavaScript</el-option>
          <el-option value="TypeScript">TypeScript</el-option>
        </el-select>
      </div>

      <div>
        <el-label for="tagFilter">Выберете тег:</el-label>
        <el-select id="tagFilter" v-model="selectedTag" @change="filterTasks" placeholder="Все теги">
          <el-option value="">Все теги</el-option>
          <el-option value="Aлгоритмы">Aлгоритмы</el-option>
          <el-option value="Cтруктуры данных">Cтруктуры данных</el-option>
          <el-option value="Динамическое программирование">Динамическое программирование</el-option>
        </el-select>
      </div>
    </div>
    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <h3>{{ task.description }}</h3>
        <p>Сложность: {{ task.complexity }}</p>
        <p>Язык: {{ task.language }}</p>
        <p>Тег: {{ task.tag }}</p>
        <el-button @click="selectTask(task.id)">Выбрать задачу</el-button>
        <el-button  @click="selectComment(task.id)">Посмотреть комментарии</el-button>
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
  justify-content: space-between;
}
</style>

