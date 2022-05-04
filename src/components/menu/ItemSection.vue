<template>
  <section class="item-section">
    <article class="item-list-box">
      <h5 class="item-list-text">CHECK WHAT YOU ORDER!</h5>
      <ul class="item-list">
<<<<<<< HEAD
        <router-link :to="{name: 'Item', params:{id: item.ID}}" v-for="item in items" :key="item.ID">
          <item v-bind:item="item"></item>
=======
        <router-link to="/item" v-for="item in items" :key="item.id">
          <item v-bind:id="item"></item>
>>>>>>> 7915519f4cc17534ba7fd0feef0259506b2ea636
        </router-link>
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
    return{
      items: []
    }
  },
  mounted: function(){
    this.axios.get('/api/item')
      .then((res)=>{
        this.items = res.data;
      })
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