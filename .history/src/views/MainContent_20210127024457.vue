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
        <div class="cards">
          <div class="image-wrapper">
            <img
              src="https://res.cloudinary.com/iboom/image/upload/v1611668512/yao_lxnekz.png"
            />
          </div>
        </div>
        <div class="cards">test</div>
        <div class="cards">test</div>
      </div>
      <div class="second-row">
        <div class="cards">test</div>
        <div class="cards">test</div>
      </div>
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
    width: 89vw;
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

    .cards {
      background-color: gray;
      margin: 10px;
      box-shadow: 0 10px 10px rgba(57, 55, 82, 0.151);
    }
    .first-row {
      width: 100%;
      height: 35%;
      display: flex;

      .cards {
        width: 37.5%;
      }
      .cards:first-child {
        width: 25%;
      }
    }
    .second-row {
      width: 100%;
      height: 65%;
      display: flex;

      .cards:first-child {
        width: 25%;
      }
      .cards:last-child {
        width: 75%;
      }
    }
  }
}
</style>
