<template>
  <section class="vessel-type-parent">
    <div class="dummy">
      &nbsp;
    </div>
    <div class="card-title">
      <p class="title">TYPE OF VESSEL PER UPDATE</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="progress-circle">
      <div class="progressbar-container">
        <progress-bar
          class="circle"
          ref="basicCircle"
          type="circle"
          :options="circleBasicOptions"
        ></progress-bar>
      </div>
    </div>
    <div class="vessel-types">
      <p class="vessel-type">vesselname</p>
      <p class="percent">percent</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "vessel-type",
  props: [],
  mounted() {
    this.$refs.basicCircle.animate(.8);
  },
  data() {
    return {
      circleBasicOptions: {
        strokeWidth: 6,
        easing: "easeInOut",
        color: "#5299E1",
        trailColor: "gray",
        trailWidth: 5,
        svgStyle: null,
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.vessel-type-parent {
  position: relative;

  .card-title {
    position: absolute;
    margin: 10px 0 0 10px;
    z-index: 5;
    top: 0!important;
    left: 0!important;

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
  .progress-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .progressbar-container {
      width: 50%;
      height: 50%;
      margin-top: 5em;
    }
  }
  .vessel-types {
    display: flex;
    background-color: red;
    justify-content: space-between;
    padding: 0 50px;
    text-transform: uppercase;
  }
}
</style>
