<template>
  <div class="ground">
    <section class="main-section">
      <canvas class="main-canvas">
        <!-- <div class="main-text">
          CAFETERRACE
        </div> -->
      </canvas>
    </section>
    <section class="text-section">
      <article class="text-box">
        <ul class="keyword-list">
          <li class="keyword"><h5>SIMPLE</h5></li>
          <li class="keyword"><h5>SWEETY</h5></li>
          <li class="keyword"><h5>EMOTION</h5></li>
        </ul>
        <div class="comment-box">
          <p class="comment">this is sample text. I don't know what do you want.  so I prepare everything. this is sample text. I don't know what do you want.  so I prepare everything.this is sample text. I don't know what do you want.  so I prepare everything.this is sample text. I don't know what do you want.  so I prepare everything.this is sample text. I don't know what do you want.  so I prepare everything.</p>
        </div>
      </article>
    </section>
    <section class="card-section">
      <article class="card-box">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </article>
    </section>
    <section class="barcode-section">
      <article class="barcode-image">
        <div class="barcode-box">
          <div class="barcode"></div>
          <div class="barcode"></div>
          <div class="barcode"></div>
          <div class="barcode"></div>
          <div class="barcode"></div>
          <div class="barcode"></div>
          <div class="barcode"></div>
        </div>
      </article>
      <div class="address-box">
        <p class="address-text">
          Busan,<br/>
          Sasang-gu,<br/>
          Sasang-ro, 100-1<br/>
          <span class="map-link">->See the map</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainScreen',
  props: {
    msg: String,
    seen: String
  },
  methods: {
    loadImages: async function(){
      const waitImage = function(image){
        return new Promise((resolve) => {
          image.onload = () => resolve(image);
          image.onerror = () => {};
        })
      }
      for(const images of this.imagesInfo){
        for(let i = 1; i <= images.cnt; i++){
          if(images.type === 'image'){
            const image = new Image();
            image.src = require(`@/assets/${images.type}/${images.prefix + i.toString().padStart(3, '0')}.jpg`);
            images.arr.push(await waitImage(image));
            // image.onload = ()=>{
            //   // images.arr[i-1] = image;
            //   images.arr.push(image);
            // }
          } else if(images.type === 'video'){
            for(let j = 1; j <= images.videoSequence[i-1]; j++){
              const image = new Image();
              image.src = require(`@/assets/${images.type}/${images.prefix + i.toString().padStart(3, '0')}/${j.toString().padStart(4, '0')}.jpg`);
              images.arr[i-1].push(await waitImage(image));
              // image.onload = ()=>{
              //   // images.arr[i-1][j-1] = image;
              //   images.arr[i-1].push(image);
              // }
            }
          }
        }
      }
    },
    showVideo: function(){
      const parjs = JSON.parse(JSON.stringify(this.imagesInfo));
      console.log(parjs[0].arr);
    },
    resize: function(){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },
    getData: function(){

    }
  },
  data() {
    return {
      imagesInfo: [
        { arr: [[], []], type: 'video', prefix: 'main', cnt: 2, videoSequence: [420, 316] },
        { arr: [], type: 'image', prefix: 'card', cnt: 7 },
        { arr: [], type: 'image', prefix: 'barcode', cnt: 7 },
      ],
      currentVideoIndex: 0,
      currentVideoSequence: 0,
    }
  },
  async mounted(){
    this.canvas = document.querySelector('.main-canvas');
    this.ctx = this.canvas.getContext('2d');

    await this.loadImages();
    this.resize();

    this.showVideo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-section {
    width: 100vw;
    height: 100vh;
  }
  .main-canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: green;
  }
  .main-text {
    font-size: 2rem;
    color: #fff;
  }

  .text-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .text-box {
    width: 60%;
    height: 60%;
    display: flex;
    flex-flow: row nowrap;
  }
  .keyword-list {
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
  }
  .keyword-list .keyword {
    display: flex;
    align-items: center;
    flex: 1 1 0;
    font-size: 3rem;
  }
  .comment-box {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .comment-box .comment {
    line-height: 3rem;
  }

  .card-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .card-box {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 70%;
    height: 50%;
  }
  .card {
    background: #888;
  }
  .card:nth-child(3) {
    grid-column: 4 / 5;
  }
  .card:nth-child(4) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  .card:nth-child(5) {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }
  .card:nth-child(6) {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
  }
  .card:nth-child(7) {
    grid-row: 2 / 3;
    grid-column: 5 / 6;
  }

  .barcode-section {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .barcode-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .barcode-box {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    width: 30%;
    height: 30%;
  }
  .barcode-box .barcode {
    flex: 1 1 0;
    background: #888;
  }
  .address-box {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }
  .address-text {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 2rem;
  }
  .address-text .map-link {
    color: #aaa;
  }
</style>
