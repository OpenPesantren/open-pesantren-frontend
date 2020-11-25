import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Storage from "@/store/Storage";
import Constant from "@/config/Constant";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiredAuth: any = to["matched"].some((record: Object) => record["meta"].requiredAuth);
  if (requiredAuth) {
    if (!Storage.isCookieExpired() && Storage.getCookie().get(Constant.KEY_CURRENT_LOGIN) != null) {
      next();
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next();
  }
});

export default router
