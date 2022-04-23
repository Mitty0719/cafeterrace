<template>
  <div class="ground">
    <section class="main-section">
      <canvas class="main-canvas">
        <!-- <div class="main-text">
          CAFETERRACE
        </div> -->
      </canvas>
    </section>
    <text-section></text-section>
    <card-section v-bind:images="imagesInfo[1].arr"></card-section>
    <barcode-section v-bind:images="imagesInfo[2].arr"></barcode-section>
  </div>
</template>

<script>
import TextSection from './main/TextSection.vue';
import CardSection from './main/CardSection.vue';
import BarcodeSection from './main/BarcodeSection.vue';
export default {
  components: {
    TextSection,
    CardSection,
    BarcodeSection
  },
  name: 'MainScreen',
  props: {},
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
      if(this.currentVideoSequence >= this.imagesInfo[0].videoSequence[this.currentVideoIndex]){
        this.currentVideoIndex = this.currentVideoIndex === 0 ? 1 : 0;
        this.currentVideoSequence = 0;
      }
      const image = this.imagesInfo[0].arr[this.currentVideoIndex][this.currentVideoSequence];
      this.ctx.drawImage(image, 0, 0, this.stageWidth, this.stageHeight);
      this.currentVideoSequence++;
      requestAnimationFrame(this.showVideo);
    },
    resize: function(){
      this.stageWidth = window.innerWidth;
      this.stageHeight = window.innerHeight;
      this.canvas.width = this.stageWidth;
      this.canvas.height = this.stageHeight;
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


  

  
</style>
