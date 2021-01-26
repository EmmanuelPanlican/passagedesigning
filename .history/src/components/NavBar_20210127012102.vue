<template>
  <div class="navbar">
    <img
      id="logo"
      src="https://res.cloudinary.com/iboom/image/upload/v1607394196/passage_mys9h6.png"
    />

    <div>
      <p v-for="(item, i) in navItems" :key="i">{{ item }}</p>
    </div>
    <div>
     <MenuIcon>search</MenuIcon>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  components: {
    MenuIcon,
  },
  name: "NavBar",
  props: {
    msg: String,
  },
  data() {
    return {
      navItems: ["DASHBOARD", "REPORTS", "MAILBOX", "LOREM", "IPSUM"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: #232323;
  width: 100vw;
  height: 80px;
  position: absolute;
  top: 0;
  display: flex;

  #logo {
    width: 150px;
  }

  div {
    display: flex;
  }
}
</style>
