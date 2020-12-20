<template>
  <div class="preloader">
    <img src="@/assets/img/Loader.svg" alt="preloader" class="preloader--first">
  </div>
</template>

<script>
export default {
name: "Preloader"
}
</script>

<style scoped>
.preloader {
  width: 110px;
  height: 110px;
  animation-name: preloader;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: center center;
}

@keyframes preloader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
