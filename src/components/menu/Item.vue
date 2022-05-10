<template>
  <li class="item">
    <div class="item-image-con"></div>
    <div class="item-text-box">
      <h3 class="item-title">{{item.NAME}}</h3>
      <p class="item-exp">{{item.BRIEF}}</p>
      <div class="item-nut-box">
        <span class="item-kcal">{{item.KCAL}}kcal</span> / <span class="item-amount">{{item.AMOUNT}}ml</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name:"MenuItem",
  props:{
    item: Object,
    index: Number
  },
  data: function(){
    return {
      
    }
  },
  mounted: function(){
    this.setImage();
  },
  methods: {
    setImage: function(){
      const item = document.querySelectorAll('.item-image-con')[this.index];
      const image = new Image;
      image.src = require(`@/assets/image/${this.item.IMAGEPATH}`);
      image.classList.add('item-image');

      item.innerHTML = '';
      item.append(image);
    }
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
  .item-image-con{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 150px;
    height: 100%;
  }
  .item-image{
    height: 90%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
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
  @media screen and (max-width:980px) {
    .item{
      height: 140px;
    }
    .item-image-con{
      width: 120px;
      gap: 10px;
    }
    .item-image{
      height: 60%;
    }
  }
</style>