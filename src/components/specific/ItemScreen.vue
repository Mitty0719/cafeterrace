<template>
<div class="specific-item-box">
  <section class="info-section">
    <article class="image-article">
      <!-- <div class="item-img"></div> -->
    </article>
    <article class="info-article">
      <h3 class="title">{{this.item.NAME}}</h3>
      <div class="sub-info">
        <div class="temp-info">
          <div class="temp temp-cold"><div class="temp-icon"></div>COLD</div>
          <div class="temp temp-hot"><div class="temp-icon"></div>HOT</div>
        </div>
        <div class="amount-info">
          <span class="kcal">{{this.item.KCAL}}</span>kcal / <span class="amount">{{this.item.AMOUNT}}</span>ml
        </div>
      </div>
      <ul class="nut-info">
        <li>Sugars <span class="sugar">{{this.item.SUGAR}}</span>g</li>
        <li>Protein <span class="protein">{{this.item.PROTEIN}}</span>g</li>
        <li>Saturated Fat <span class="fat">{{this.item.FAT}}</span>g</li>
        <li>Caffeine <span class="caffeine">{{this.item.CAFFEINE}}</span>mg</li>
      </ul>
      <p class="brief-info">{{this.item.BRIEF}}</p>
    </article>
  </section>
  <hr>
  <section class="exp-section">
    <h3 class="exp-title">I WANT IT!</h3>
    <p class="description">
      {{this.item.DESCRIPTION}}
    </p>
  </section>
  <hr>
  <section class="rat-section">
    <div class="rat-box">
      <span class="rat-text like-text">I LOVE IT!</span>
      <div class="rat-icon like-icon" @click="clickLike">{{like}}</div>
    </div>
    <div class="rat-box">
      <div class="rat-icon dislike-icon">{{dislike}}</div>
      <span class="rat-text dislike-text" @click="clickDislike">I HATE IT!</span>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "ItemScreen",
  props: {
    id: {type: Number, default: 0}
  },
  data: function(){
    return{
      item: {},
      like: 0,
      dislike: 0,
    };
  },
  mounted: function(){
    this.getItem();
  },
  methods: {
    getItem: function(){
    this.axios.get(`./api/item/specific/${this.id}`)
    .then((res)=>{
      this.item = res.data;
      this.like = this.item.ITEMLIKE;
      this.dislike = this.item.ITEMDISLIKE;
      this.setImage();
    })
    },
    clickLike: function(){
      this.axios.put(`./api/item/specific/${this.id}/like`)
      .then(()=>{
        this.like++;
      })
    },
    clickDislike: function(){
      this.axios.put(`./api/item/specific/${this.id}/dislike`)
      .then(()=>{
        this.dislike++;
      })
    },
    setImage: function(){
      const item = document.querySelector('.image-article');
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
hr{
  border: 2px solid black;
}

.specific-item-box{
  padding: 5vw 15vw;
}
.info-section{
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  height: 400px;
  margin: 10vw 0;
}
.image-article{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  border: 1px solid black;
}
.image-article .item-image{
  height: 200px;
}
.info-article{
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
}
.info-article .title{
  display: flex;
  align-items: center;
  flex: 1 1 0;
  font-size: 1.4rem;
  font-weight: 900;
}
.info-article .sub-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;
}
.sub-info .temp-info{
}
.temp-info .temp{
  float: left;
}
.temp-info .temp-cold{
  margin-right: 15px;
}
.temp-icon{
  float: left;
  width: 1rem;
  height: 1rem;
  margin-right: 10px;
}
.temp-info .temp-cold .temp-icon{
  background-color: #aaa;
}
.temp-info .temp-hot .temp-icon{
  background-color: #444;
}

.info-article .nut-info{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  flex: 2 1 0;
}
.info-article .brief-info{
  display: flex;
  align-items: center;
  flex: 2.5 1 0;
  line-height: 1.4rem;
}

.exp-section{
}
.exp-title{
  font-weight: 900;
  line-height: 3rem;
}
.description{
  padding: 20px;
}

.rat-section{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100px;
}
.rat-box{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.rat-box .rat-text{
  color: #333;
  font-weight: 600;
}
.rat-box .rat-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background: #eee;
  border: 0px solid #eee;
  border-radius: 1rem;
  box-sizing: border-box;
  color: #333;
  transition-duration: 1s;
  cursor: pointer;
}
.rat-box .rat-icon:hover{
  border: 1px solid #333;
  box-sizing: border-box;
}
@media screen and (max-width:720px) {
  .info-section{
    flex-flow: column nowrap;
    height: 600px;
  }

}
</style>