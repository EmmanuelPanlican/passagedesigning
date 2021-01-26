<template>
  <div class="navbar">
    <img id="logo" src="https://res.cloudinary.com/iboom/image/upload/v1607394196/passage_mys9h6.png">

    <div>
      <p v-for="">test</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar {
    background-color: #232323;
    width: 100vw;
    height: 80px;
    position: absolute;
    top: 0;

    #logo {
      width: 150px;
    }
  }
</style>
