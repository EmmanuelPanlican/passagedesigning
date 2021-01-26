<template>
  <section class="main-content">
    <div class="head">
      <div class="page-title">
        <h1>OVERVIEW</h1>
        <p>date</p>
      </div>
      <div class="print">
        <button>print</button>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="first-row">&nbsp;</div>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'main-content',
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
.main-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .head {
    margin-top: 60px;
    display: flex;
    width: 90vw;
    height: 80px;
    justify-content: space-between;

    .page-title {
      h1 {
        margin: 0;
      }
    }

    .print {
      display: inherit;
      justify-content: center;
      align-items: center;
    }
  }
  .content-wrapper {
    background-color: gray;
    width: 90vw;
    height: 80vh;

    .first-row {

    }
  }
}
</style>
