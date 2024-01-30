<template>
  <div>
      <h1>Список задач</h1>
      <div class = "filtr">
      <div >
          <label for="complexityFilter">Выберете сложность :</label>
          <select v-model = "selectedComplexity" @change = "filterTasks">
              <option value="">Все сложности</option>
              <option value="5">Легкие</option>
              <option value="15">Средние</option>
              <option value="20">Сложные</option>
          </select>
      </div>
  
      <div>
        <label for="languageFilter">Выберете язык:</label>
        <select v-model="selectedLanguage" @change="filterTasks">
          <option value="">Все языки</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
        </select>
      </div>
  
      <div>
        <label for="tagFilter">Выберете тег:</label>
        <select v-model="selectedTag" @change="filterTasks">
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
          <button @click="selectTask(task.id)"> Выбрать задачу</button>
          <button> Посмотреть комментарии</button>
        </li>
      </ul>
      <ChosenTask :task="selectedTask" v-if="selectedTask" />
  </div>

  </template>
  <script lang="ts">
  import ChosenTask from "@/components/ChosenTask.vue";
  import { type Task } from '@/models/task.model';
  import {TASKS} from "@/fakeDB/tasks";
  export default {
    data() {
      return {
        tasks: TASKS,
      selectedTaskId: null as string|null,
        selectedComplexity: "",
        selectedLanguage: "",
        selectedTag: "",
      };
    },
    components: {
    ChosenTask,
  },
   /*   props: {
      tasks: Array,
    },  */
    computed: {
      filteredTasks() {
      
        return (this.tasks as Task[]).filter(task => {
          const complexityFilter = !this.selectedComplexity || task.complexity.toString() === this.selectedComplexity;
          const languageFilter = !this.selectedLanguage || task.language === this.selectedLanguage;
          const tagFilter = !this.selectedTag || task.tag === this.selectedTag;
          
          return complexityFilter && languageFilter && tagFilter;
        });
      },
      selectedTask() {
      return this.tasks.find(task => task.id === this.selectedTaskId);
    },
    },


    methods: {
      filterTasks() {
        
      },
      selectTask(taskId: string) {
      this.selectedTaskId = taskId as string;
      this.$router.push(`/task/${taskId}`)
    },
    },
  };
  </script>
  <style>
.filtr{
  display: flex;
}
  </style>

/* <!-- <template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
 --> */