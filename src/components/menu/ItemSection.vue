<template>
  <section class="item-section">
    <article class="item-list-box">
      <h5 class="item-list-text">CHECK WHAT YOU ORDER!</h5>
      <ul class="item-list">
        <item></item>
      </ul>
    </article>
  </section>
</template>

<script>
import item from './Item.vue'
export default {
  components: { item },
  name: "ItemSection",
  data: function(){
    return{}
  }
}
</script>

<style scope>
  .item-section{
    padding: 5vw 15vw;
  }
  .item-list-box{
    border: 1px solid black;
  }
  .item-list-text{
    font-weight: 900;
    padding: 2vw;
  }
</style>