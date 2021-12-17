import { createRouter, createWebHistory } from 'vue-router'
// createWebHistory 路由有两种模式 history模式和hash模式
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'
const routes = [
  {
    path: '/', // 路由路径：必须以/开头
    name: 'Home',  // 路由名称 可选项
    component: Home // 路由组件
  },
  {
    path: '/start', // 代表首页
    name: 'Start', 
    component: Start // 路由组件
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 路由懒加载
    // 按需引入
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router