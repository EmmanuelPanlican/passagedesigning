<template>
  <section class="">
    <div class="vessel-details">
      <div class="main-modal">
        <div class="title-section">
          <h1>Royal Caribbean</h1>
        </div>
        <div class="image-section"></div>
        <div class="important-section"></div>
        <div class="other-section"></div>
      </div>
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
  background-color: rgba(0, 0, 0, 0.11);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-modal {
    background-color: rgba(14, 14, 14, 0.945);
    width: 30vw;
    height: 80vh;

    .title-section {
      text-transform: uppercase;

      h1 {
        font-size: 34px;
        margin: 10px 0 10px 20px;
      }
    }
  }
}
</style>
