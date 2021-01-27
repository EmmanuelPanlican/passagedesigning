<template>
  <section class="vessel-type">
    <div class="card-title">
      <p class="title">TYPE OF VESSEL PER UPDATE</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="progress-circle">
      <div>
        
      </div>
      <progress-bar
        class="circle"
        ref="multiplePropertiesCircle"
        type="circle"
        :options="circleMultiplePropertiesOptions"
      ></progress-bar>
    </div>
  </section>
</template>

<script>
export default {
  name: "vessel-type",
  props: [],
  mounted() {
    this.$refs.multiplePropertiesCircle.animate(1)
  },
  data() {
    return {
      circleMultiplePropertiesOptions: {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#333", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);
          var value = Math.round(circle.value() * 100);
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
}
</style>
