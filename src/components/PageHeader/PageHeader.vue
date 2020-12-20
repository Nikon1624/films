<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
};
</script>

<style scoped>
.header {
  padding-bottom: 16px;
  border-bottom: 1px solid #C4C4C4;
}
</style>
