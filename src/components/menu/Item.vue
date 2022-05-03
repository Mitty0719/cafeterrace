<template>
  <li class="item">
    <div class="item-image"></div>
    <div class="item-text-box">
      <h3 class="item-title">{{item.name}}</h3>
      <p class="item-exp">{{item.description}}</p>
      <div class="item-nut-box">
        <span class="item-kcal">{{item.kcal}}kcal</span> / <span class="item-amount">{{item.amount}}ml</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name:"MenuItem",
  props:{
    item: Object
  }
}
</script>

<style scope>
  .item{
    display: flex;
    flex-direction: row;
    height: 180px;
    padding: 2vw;
    gap: 30px;
  }
  .item-image{
    flex-shrink: 0;
    width: 150px;
    background: red;
  }
  .item-text-box{
    display: flex;
    flex-flow: column nowrap;
  }
  .item-title{
    display: flex;
    align-items: center;
    flex: 0.7 1 0;
    font-size: 1.4rem;
    font-weight: 900;
  }
  .item-exp{
    flex: 1 1 0;
  }
  .item-nut-box{
    flex: 0.3 1 0;
  }
  .item-nut-box p{
    float: left;
  }
</style>