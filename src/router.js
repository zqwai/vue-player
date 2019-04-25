import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('./views/List.vue'),
      children: [
        {
          path: '/list',
          name: 'list',
          component: () => import('./views/list/List.vue')
        },
        {
          path: '/new',
          name: 'new',
          component: () => import('./views/list/New.vue')
        },
        {
          path: '/billboard',
          name: 'billboard',
          component: () => import('./views/list/Billboard.vue')
        },
        {
          path: '/album',
          name: 'album',
          component: () => import('./views/list/Album.vue')
        },
        {
          path: '/artist',
          name: 'artist',
          component: () => import('./views/list/Artist.vue')
        }
      ]
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./views/Favorites.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '*',
      redirect: () => import('./views/error/404')
    }
  ]
})
