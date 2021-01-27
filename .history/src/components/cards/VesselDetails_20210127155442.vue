<template>

  <section class="vessel-details">
    <div class="main-modal">
      &nbsp;
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'vessel-details',
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
  .vessel-details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    .main-modal {
      background-color: gray;
      width: 100vw;
      height: 100vh;
    }
  }
</style>
