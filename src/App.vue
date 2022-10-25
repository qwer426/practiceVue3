<script setup>
  import Navbar from './components/Navbar.vue'
  import Banner from './components/Banner.vue'
  import Row  from './components/Row.vue'
  import requests from './request'
</script>

<template>
  <header>
    <Navbar />
    <Banner />
    <div v-for="movie of requests" :key="movie.name">
      <Row :title="movie.title" :fetchUrl="movie.fetchUrl"  />
    </div>
  </header>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
#app {
    background-color: #111;
    width: 100%;
}
header,
section {
    margin-bottom: 20px;
}
.container {
    width: 100%;
    margin: auto;
    box-sizing: border-box;
}
</style>
