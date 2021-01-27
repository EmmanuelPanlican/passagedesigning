<template>
  <section class="vessel-type">
    <div class="card-title">
      <p class="title">TYPE OF VESSEL PER UPDATE</p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'vessel-type',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
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
