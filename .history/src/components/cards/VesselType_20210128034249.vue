<template>
  <section class="vessel-type">
    <div class="dummy">&nbsp;</div>
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
        color: "black",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        text: {
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: "gray",
            padding: 0,
            margin: 0,
            position: "relative",
            top: "-25"
            transform: null,
          },
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#5299E1", width: 5 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);
          var value = Math.round(circle.value() * 100) + "%";
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value);
          }
        },
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.vessel-type {
  position: relative;

  .card-title {
    position: absolute;
    margin: 10px 0 0 10px;
    z-index: 5;
    top: 0 !important;
    left: 0 !important;

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
      width: 20%;
      height: 20%;
      margin-top: 5em;
    }
  }
}
</style>
