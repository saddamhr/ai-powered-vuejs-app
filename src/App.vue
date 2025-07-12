<script setup>
import SmartSearch from './components/SmartSearch.vue'

</script>

<template>
  <div class="vertical-center">
    <div class="title">AI Powered Vue.js App</div>
    <SmartSearch />
  </div>
</template>

<style scoped>
.vertical-center {
  /* min-height: 100vh; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-background); */
}
.title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--vt-c-indigo);
  /* margin-bottom: 2.5rem; */
  letter-spacing: 0.01em;
  text-align: center;
}
</style>
