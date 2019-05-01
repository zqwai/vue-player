import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./../views/Home.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('./../views/List.vue'),
      children: [
        {
          path: '/list',
          name: 'list',
          component: () => import('./../views/list/List.vue')
        },
        {
          path: '/new',
          name: 'new',
          component: () => import('./../views/list/New.vue')
        },
        {
          path: '/discover',
          name: 'discover',
          component: () => import('./../views/list/Discover.vue'),
          children: [
            {
              path: '/discover/:id',
              name: 'discover-playlist',
              component: () => import('./../views/list/billboard/DiscoverList.vue')
            }
          ]
        },
        {
          path: '/album',
          name: 'album',
          component: () => import('./../views/list/Album.vue')
        },
        {
          path: '/artists',
          name: 'artists',
          component: () => import('./../views/list/Artists.vue')
        },
        {
          path: '/artists/:id',
          name: 'artist-list',
          component: () => import('./../views/list/Artist.vue')
        }
      ]
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./../views/Favorites.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./../views/User.vue')
    },
    {
      path: '*',
      redirect: () => import('./../views/error/404')
    }
  ]
})
