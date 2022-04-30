import { createWebHistory, createRouter } from "vue-router";
import MainScreen from "./components/main/MainScreen.vue";
import MenuScreen from "./components/menu/MenuScreen.vue";
import ItemScreen from "./components/specific/ItemScreen.vue";
const routes = [
  {path:'/', component: MainScreen},
  {path:'/menu', component: MenuScreen},
  {path:'/item', component: ItemScreen}
]; // route config - 라우팅패스, 컴포넌트 정의

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;