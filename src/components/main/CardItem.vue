<template>
  <div class="card">
    <h5 class="card-text">
      {{text}}
    </h5>
  </div>
</template>
<script>
export default {
  name: "CardItem",
  props: {
    image: String,
    index: Number,
    text: String,
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
    position: relative;
    border: 1px solid #000;
    box-shadow: 3px 3px 3px #ccc;
    background-size: cover cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition-duration: 1s;
  }
  .card:hover {
    box-shadow: 10px 10px 10px #aaa;
    transform: translate(-5px, -5px);
  }
  .card:hover .card-text {
    opacity: 1;
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
  .card-text {
    position: absolute;
    top: 85%;
    left: 50%;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    transform: translate(-50%, 0%);
    opacity: 0;
    transition-duration: 1.7s;
  }
</style>