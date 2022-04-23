<template>
    <section class="card-section sub-section">
      <article class="card-box">
        <card-item v-for="(image, index) in images" :key="image.src" v-bind:image="image.src" v-bind:index="index"></card-item>
      </article>
    </section>
</template>
<script>
import CardItem from './CardItem.vue'
export default {
  components: { CardItem },
  name: "CardSection",
  props: {
    images: Array,
  },
  data: function(){
    return{
    }
  }
}
</script>
<style scoped>
  .card-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .card-box {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 70%;
    height: 50%;
  }
</style>