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
          component: () => import('./../views/lists/List.vue')
        },
        {
          path: '/new',
          name: 'new',
          component: () => import('./../views/lists/New.vue')
        },
        {
          path: '/discover',
          name: 'discover',
          component: () => import('./../views/lists/Discover.vue'),
          children: [
            {
              path: '/discover/:id',
              name: 'discover-playlist',
              component: () => import('./../views/lists/billboard/DiscoverList.vue')
            }
          ]
        },
        {
          path: '/album',
          name: 'album',
          component: () => import('./../views/lists/Album.vue')
        },
        {
          path: '/artists',
          name: 'artists',
          component: () => import('./../views/lists/Artists.vue')
        },
        {
          path: '/artists/:id',
          name: 'artist-list',
          component: () => import('./../views/lists/Artist.vue')
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
      path: '/detil/:id',
      name: 'list-detil',
      component: () => import('./../views/detil/ListDetil.vue')
    },
    {
      path: '*',
      redirect: () => import('./../views/error/404')
    }
  ]
})
