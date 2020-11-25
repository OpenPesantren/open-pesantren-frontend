import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Storage from "@/store/Storage";
import Constant from "@/config/Constant";
import HomePage from "@/views/HomePage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/pendidikan',
    name: 'PendidikanPage',
    component: () => import('../views/PendidikanPage.vue')
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: () => import('../views/GalleryPage.vue')
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
