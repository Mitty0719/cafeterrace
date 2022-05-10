<template>
  <div class="ground">
    <section class="main-section">
      <canvas class="main-canvas"></canvas>
      <div class="main-text">
        CAFETERRACE
      </div>
    </section>
    <text-section></text-section>
    <card-section v-bind:images="imagesInfo[1].arr"></card-section>
    <barcode-section v-bind:images="imagesInfo[2].arr"></barcode-section>
  </div>
</template>

<script>
import TextSection from './TextSection.vue';
import CardSection from './CardSection.vue';
import BarcodeSection from './BarcodeSection.vue';
export default {
  components: {
    TextSection,
    CardSection,
    BarcodeSection
  },
  name: 'MainScreen',
  data() {
    return {
      imagesInfo: [
        { arr: [[], []], type: 'video', prefix: 'main', cnt: 2, videoSequence: [420, 316] },
        { arr: [], type: 'image', prefix: 'card', cnt: 7 },
        { arr: [], type: 'image', prefix: 'barcode', cnt: 7 },
      ],
      currentVideoIndex: 0,
      currentVideoSequence: 0,
      stageWidth: 0,
      stageHeight: 0,
      maxSection: 3,
      currentSection: 0,
      sectionScroll: 0,
      currentScroll: 0,
      isScroll: false,
      scrollTime: 2000,
      scrollSpeed: 0.062,
      scrollReqId: 0,
    }
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
      if(this.currentVideoSequence >= this.imagesInfo[0].videoSequence[this.currentVideoIndex]){
        this.currentVideoIndex = this.currentVideoIndex === 0 ? 1 : 0;
        this.currentVideoSequence = 0;
      }
      const image = this.imagesInfo[0].arr[this.currentVideoIndex][this.currentVideoSequence];
      this.ctx.drawImage(image, 0, 0); // , this.stageWidth, this.stageHeight
      this.currentVideoSequence++;
      requestAnimationFrame(this.showVideo);
    },
    resize: function(){
      this.stageWidth = window.innerWidth;
      this.stageHeight = window.innerHeight;
      this.canvas.width = this.stageWidth;
      this.canvas.height = this.stageHeight;
    },
    setScroll: function(e){
      if(!this.isScroll){
        this.isScroll = true;
        const dy = e.deltaY;
        const minScroll = 10;
        if(dy > minScroll){
          if(this.currentSection < this.maxSection){
            this.currentSection++;
            this.setScreenTop();
          }
        }else if(dy < -minScroll){
          if(this.currentSection > 0){
            this.currentSection--;
            this.setScreenTop();
          }
        }
        this.sectionScroll = this.currentSection * this.stageHeight;
        setTimeout(() => {
          this.isScroll = false;
          cancelAnimationFrame(this.scrollReqId);
          }, this.scrollTime);
        }
    },
    setScreenTop: function(){
      this.scrollReqId = requestAnimationFrame(this.setScreenTop.bind(this));
      const gap = (this.sectionScroll - this.currentScroll) * this.scrollSpeed;
      window.scrollTo(0, this.currentScroll + gap);
      this.currentScroll = window.scrollY;
    }
    
  },
  async mounted(){
    // const ground = document.querySelector('.ground');
    this.canvas = document.querySelector('.main-canvas');
    this.ctx = this.canvas.getContext('2d');

    await this.loadImages();
    this.resize();
    this.showVideo();
    window.addEventListener('resize', this.resize.bind(this));
    // ground.addEventListener('wheel', (e) => {e.preventDefault();}, {passive: false});
    // ground.addEventListener('wheel', this.setScroll.bind(this));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .main-canvas {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
  }
  .main-text {
    position: absolute;
    font-size: 6rem;
    font-weight: 900;
    text-decoration: underline 12px solid #fff;
    color: #fff;
  }

  .sub-section {
    margin: 0 0 0 0;
  }
  
  @media screen and (max-width:980px) {
    .main-text {
      font-size: 3rem;
      text-decoration: underline 3px solid #fff;
    }
  }
</style>
