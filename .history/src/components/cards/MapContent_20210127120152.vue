<template>
  <section class="map">
    <div class="card-title">
      <p class="title">title</p>
      <p class="description">description</p>
    </div>
    <div class="map-control">
      <button></button>
      <button></button>
      <button class="fullscreen"></button>
    </div>
    <!-- <div v-for="(item,i) in boatIconPosition" :style="{top: item}" :key="i" class="boat-icons">
      <span class="material-icons"> sailing </span>
    </div> -->
    <div class="image-wrapper">
      <img
        src="https://res.cloudinary.com/iboom/image/upload/v1611668512/yao_lxnekz.png"
      />
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'mapContent',
    props: [],
    mounted() {

    },
    data() {
      return {
        boatIconPosition: ["25%", "50%", "70%", "15%", "30%", "75%", "10%", "1%"]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 100%;
  position: relative;

  .card-title {
    position: absolute;
    margin: 10px 0 0 10px;

    .title {
      font-size: 22px;
      text-transform: uppercase;
      margin: 0;
    }

    .description {
      font-size: 12px;
      margin: 1px 0;
    }
  }

  .map-control {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 10px;
    display: flex;
    flex-direction: column;
    height: 100px;

    button {
      width: 28px;
      height: 28px;
      border: none;
      background-color: #2a2a2a;
    }

    .fullscreen {
      margin: 5px 0;
    }
  }

  .boat-icons {
    color: #7b93ab;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.384);
    position: absolute;
    cursor: pointer;
    z-index: 3;
  }

  .image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }
}
</style>
