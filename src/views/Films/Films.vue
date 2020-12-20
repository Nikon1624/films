<template>
  <div class="films-wrapper">
    <Preloader class="preloader" v-if="!filmsReady"></Preloader>
    <template v-else>
      <PageHeader>
        <Sort @sort-change="handleSortChange"></Sort>
      </PageHeader>
      <FilmList :films="films"></FilmList>
    </template>
  </div>
</template>

<script>
import Preloader from '@/components/Elements/Preloader/Preloader';
import PageHeader from '@/components/PageHeader/PageHeader';
import Sort from '@/components/Sort/Sort';
import FilmList from '@/components/FilmList/FilmList';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Films',
  components: {
    PageHeader,
    Sort,
    Preloader,
    FilmList
  },
  data: () => ({
    filmsReady: false
  }),
  computed: {
    ...mapGetters('films', {
      films: 'films'
    }),
  },
  methods: {
    ...mapActions('films', {
      fetchFilms: 'fetchFilms',
      sortFilmsByTitle: 'sortFilmsByTitle',
      sortFilmsByYear: 'sortFilmsByYear',
      setDefaultSort: 'setDefaultSort'
    }),
    handleSortChange({id, checked}) {
      if (!checked) {
        this.setDefaultSort();
      } else {
        switch (id) {
          case 'title':
            this.sortFilmsByTitle();
            break;
          case 'year':
            this.sortFilmsByYear();
            break;
          default:
            break;
        }
      }
    }
  },
  async created() {
    if (this.films.length === 0) {
      await this.fetchFilms();
    }

    this.filmsReady = true;
  }
};
</script>

<style scoped>
.preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
