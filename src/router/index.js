import Vue from 'vue';
import Router from 'vue-router';

import store from '~/store';

import middlewarePipeline from './middlewarePipeline';
import auth from './middleware/auth';
import guest from './middleware/guest';


Vue.use(Router);

// Массив с роутами отделен для легкого доступа
export const routers = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('~/components/MainPage'),
    meta: {
      visible: false
    }
  },

  {
    path: '/login',
    name: 'Authorization',
    component: () => import('~/components/Authorization'),
    meta: {
      middleware: [guest],
      visible: false
    }
  },
  {
    path: '/regin',
    name: 'Registration',
    component: () => import('~/components/Registration'),
    meta: {
      middleware: [guest],
      visible: false
    }
  },
  {
    path: '/logreset',
    name: 'LogReset',
    component: () => import('~/components/LogReset'),
    meta: {
      middleware: [guest],
      visible: false
    }
  },


  {
    path: '/main',
    name: 'AdminPanel',
    component: () => import('~/components/AdminPanel/AdminPanel'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Панель",
      visible: true,
      rights: ['client', 'redactor'] // Указанны статусы которым доступ закрыт
    }
  },
  {
    path: '/cabinet',
    name: 'CabinetPage',
    component: () => import('~/components/CabinetPage/CabinetPage'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Кабиет",
      visible: false,
      rights: []
    },
  },


  {
    path: '/video',
    name: 'VideoPage',
    component: () => import('~/components/VideoPage/VideoPage'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Видео",
      visible: true,
      rights: []
    }
  },
  {
    path: '/tikets',
    name: 'TiketsPage',
    component: () => import('~/components/TiketsPage/TiketsPage'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Тикеты",
      visible: true,
      rights: []
    }
  },
  {
    path: '/player',
    name: 'PlayerPage',
    component: () => import('~/components/PlayerPage/PlayerPage'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Плеер",
      visible: true,
      rights: []
    }
  },
  
  {
    path: '/users',
    name: 'UsersPage',
    component: () => import('~/components/UsersPage/UsersPage'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Пользователи",
      visible: true,
      rights: ['client', 'redactor', 'managing']
    }
  },
  {
    path: '/stats',
    name: 'StatsPage',
    component: () => import('~/components/StatsPage/StatsPage'),
    props: true,
    meta: {
      middleware: [auth],
      title: "Статистика",
      visible: true,
      rights: ['client', 'redactor', 'managing']
    }
  },


  {
    path: '/*',
    name: 'StatsPage',
    component: () => import('~/components/CompositeBlocks/Error404Page'),
    props: true,
    meta: {
      // middleware: [auth],
      title: "Ошибка 404",
      visible: false,
      rights: []
    }
  }
  
]

export const router = new Router({
  mode: 'history',
  base: '/',
  hashbang: false,
  routes: routers
});

// Выполнение промежуточного ПО
router.beforeEach((to, from, next) => {
  if(!to.meta.middleware){ return next()} // Проверка на наличие Middleware
  const middleware = to.meta.middleware; // Выборка Middleware
  const context = {to, from, next, store}; // Установка нового context
  return middleware[0]({ ...context, next: middlewarePipeline(context, middleware, 1) }); // Передача на конвеер
});




