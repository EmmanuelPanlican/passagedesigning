<template>
  <section class="approve">
    <div class="card-title">
      <p class="title">VESSEL TYPES PER DAY</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="approval-content">
      <div class="approval-texts">
        <ul>
          <li class="status" v-for="(stats, i) in approvalStats" :key="i">
            <div class="status-title-parent">
              <div class="bullet">&nbsp;</div>
              <p class="status-title">{{ stats.status }}</p>
            </div>
            <p class="status-percent">{{ stats.percent }}%</p>
          </li>
        </ul>
      </div>
      <div class="line-progress">
        <div slot="content">
          <progress-bar
            class="line"
            ref="percentLine"
            type="line"
            :options="linePercentOptions"
          ></progress-bar>
        </div>
        <div slot="footer">percent</div>
      </div>
    </div>
  </section>
</template>

<script >
export default {
  name: "approveContent",
  components: {},
  props: [],
  mounted() {
    this.$refs.line.animate(0.5);
  },
  data() {
    return {
      linePercentOptions: OPTIONS.LINE_PERCENT,
      progress: 0,
      options: {
        color: "#007AFF",
        strokeWidth: 5,
        svgStyle: {
          display: "block",

          // Important: make sure that your container has same
          // aspect ratio as the SVG canvas. See SVG canvas sizes above.
          width: "20%",
        },
      },
      approvalStats: [
        {
          status: "APPROVED",
          percent: 0,
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
  methods: {
    init() {
      let percentLine = this.$refs.percentLine;
      loopAnimate(percentLine);
    },
  },
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
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .approval-texts {
      width: 50%;
      margin-top: 50px;

      ul {
        .status {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
          padding: 0 20px;

          .status-title-parent {
            display: flex;

            .bullet {
              background-color: #5299e1;
              width: 20px;
              height: 20px;
              border-radius: 50px;
              margin-right: 10px;
            }
            .status-title {
              margin: 0 30px 0 0;
            }
          }
          .status-percent {
            margin: 0;
            font-weight: bold;
          }
        }
      }
    }
    .line-progress {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
