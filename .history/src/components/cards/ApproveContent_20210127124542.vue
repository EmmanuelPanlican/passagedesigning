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
            <div class="bullet">&nbsp;</div>
            <p class="status-title">{{ stats.status }}</p>
            <p class="status-percent">{{ stats.percent }}%</p>
          </li>
        </ul>
      </div>
      <div class="circle-progress">
        &nbsp;
      </div>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'approveContent',
    props: [],
    mounted() {

    },
    data() {
      return {
        approvalStats: [
          {
            status: "APPROVED",
            percent: 0
          },
          {
            status: "SUBMITTED",
            percent: 0
          },
          {
            status: "NO SUBMITTED",
            percent: 0
          },
          {
            status: "DENIED",
            percent: 0
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
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
          margin: 20px 0;
          padding: 0 20px;

          .bullet {
            background-color: red;
            width: 20px;
          }
          .status-title {
            margin: 0 30px 0 0;
          }
          .status-percent {
            margin: 0;
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
