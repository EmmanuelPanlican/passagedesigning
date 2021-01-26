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
      <div class="first-row">
        <div class="cards">test</div>
        <div class="cards">test</div>
        <div class="cards">test</div>
      </div>
      <div class="second-row">&nbsp;</div>
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
        font-weight: 400;
      }
      p {
        margin: 5px 0;
        font-weight: 100;
      }
    }

    .print {
      display: inherit;
      justify-content: center;
      align-items: center;
    }
  }
  .content-wrapper {
    width: 90vw;
    height: 80vh;

    .first-row {
      width: 100%;
      height: 30%;
      background-color: red;
      display: flex;

      .cards {
        background-color: gray;
      }
    }
    .second-row {
      width: 100%;
      height: 70%;
      background-color: blue;
    }
  }
}
</style>
