import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routers = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('~/components/MainPage')
  },

  {
    path: '/login',
    name: 'Authorization',
    component: () => import('~/components/Authorization'),
    props: true
  },
  {
    path: '/regin',
    name: 'Registration',
    component: () => import('~/components/Registration'),
    props: true,
    meta: {}
  },
  {
    path: '/logreset',
    name: 'LogReset',
    component: () => import('~/components/LogReset'),
    props: true,
    meta: {}
  }
]

export const router = new Router({
  mode: 'history',
  base: '/',
  hashbang: false,
  routes: routers
});
