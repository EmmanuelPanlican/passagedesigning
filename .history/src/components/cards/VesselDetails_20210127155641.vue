<template>
  <section class="">
    <div class="vessel-details">
      <div class="main-modal">&nbsp;</div>
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
  background-color: black;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-modal {
    background-color: gray;
    width: 30vw;
    height: 80vh;
  }
}
</style>
