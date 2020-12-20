<template>
  <div>
    <Preloader v-if="film === false" class="preloader"></Preloader>
    <template v-else>
      <PageHeader>
        <router-link class="navLink" :to="{name: 'root'}">Назад к списку</router-link>
      </PageHeader>
      <div class="film-wrapper">
        <p class="error-message" v-if="!film">К сожалению, по вашему запросу ничего не найдено...</p>
        <FilmItem v-else :film-data="film"></FilmItem>
      </div>
    </template>
  </div>
</template>

<script>
import FilmItem from '@/components/FilmList/FilmItem/FilmItem';
import Preloader from '@/components/Elements/Preloader/Preloader';
import PageHeader from '@/components/PageHeader/PageHeader';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Film',
  components: {
    FilmItem,
    Preloader,
    PageHeader
  },
  computed: {
    ...mapGetters('films', {
      film: 'film',
      films: 'films'
    }),
    filmId() {
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapActions('films', {
      fetchFilm: 'fetchFilm',
      resetFilm: 'resetFilm',
      setFilm: 'setFilm'
    })
  },
  created() {
    if (this.films.length !== 0) {
      this.setFilm(this.filmId);
    }

    this.fetchFilm(this.filmId);
  },
  beforeDestroy() {
    this.resetFilm();
  }
};
</script>

<style scoped>
.film-wrapper {
  padding: 40px 0;
}

.preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.navLink {
  position: relative;
  padding-left: 30px;
  font-size: 20px;
  color: rgba(255, 82, 82, 0.98);
}

.navLink::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  bottom: 0;
  width: 12px;
  height: 3px;
  margin: auto 0;
  background-color: rgba(255, 82, 82, 0.98);
  transform: rotate(45deg);
  transform-origin: 0 center;
}

.navLink::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 12px;
  height: 3px;
  margin: auto 0;
  background-color: rgba(255, 82, 82, 0.98);
  transform: rotate(-45deg);
  transform-origin: 0 center;
}

.error-message {
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-weight: 500;
}
</style>
