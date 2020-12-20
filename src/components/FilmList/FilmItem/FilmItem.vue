<template>
  <div class="film">
    <div class="preview">
      <img :src="filmData.poster" alt="film poster">
    </div>
    <div class="info">
      <div v-if="filmData.collapse.duration" class="duration">
        {{ filmData.collapse.duration[0] }}
      </div>
      <router-link :to="{name: 'film', params: {id: filmData.id}}" class="title" tag="h3">
        {{ filmData.title }}
      </router-link>
      <ul class="meta">
        <li class="meta__item">{{ `${filmData.year}, ${filmData.genres && filmData.genres.join(', ')}` }}</li>
        <li class="meta__item">Режиссёр: {{ filmData.directors && filmData.directors.join(', ') }}</li>
        <li class="meta__item">
          Актёры: <span class="meta__actors">{{ filmData.actors && filmData.actors.join(', ') }}</span>
        </li>
      </ul>
      <p class="description">{{ filmData.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmItem',
  props: {
    filmData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.film {
  display: flex;
}

.preview {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  background-color: #C4C4C4;
}

.info {
  position: relative;
  flex-grow: 1;
  padding: 30px 25px;
  background-color: #4D4747;
}

.title {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  cursor: pointer;
}

.meta {
  margin: 0 0 15px;
  padding: 0;
  list-style: none;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #988F8F;
}

.meta__item:not(:last-child) {
  margin-bottom: 8px;
}

.meta__actors {
  color: #E5E5E5;
  font-weight: 400;
  text-transform: none;
}

.description {
  margin: 0;
  padding: 0;
}

.duration {
  position: absolute;
  top: 32px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  padding: 9px 18px;
  font-size: 12px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  background-color: #C4C4C4;
}

.duration::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  width: 10px;
  height: 40px;
  background-color: #4D4747;
  transform: rotate(13deg);
}
</style>
