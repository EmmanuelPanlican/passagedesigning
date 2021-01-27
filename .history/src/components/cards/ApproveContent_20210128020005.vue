<template>
  <section class="approve">
    <div class="card-title">
      <p class="title">APPROVAL STATUS</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="approval-content">
      <div class="line-progress">
        <div>
          <div class="bullet">&nbsp;</div>
          <div class="value-name">APPROVED</div>
        </div>

        <progress-bar
          type="line"
          ref="line1"
          :options="approveOptions"
        ></progress-bar>
      </div>
      <div class="line-progress">
        <div class="value-name">SUBMITTED</div>
        <progress-bar
          type="line"
          ref="line2"
          :options="approveOptions"
        ></progress-bar>
      </div>
      <div class="line-progress">
        <div class="value-name">NO SUBMITTED</div>
        <progress-bar
          type="line"
          ref="line3"
          :options="approveOptions"
        ></progress-bar>
      </div>
      <div class="line-progress">
        <div class="value-name">DENIED</div>
        <progress-bar
          type="line"
          ref="line4"
          :options="approveOptions"
        ></progress-bar>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "approveContent",
  props: [],
  mounted() {
    this.$refs.line1.animate(0.25);
    this.$refs.line2.animate(0.5);
    this.$refs.line3.animate(0.15);
    this.$refs.line4.animate(0.1);
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
    padding-top: 25px;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
      .bullet {
        background-color: red;
      }
    .line-progress {
      position: relative;
      display: flex;
      width: 90%;
      height: 5%;
      justify-content: space-between;
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
