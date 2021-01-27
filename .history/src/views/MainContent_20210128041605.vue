<template>
  <section class="main-content">
    <div class="head">
      <div class="page-title">
        <h1>OVERVIEW</h1>
        <p>date</p>
      </div>
      <div class="print">
        <div class="print-button">
          <p>print</p>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="first-row">
        <div class="cards map">
          <map-content></map-content>
        </div>
        <div class="cards">
          <approve-content></approve-content>
        </div>
        <div class="cards">
          <detected-vessels></detected-vessels>
        </div>
      </div>
      <div class="second-row">
        <div class="cards"><vessel-type-content></vessel-type-content></div>
        <div class="cards" style="overflow-y: scroll">
          <list-content />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MapContent from "../components/cards/MapContent.vue";
import ApproveContent from "../components/cards/ApproveContent.vue";
import ListContent from "../components/cards/ListContent.vue";
import VesselTypeContent from "../components/cards/VesselType.vue";
import DetectedVessels from "../components/cards/DetectedVessels.vue";

export default {
  name: "main-content",
  components: {
    MapContent,
    ApproveContent,
    ListContent,
    VesselTypeContent,
    DetectedVessels,
  },
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.main-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d1d1d1;

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

      .print-button {
        background-color: #5299e1;
        display: flex;
        justify-content: center;
        width: 100px;
        color: white;
        font-size: 20px;
        margin: 0;

        p {
          margin: 0;
        }
      }
    }
  }
  .content-wrapper {
    width: 90vw;
    height: 80vh;

    .cards {
      background-color: #eeeeee;
      margin: 10px;
      box-shadow: 0 5px 5px rgba(103, 103, 119, 0.432);
    }
    .overflow {
      overflow-y: hidden;
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
