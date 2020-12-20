<template>
  <div id="app">
    <Header></Header>
    <main class="main">
      <div class="container">
        <section class="content">
          <router-view></router-view>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.content {
  padding: 40px 0;
}
</style>
