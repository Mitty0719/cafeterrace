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
    width: 100%;
  }
  .card-box {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 70%;
    height: 50%;
  }
  @media screen and (max-width:980px) {
    .card-box {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width:720px) {
    .card-box {
      grid-template-rows: repeat(7, 1fr);
      grid-template-columns: initial;
    }
  }
</style>