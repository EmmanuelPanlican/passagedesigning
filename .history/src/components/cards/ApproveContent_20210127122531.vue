<template>
  <section class="approve">
    <div class="card-title">
      <p class="title">VESSEL TYPES PER DAY</p>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <div class="approval-content">
      <ul>
        <li class="status" v-for="(stats, i) in approvalStats" :key="i">
          <p>{{stats.status}}</p>
          <p>{{stats.percent}}%</p>
        </li>
      </ul>
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
    top: 0;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .status {
      display: flex;
    }
  }
}
</style>
