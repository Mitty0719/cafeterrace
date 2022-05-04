<template>
  <section class="menu-section">
    <ul class="menu-list">
      <li class="menu-item" @click="this.clickMenu(1)">COFFEE</li>
      <li class="menu-item" @click="this.clickMenu(2)">TEA</li>
      <li class="menu-item" @click="this.clickMenu(3)">FRAPPE</li>
      <li class="menu-item" @click="this.clickMenu(4)">ADE</li>
      <li class="menu-item" @click="this.clickMenu(5)">DESSERT</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MenuSection",
  props: {
    menuIndex: Number
  },
  methods: {
    clickMenu: function(index){
      this.$emit('input', index);
    }
  }
}
</script>

<style scope>
  .menu-section{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 30vw;
  }
  .menu-list{
    display: flex;
    gap: 20px;
  }
  .menu-list .menu-item {
    margin: 5px;
  }
</style>