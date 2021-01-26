<template>
  <div class="navbar">
    &nbsp;
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
  }
</style>
