<template>
  <li class="item">
    <div class="item-image"></div>
    <div class="item-text-box">
      <h3 class="item-title">Americanno</h3>
      <p class="item-exp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, quis. Sint minima fugit blanditiis totam, iste esse. Enim, vitae provident eos omnis dignissimos minima accusantium deserunt!</p>
      <div class="item-nut-box">
        <span class="item-kcal">5kcal</span> / <span class="item-amount">500ml</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name:"MenuItem"
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