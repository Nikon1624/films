<template>
  <header class="header">
    <router-link class="logo" :to="{name: 'root'}">#MOVIENOW</router-link>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    padding: 36px 0 14px;
    color: #000;
    background-color: rgba(250, 40, 40, 0.98);
    box-shadow: 0 8px 7px rgba(0, 0, 0, 0.28);
  }

  .logo {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 10px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    outline: none;
  }
</style>
