<template>
  <section class="">
    <div class="vessel-details">
      <div class="main-modal">
        <div class="title-section">
          <h1>Royal Caribbean</h1>
          <p>papua new guinea</p>
        </div>
        <div class="image-section">
          <img src="https://res.cloudinary.com/iboom/image/upload/v1611736945/pexels-photo-813011_v6p7a4.jpg" alt="">
        </div>
        <div class="important-section">
          <p>approval status: <span>submitted</span></p>
        </div>
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
  text-transform: uppercase;

  .main-modal {
    background-color: rgba(14, 14, 14, 0.945);
    width: 30vw;
    height: 80vh;

    .title-section {
      margin: 10px 0 10px 20px;

      h1 {
        font-size: 34px;
        margin: 0px;
      }
      p {
        margin-top: 10px;
      }
    }

    .image-section {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .important-section {
      p {
        margin-right: 20px;
      }
    }
  }
}
</style>
