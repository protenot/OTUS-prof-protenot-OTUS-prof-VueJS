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
<script>
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
      return this.tasks.filter(task => {
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