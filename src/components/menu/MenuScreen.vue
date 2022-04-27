<template>
  <menu-section></menu-section>
  <item-section></item-section>
</template>
<script>
import MenuSection from './MenuSection.vue';
import ItemSection from './ItemSection.vue';
export default {
  components: { MenuSection, ItemSection },
  name: "MenuScreen",
  props: {

  },
  data: function(){}
}
</script>
<style scoped>

</style>