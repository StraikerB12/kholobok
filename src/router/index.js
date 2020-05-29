import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/admWeb/',
  hashbang: false,
  routes: [
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
      props: true
    }
  ]
});


export default router;
