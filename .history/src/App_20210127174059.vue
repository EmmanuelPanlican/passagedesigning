<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main-content></main-content>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MainContent from "./views/MainContent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainContent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(204, 204, 204);
  font-family: "Montserrat", sans-serif;
}
body {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap");
  font-family: "Montserrat", sans-serif;
  margin: 0;
  background-color: #cacaca;
  overflow-x: hidden;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(153, 153, 153);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b1b1b1;
}
</style>
