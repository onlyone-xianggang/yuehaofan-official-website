<script setup>
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
