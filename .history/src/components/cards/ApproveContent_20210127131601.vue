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
      <div class="circle-progress">
        <progress-bar
          type="circle"
          ref="line"
          :options="options"
        ></progress-bar>
      </div>
    </div>
  </section>
</template>

<script >
export default {
  name: "approveContent",
  props: [],
  mounted() {
    this.$refs.line.animate(1.0);
  },
  data() {
    return {
      options: {
        color: "#007AFF",
        strokeWidth: 5,
        style: {
          // Text color.
          // Default: same as stroke color (options.color)
          color: "#f00",
          position: "absolute",
          left: "50%",
          top: "50%",
          padding: 0,
          margin: 0,
          // You can specify styles which will be browser prefixed
          transform: {
            prefix: true,
            value: "translate(-50%, -50%)",
          },
        }
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
    .circle-progress {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
