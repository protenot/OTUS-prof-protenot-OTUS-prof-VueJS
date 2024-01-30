<template>
  <div>
      <h1>Список задач</h1>
      <div>
          <label for="complexityFilter">Фильтр по сложности</label>
          <select v-model = "selectedComplexity" @change = "filterTasks">
              <option value="">Все сложности</option>
              <option value="5">Легкие</option>
              <option value="15">Средние</option>
              <option value="20">Сложные</option>
          </select>
      </div>
  
      <div>
        <label for="languageFilter">Фильтр по языку:</label>
        <select v-model="selectedLanguage" @change="filterTasks">
          <option value="">Все языки</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
        </select>
      </div>
  
      <div>
        <label for="tagFilter">Фильтр по тегу:</label>
        <select v-model="selectedTag" @change="filterTasks">
          <option value="">Все теги</option>
          <option value="Aлгоритмы">Aлгоритмы</option>
          <option value="Cтруктуры данных">Cтруктуры данных</option>
          <option value="Динамическое программирование">Динамическое программирование</option>
        </select>
      </div>
      <ul>
        <li v-for="task in filteredTasks" :key="task.id">
          <h3>{{ task.description }}</h3>
          <p>Сложность: {{ task.complexity }}</p>
          <p>Язык: {{ task.language }}</p>
          <p>Тег: {{ task.tag }}</p>
        </li>
      </ul>
  
  </div>
  
  </template>
  <script lang="ts">
  import { type Task } from '@/models/task.model';
  export default {
    data() {
      return {
        selectedComplexity: "",
        selectedLanguage: "",
        selectedTag: "",
      };
    },
    props: {
      tasks: Array,
    },
    computed: {
      filteredTasks() {
      
        return (this.tasks as Task[]).filter(task => {
          const complexityFilter = !this.selectedComplexity || task.complexity.toString() === this.selectedComplexity;
          const languageFilter = !this.selectedLanguage || task.language === this.selectedLanguage;
          const tagFilter = !this.selectedTag || task.tag === this.selectedTag;
          
          return complexityFilter && languageFilter && tagFilter;
        });
      },
    },
    methods: {
      filterTasks() {
        // Вызовите этот метод при изменении фильтров
      },
    },
  };
  </script>

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