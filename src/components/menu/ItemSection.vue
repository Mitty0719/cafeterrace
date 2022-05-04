<template>
  <section class="item-section">
    <article class="item-list-box">
      <h5 class="item-list-text">CHECK WHAT YOU ORDER!</h5>
      <ul class="item-list">
        <router-link :to="{name: 'Item', params:{id: item.ID}}" v-for="item in items" :key="item.ID">
          <item v-bind:item="item"></item>
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
  props: {
    menuIndex: Number
  },
  data: function(){
    return{
      items: []
    }
  },
  methods: {
    getMenu: function(menuIndex){
      let menuStr;
      if(menuIndex === 1) menuStr = 'COFFEE';
      else if(menuIndex === 2) menuStr = 'TEA';
      else if(menuIndex === 3) menuStr = 'ADE';
      else if(menuIndex === 4) menuStr = 'FRAPPE';
      else if(menuIndex === 5) menuStr = 'DESSERT';

      this.axios.get(`/api/item/${menuStr}`)
        .then((res)=>{
          this.items = res.data;
        })
      }
  },
  mounted: function(){
    this.getMenu(this.menuIndex);
  },
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