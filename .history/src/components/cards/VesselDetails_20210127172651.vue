<template>
  <section class="">
    <div class="vessel-details">
      <div class="main-modal">
        <div class="title-section">
          <h1>Royal Caribbean</h1>
          <p>papua new guinea</p>
        </div>
        <div class="image-section">
          <img
            src="https://res.cloudinary.com/iboom/image/upload/v1611736945/pexels-photo-813011_v6p7a4.jpg"
            alt=""
          />
        </div>
        <div class="important-section">
          <p class="a-status">approval status: <span>no submitted</span></p>
          <p class="vessel-type">vessel type: <span>cruise ship</span></p>
        </div>
        <div class="other-section">
          <div class="list-parent">
            <p v-for="(item, i) in otherDetails" :key="i" class="vessel-type">
              {{ item.form + ": " }}<span>{{ item.value }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "vessel-details",
  props: [],
  mounted() {},
  data() {
    return {
      otherDetails: [
        {
          form: "MMSI",
          value: "354880000",
        },
        {
          form: "VESSEL_NAME",
          value: "KOHINOOR",
        },
        {
          form: "VESSEL_TYPE",
          value: "Cargo",
        },
        {
          form: "LENGTH",
          value: "177m",
        },
        {
          form: "FLAG_COUNTRY",
          value: "Panama",
        },
        {
          form: "DESTINATION",
          value: "AU GLT",
        },
        {
          form: "DRAUGHT",
          value: "6.2",
        },
        {
          form: "LONGITUDE",
          value: "141.19696333333334",
        },
        {
          form: "SOG",
          value: "12.1",
        },
        {
          form: "ROT",
          value: "0",
        },
        {
          form: "NAV_STATUS",
          value: "Under Way Using Engine",
        },
        {
          form: "SOURCE",
          value: "S-AIS",
        },
        {
          form: "TS_STATIC_UTC",
          value: "20210123094000",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.vessel-details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.11);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  .main-modal {
    background-color: rgba(14, 14, 14, 0.945);
    width: 490px;
    height: 80vh;

    .title-section {
      margin: 10px 0 10px 20px;

      h1 {
        font-size: 34px;
        margin: 0px;
      }
      p {
        margin-top: 10px;
      }
    }

    .image-section {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .important-section {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .a-status {
        margin: 20px 10px 20px 20px;
        font-size: 12px;

        span {
          background-color: #b84040;
          padding: 5px;
        }
      }
      .vessel-type {
        margin: 20px;
        font-size: 12px;

        span {
          border: 1px solid;
          padding: 5px;
        }
      }
    }
    .other-section {
      background-color: rgba(255, 255, 255, 0.158);
      overflow-y: scroll;
    }
  }
}
</style>
