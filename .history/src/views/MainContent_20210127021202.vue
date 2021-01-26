<template>
  <section class="main-content">
    <div class="head">
      <h1>OVERVIEW</h1>
      <p>date</p>
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    background-color: gray;
    width: 90vw;
    height: 80vh;

    .first-row {

    }
  }
}
</style>
