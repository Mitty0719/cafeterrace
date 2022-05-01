<template>
<div class="specific-item-box">
  <section class="info-section">
    <article class="img-article">
      <div class="item-img"></div>
    </article>
    <article class="info-article">
      <h3 class="title">AMERICANNO</h3>
      <div class="sub-info">
        <div class="temp-info">
          <div class="temp temp-cold"><div class="temp-icon"></div>COLD</div>
          <div class="temp temp-hot"><div class="temp-icon"></div>HOT</div>
        </div>
        <div class="amount-info">
          <span class="kcal">25kcal</span> / <span class="amount">500ml</span>
        </div>
      </div>
      <ul class="nut-info">
        <li>Sugars <span class="sugar">0g</span></li>
        <li>Protein <span class="protein">0g</span></li>
        <li>Saturated Fat <span class="fat">0g</span></li>
        <li>Caffeine <span class="caffeine">75mg</span></li>
      </ul>
      <p class="brief-info">What’s better than a great Americano coffee? Bitter and dark espresso is incredible, don’t get us wrong. But here’s the thing: it’s over so fast! Smooth it out with a Caffe Americano, espresso that’s tempered with a bit of hot water
      </p>
    </article>
  </section>
  <hr>
  <section class="exp-section">
    <h3 class="exp-title">I WANT IT!</h3>
  </section>
  <hr>
  <section class="rat-section">
    <div class="rat-box">
      <span class="rat-text like-text">I LOVE IT!</span>
      <div class="rat-icon like-icon"></div>
    </div>
    <div class="rat-box">
      <div class="rat-icon dislike-icon"></div>
      <span class="rat-text dislike-text">I HATE IT!</span>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "ItemScreen",
  props: {},
  data: function(){
    return {}
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
.img-article{
  flex: 1 1 0;
}
.img-article .item-img{
  width: 100%;
  height: 100%;
  background: #888;
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
  font-color: #333;
}
.rat-box .rat-icon{
  width: 2rem;
  height: 2rem;
  background: #888;
}
</style>