<template>
  <div class="barcode"></div>
</template>
<script>
export default {
  name: "BarcodeItem",
  props: {
    image: String,
    index: Number
  },
  data: function(){
    return {}
  },
  mounted: function(){
    this.setBackground();
  },
  methods: {
    setBackground(){
      const barcode = document.querySelectorAll('.barcode')[this.index];
      barcode.style.backgroundImage = `url(${this.image})`;
    }
  }
}
</script>
<style scoped>
  .barcode {
    flex: 1 1 0;
    background: #888;
  }
</style>