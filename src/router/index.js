import { createRouter, createWebHashHistory } from 'vue-router'

// 公开路由
const publicRoutes = [
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
