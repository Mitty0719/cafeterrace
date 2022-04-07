<template>
  <MainScreen msg="뷰 배우는 중" seen="true"/>
</template>

<script>
import MainScreen from './components/MainScreen.vue'

export default {
  name: 'App',
  components: {
    MainScreen
  }
}
</script>

<style>
@import './assets/reset.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
