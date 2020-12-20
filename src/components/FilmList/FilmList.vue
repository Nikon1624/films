<template>
  <ul class="films">
    <li class="item" v-for="film in films" :key="film.id">
      <FilmItem class="film" :film-data="film"></FilmItem>
    </li>
  </ul>
</template>

<script>
import FilmItem from '@/components/FilmList/FilmItem/FilmItem';

export default {
  name: 'FilmList',
  props: {
    films: {
      type: Array,
      required: true
    }
  },
  components: {
    FilmItem
  }
};
</script>

<style scoped>
.films {
  margin: 0;
  padding: 40px 0;
  list-style: none;
}

.item:not(:last-child) {
  margin-bottom: 25px;
}

.film {
  transition: 0.5s;
}

.film:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 7px rgba(0, 0, 0, 0.28);
}
</style>
