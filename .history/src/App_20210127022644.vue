<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import MainContent from "./views/MainContent.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    MainContent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(204, 204, 204);
}
body {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  background-color: #303134;
  overflow-x: hidden;
}
</style>
