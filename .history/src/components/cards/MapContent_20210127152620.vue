<template>
  <section class="map">
    <div class="card-title">
      <p class="title">MAP</p>
      <p class="description">description</p>
    </div>
    <div class="map-control">
      <button><span class="material-icons">add</span></button>
      <button><span class="material-icons">remove</span></button>
      <button class="fullscreen">
        <span v-on:click="expandMap()" class="material-icons">fullscreen</span>
      </button>
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
      expandMap: function() {
        
      }
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
      padding: 0;
      border: none;
      background-color: #2a2a2a;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(207, 207, 207);

      span {
        font-size: 28px;
      }
    }

    .fullscreen {
      margin-top: 10px;
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
