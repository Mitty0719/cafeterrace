<template>
  <div class="quick-menu">
    <ul class="quick-menu-list">
      <router-link to="/">
        <li class="quick-menu-item menu-item-tohome">HOME</li>
      </router-link>
      <router-link to="/menu">
        <li class="quick-menu-item menu-item-tomenu">MENU</li>
      </router-link>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      stageHeight: window.innerHeight,
      quickMenu: null,
      quickMenuToHome: null,
      quickMenuToMenu: null,
      isTop: true
    }
  },
  methods: {
    resize: function(){
      this.stageHeight = window.innerHeight;
    },
    scrollLoop: function(){
      if(window.scrollY > this.stageHeight){
        if(this.isTop){
          this.quickMenu.style.backgroundColor = 'rgba(0, 0, 0, 1)';
          this.quickMenuToHome.style.color = '#fff';
          this.quickMenuToMenu.style.color = '#fff';
          this.isTop = false;
        }
      }else{
        if(!this.isTop){
          this.quickMenu.style.backgroundColor = 'rgba(255, 255, 255, 0)';
          this.quickMenuToHome.style.color = '#fff';
          this.quickMenuToMenu.style.color = '#fff';
          this.isTop = true;
        }
      }
    }
  },
  mounted: function(){
    this.quickMenu = document.querySelector('.quick-menu')
    this.quickMenuToHome = document.querySelector('.menu-item-tohome');
    this.quickMenuToMenu = document.querySelector('.menu-item-tomenu');

    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.scrollLoop);
  }
}
</script>

<style>
@import './assets/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
.quick-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  z-index: 100;
  transition-duration: 1s;
}
.quick-menu-list {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}
.quick-menu-item {
  float: left;
  transition-duration: 1s;
  color: #fff;
  font-weight: 600;
}
.quick-menu-item:hover {
  text-decoration: underline;
}
.menu-item-tohome {
  margin-right: 20px;
}
</style>
