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
  margin-top: 60px;
}
body {
  margin: 0;
  background-color: #303134;
  overflow-x: hidden;
}
</style>
