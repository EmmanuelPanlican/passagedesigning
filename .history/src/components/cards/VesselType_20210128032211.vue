<template>
  <section class="vessel-type">
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
  </section>
</template>

<script>
export default {
  name: "vessel-type",
  props: [],
  mounted() {
    this.$refs.basicCircle.animate(1);
  },
  data() {
    return {
      circleBasicOptions: {
        strokeWidth: 6,
        easing: "easeInOut",
        color: "#5299E1",
        trailColor: "#eee",
        trailWidth: 1,
        svgStyle: null,
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.vessel-type {
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
  .progress-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .progressbar-container{
      width: 50%;
    }
  }
}
</style>
