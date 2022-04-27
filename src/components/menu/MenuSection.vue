<template>
  <section class="menu-section">
    <ul class="menu-list">
      <li class="menu-item">COFFEE</li>
      <li class="menu-item">TEA</li>
      <li class="menu-item">FRAPPE</li>
      <li class="menu-item">ADE</li>
      <li class="menu-item">DESSERT</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MenuSection",
  data: function(){
    return{}
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