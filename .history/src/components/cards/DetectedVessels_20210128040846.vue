<template >
  <section class="detected-vessels">
    <div class="card-title">
      <p class="title">DETECTED VESSELS AT GIVEN AREA</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="detected-vessels-content">
      <h1>32 VESSELS</h1>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'detected-vessels',
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
.detected-vessels {
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
  .detected-vessels-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
