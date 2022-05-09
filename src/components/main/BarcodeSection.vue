<template>
  <section class="barcode-section sub-section">
      <article class="barcode-image">
        <div class="barcode-box">
          <barcode-item v-for="(image, index) in images" :key="image.src" v-bind:image="image.src" v-bind:index="index"></barcode-item>
        </div>
      </article>
      <div class="address-box">
        <p class="address-text">
          Busan,<br/>
          Sasang-gu,<br/>
          Sasang-ro, 100-1<br/>
          <span class="map-link">->See the map</span>
        </p>
      </div>
    </section>
</template>
<script>
import BarcodeItem from './BarcodeItem.vue';
export default {
  name: "BarcodeSection",
  components: {
    BarcodeItem
  },
  props: {
    images: Array
  },
  data: function(){}
}
</script>
<style scoped>
  .barcode-section {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .barcode-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .barcode-box {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    width: 30%;
    height: 30%;
  }

  .address-box {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }
  .address-text {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 2rem;
  }
  .address-text .map-link {
    color: #aaa;
  }
</style>