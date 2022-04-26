import { createWebHistory, createRouter } from "vue-router";
import MainScreen from "./components/MainScreen.vue";
const routes = [
  {path:'/', component: MainScreen}
]; // route config - 라우팅패스, 컴포넌트 정의

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;