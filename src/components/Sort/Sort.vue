<template>
  <div>
    <h2 class="title">Фильмы</h2>
    <ul class="filters">
      <li v-for="filter in filters" :key="filter.id" class="filters__item">
        <Checkbox
            @input-checked="handleFilterChange"
            :id="filter.id"
            :value="filter.value"
            :is-checked="filter.checked"
        ></Checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from '@/components/Elements/Checkbox/Checkbox';

export default {
  name: 'Sort',
  components: {
    Checkbox
  },
  data: () => ({
    filters: [
      {
        id: 'title',
        value: 'Отсортировать по названию',
        checked: false
      },
      {
        id: 'year',
        value: 'Отсортировать по году',
        checked: false
      }
    ]
  }),
  methods: {
    handleFilterChange({id, checked}) {
      this.filters.forEach((filter) => {
        if (filter.id !== id) {
          filter.checked = false;
        } else {
          filter.checked = checked;
        }
      });

      this.$emit('sort-change', {id, checked});
    }
  }
};
</script>

<style scoped>
.title {
  margin: 0 0 16px;
  padding: 0;
  font-size: 32px;
  font-weight: 500;
}

.filters {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.filters__item:not(:last-child) {
  margin-right: 30px;
}
</style>
