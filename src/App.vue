<template>
  <div class="quick-menu">
    <h3 class="quick-title">CAFETERRACE</h3>
    <ul class="quick-menu-list">
      <router-link to="/" @click.enter="this.setMenuIndex(1)">
        <li class="quick-menu-item menu-item-tohome">HOME</li>
      </router-link>
      <router-link to="/menu" @click.enter="this.setMenuIndex(2)">
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
      quickTitle: null,
      quickMenuToHome: null,
      quickMenuToMenu: null,
      menuIndex: 1,
    }
  },
  methods: {
    resize: function(){
      this.stageHeight = window.innerHeight;
    },
    scrollLoop: function(){
      this.quickMenu.style.backgroundColor = 'rgba(0, 0, 0, 1)';
      // this.quickMenuToHome.style.color = '#fff';
      // this.quickMenuToMenu.style.color = '#fff';
      this.quickTitle.style.opacity = 1;

      if(this.menuIndex === 1){
        if(window.scrollY < this.stageHeight){
          this.quickMenu.style.backgroundColor = 'rgba(255, 255, 255, 0)';
          // this.quickMenuToHome.style.color = '#fff';
          // this.quickMenuToMenu.style.color = '#fff';
          this.quickTitle.style.opacity = 0;
        }
      }
    },
    setMenuIndex: function(index){
      this.menuIndex = index;

      window.scrollTo(0, 1);
      window.scrollTo(0, 0);

      console.log(this.menuIndex);
    }
  },
  mounted: function(){
    this.quickMenu = document.querySelector('.quick-menu');
    this.quickTitle = document.querySelector('.quick-title');
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
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 1);
  z-index: 100;
  transition-duration: 1s;
}
.quick-title {
  position: absolute;
  left: 5%;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: underline;
  color: #fff;
  opacity: 0;
  transition-duration: 1s;
}
.quick-menu-list {
  position: absolute;
  right: 5%;
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
