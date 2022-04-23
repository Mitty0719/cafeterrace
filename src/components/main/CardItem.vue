<template>
  <div class="card"></div>
</template>
<script>
export default {
  name: "CardItem",
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
      const card = document.querySelectorAll('.card')[this.index];
      card.style.backgroundImage = `url(${this.image})`;
    }
  }
}
</script>
<style scoped>
  .card {
    background: #888;
    background-size: cover cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .card:nth-child(3) {
    grid-column: 4 / 5;
  }
  .card:nth-child(4) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  .card:nth-child(5) {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }
  .card:nth-child(6) {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
  }
  .card:nth-child(7) {
    grid-row: 2 / 3;
    grid-column: 5 / 6;
  }
</style>