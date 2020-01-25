import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Processes from '../views/Processes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/processes',
    name: 'processes',
    component: Processes
  },
  {
    path: '/itto/:value',
    name: 'itto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "itto" */ '../views/Itto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
