<template lang="html">

  <section class="map">
              <div class="boat-icons">
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
    name: 'map',
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
      .map {
        position: relative;

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
