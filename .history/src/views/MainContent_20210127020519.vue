<template>
  <section class="main-content">
    <div class="content-wrapper">
      <div class="first-row">&nbsp;</div>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'main-content',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.main-content {
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  

  .content-wrapper {
    background-color: gray;
    width: 90vw;
    height: 90vh;

    .first-row {

    }
  }
}
</style>
