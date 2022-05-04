<template>
  <menu-section :value="menuIndex" @input="this.setMenuIndex"></menu-section>
  <item-section v-bind:menuIndex="menuIndex"></item-section>
</template>
<script>
import MenuSection from './MenuSection.vue';
import ItemSection from './ItemSection.vue';
export default {
  components: { MenuSection, ItemSection },
  name: "MenuScreen",
  data: function(){
    return{
      menuIndex: 1,
    }
  },
  methods: {
    setMenuIndex: function(index){
      this.menuIndex = index;
    }
  }
}
</script>
<style scoped>

</style>