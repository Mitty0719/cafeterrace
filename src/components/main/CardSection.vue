<template>
    <section class="card-section sub-section">
      <article class="card-box">
        <card-item v-for="(image, index) in images" :key="image.src" v-bind:image="image.src" v-bind:index="index" v-bind:text="cardText[index]"></card-item>
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
      cardText: ['아라비카 원두', '풍부한 맛', '환경 패키지', '달콤한 디저트', '최상급 설비', '친절한 직원', '넓은 공간']
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