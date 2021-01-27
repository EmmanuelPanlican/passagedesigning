<template>
  <section class="approve">
    <div class="card-title">
      <p class="title">APPROVAL STATUS</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="approval-content">
      <div v-for="(items, i) in approvalStats" :key="i" class="line-progress">
        <div class="value-name">{{items.status}}</div>
        <progress-bar type="line" ref="line" :options="approveOptions"></progress-bar>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "approveContent",
  props: [],
  mounted() {
    this.$refs.line.animate(0.5);
  },
  data() {
    return {
      
      approveOptions: {
        strokeWidth: 4,
        easing: "easeInOut",
        color: "#5299E1",
        trailColor: "gray",
        trailWidth: 3,
        svgStyle: { width: "80%", height: "100%" },
        text: {
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: "gray",
            fontWeight: "bold",
            position: "relative",
            left: "-50px",
            top: "-18px",
            padding: 0,
            margin: 0,
            transform: null,
          },
          autoStyleContainer: false,
        },
        from: { color: "#FFEA82" },
        to: { color: "#ED6A5A" },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + " %");
        },
      },
      approvalStats: [
        {
          status: "APPROVED",
        },
        {
          status: "SUBMITTED",
          percent: 0,
        },
        {
          status: "NO SUBMITTED",
          percent: 0,
        },
        {
          status: "DENIED",
          percent: 0,
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.approve {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;

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

  .approval-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .line-progress {
      position: relative;
      display: flex;
      width: 90%;
      height: 5%;
      justify-content:space-between;
      margin: 10px 0 10px 50px;

      .value-name {
        font-size: 17px;
        font-weight: bolder;
        text-transform: uppercase;
      }
    }
  }
}
</style>
