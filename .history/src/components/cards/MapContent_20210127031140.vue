<template>
  <section class="map">
    <div v-for="(item,i) in boatIconPosition" :style="{top: item}" :key="i" class="boat-icons">
      <span class="material-icons"> sailing </span>
    </div>
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
        boatIconPosition: ["25px", "50px", "70px", "15px", "30px", "75px", "10px", "1px"]
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

  .boat-icons {
    color: #7B93AB;
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
